"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { ContentBlock } from "@/components/admin/BlockBuilder/BlockBuilder";
import { FaPaperPlane, FaImage, FaArrowLeft, FaTrash } from "react-icons/fa";

import styles from "./createBlog.module.css";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const BlockBuilder = dynamic(
  () => import("@/components/admin/BlockBuilder/BlockBuilder"),
  { ssr: false }
);

export default function CreateBlogPage() {
  const router = useRouter();

  const [isDirty, setIsDirty] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [content, setContent] = useState("");

  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [category, setCategory] = useState("Health Insurance");
  const [status, setStatus] = useState("Published");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const editorConfig = useMemo(
    () => ({
      readonly: false,
      height: 400,
      buttons: [
        "bold", "italic", "underline", "|",
        "ul", "ol", "|",
        "font", "fontsize", "|",
        "paragraph", "|",
        "image", "table", "link", "|",
        "align", "|",
        "undo", "redo", "|",
        "hr", "fullsize", "source",
      ],
    }),
    []
  );
  const handleBlockImageUpload = async (
    file: File,
    blockIndex: number
  ) => {
    const formData = new FormData();
    formData.append("blockFile", file);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/upload-block-image`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Upload failed");
    }

    return result.url;
  };
  const generateSlug = (value: string) => {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
  };

  const markDirty = () => {
    setIsDirty(true);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
      markDirty();
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setImage(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
    }
    setImagePreview(null);
    markDirty();
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isDirty) {
      router.push("/admin/blogs");
      return;
    }
    setShowExitModal(true);
  };

  const handlePublish = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("excerpt", excerpt);
      formData.append("content", content);
      formData.append("author", author);
      formData.append("category", category);
      formData.append("status", status);
      formData.append("publishedAt", date);

      if (image) {
        formData.append("image", image);
      }

      const cleanedBlocks = contentBlocks.map((block) => ({
        id: block.id,
        type: block.type,
        content: block.content,
        items: block.items,
        language: block.language,
        rows: block.rows,
        url: block.url,
      }));
      
      formData.append(
        "contentBlocks",
        JSON.stringify(cleanedBlocks)
      );
      
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to create blog");
      }

      router.push("/admin/blogs");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className={styles.heroHeader}>
            <div>
              <span className={styles.badge}>Content Management</span>
              <h1>Create New Blog</h1>
              <p>Create and publish SEO optimized insurance articles.</p>
            </div>
            <button type="button" className={styles.backBtn} onClick={handleBack}>
              <FaArrowLeft size={14} />
              Back to Blogs
            </button>
          </div>
        </motion.div>

        <div className={styles.formCard}>
          <div className={styles.grid}>
            {/* Meta Fields Grouping */}
            <div className={styles.field}>
              <label>Blog Title</label>
              <input
                type="text"
                value={title}
                placeholder="e.g., Complete Health Insurance Guide"
                onChange={(e) => {
                  setTitle(e.target.value);
                  setSlug(generateSlug(e.target.value));
                  markDirty();
                }}
              />
            </div>

            <div className={styles.field}>
              <label>Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                  markDirty();
                }}
              />
            </div>

            <div className={styles.field}>
              <label>Category</label>
              <div className={styles.selectWrapper}>
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    markDirty();
                  }}
                >
                  <option value="Health Insurance">Health Insurance</option>
                  <option value="Life Insurance">Life Insurance</option>
                  <option value="Car Insurance">Car Insurance</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label>Status</label>
              <div className={styles.selectWrapper}>
                <select
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                    markDirty();
                  }}
                >
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>
            </div>

            <div className={styles.fieldFull}>
              <label>Publish Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  markDirty();
                }}
              />
            </div>

            <div className={styles.fieldFull}>
              <label>Featured Image</label>
              <label className={styles.fileDropzone}>
                <input
                  type="file"
                  accept="image/*"
                  className={styles.hiddenFileInput}
                  onChange={handleImageChange}
                />
                <div className={styles.dropzoneContentWrapper}>
                  <div className={styles.dropzoneInfoSide}>
                    <FaImage className={styles.dropzoneIcon} />
                    <div className={styles.dropzoneText}>
                      {image ? (
                        <span className={styles.fileNameSelected}>
                          Selected: {image.name} ({(image.size / 1024).toFixed(1)} KB)
                        </span>
                      ) : (
                        <>
                          <strong>Click to upload</strong> or drag and drop
                          <span>PNG, JPG or WEBP up to 5MB</span>
                        </>
                      )}
                    </div>
                  </div>

                  {imagePreview && (
                    <div className={styles.previewContainer}>
                      <img
                        src={imagePreview}
                        alt="Featured image preview"
                        className={styles.imagePreviewFrame}
                      />
                      <button
                        type="button"
                        className={styles.removeImageBtn}
                        onClick={handleRemoveImage}
                        title="Remove Image"
                      >
                        <FaTrash size={12} />
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </label>
            </div>

            <div className={styles.fieldFull}>
              <label>Short Description</label>
              <textarea
                rows={3}
                value={excerpt}
                placeholder="Provide a summary for previews and search engine display cards..."
                onChange={(e) => {
                  setExcerpt(e.target.value);
                  markDirty();
                }}
              />
            </div>

            {/* Core Primary Editor Structure */}
            <div className={styles.fieldFull}>
              <label>Main Blog Content Editor</label>
              <div className={styles.editorWrapper}>
                <JoditEditor
                  value={content}
                  config={editorConfig}
                  onBlur={(value) => {
                    setContent(value);
                    markDirty();
                  }}
                />
              </div>
            </div>

            {/* Block Builder Shifted Intentionally to Bottom Stack Area */}
            <div className={styles.blockSectionWrapper}>
              <label className={styles.sectionLabel}>Additional Dynamic Content Blocks</label>
              <BlockBuilder
                value={contentBlocks}
                onChange={(blocks) => {
                  setContentBlocks(blocks);
                  markDirty();
                }}
                onImageUpload={handleBlockImageUpload}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.publishBtn} onClick={handlePublish}>
              <FaPaperPlane size={14} />
              Publish Blog
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showExitModal && (
          <div className={styles.modalOverlay}>
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <h3>Unsaved Changes</h3>
              <p>
                You have unsaved additions or edits on this blog. Are you sure you
                want to discard them and return to the main archive?
              </p>
              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.stayBtn}
                  onClick={() => setShowExitModal(false)}
                >
                  Stay Here
                </button>
                <button
                  type="button"
                  className={styles.discardBtn}
                  onClick={() => router.push("/admin/blogs")}
                >
                  Discard Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}