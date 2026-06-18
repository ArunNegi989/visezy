"use client";

import dynamic from "next/dynamic";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useRouter,
  useParams,
} from "next/navigation";

import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaSave,
  FaImage,
  FaTrash,
  FaCloudUploadAlt
} from "react-icons/fa";

import styles from "./editBlog.module.css";

const JoditEditor = dynamic(
  () => import("jodit-react"),
  { ssr: false }
);

const BlockBuilder = dynamic(
  () => import("@/components/admin/BlockBuilder/BlockBuilder"),
  { ssr: false }
);

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [dirty, setDirty] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // States for Featured Image Handling
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [localPreview, setLocalPreview] = useState<string>("");
  const [serverImage, setServerImage] = useState<string>("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [category, setCategory] = useState("Health Insurance");
  const [status, setStatus] = useState("Draft");
  const [date, setDate] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [contentBlocks, setContentBlocks] = useState<any[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isValidImageUrl = (url: string) => {
    try {
      const parsed = new URL(url);

      return (
        parsed.protocol === "http:" ||
        parsed.protocol === "https:"
      );
    } catch {
      return false;
    }
  };
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = "Blog title is required";
    }

    if (!excerpt.trim()) {
      newErrors.excerpt = "Short description is required";
    }

    if (!content.trim()) {
      newErrors.content = "Blog content is required";
    }

    if (!date) {
      newErrors.date = "Publish date is required";
    }

    if (!serverImage && !imageFile) {
      newErrors.image = "Featured image is required";
    }

    contentBlocks.forEach((block, index) => {
      switch (block.type) {
        case "h2":
        case "h3":
        case "paragraph":
        case "quote":
        case "code":
          if (!block.content?.trim()) {
            newErrors[`block-${index}`] =
              `${block.type} block cannot be empty`;
          }
          break;

        case "list":
          if (!block.items?.some((item: string) => item.trim())) {
            newErrors[`block-${index}`] =
              "List block cannot be empty";
          }
          break;

        case "image":
          if (!block.url?.trim()) {
            newErrors[`block-${index}`] =
              "Image URL or upload is required";
          } else if (
            block.url.startsWith("http") &&
            !isValidImageUrl(block.url)
          ) {
            newErrors[`block-${index}`] =
              "Invalid image URL";
          }
          break;
      }
    });

    setErrors(newErrors);

    return newErrors;
  };
  const markDirty = () => setDirty(true);

  // Auto-generate Slug from Title
  useEffect(() => {
    if (title) {
      const generatedSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
        .replace(/\s+/g, "-")         // Replace spaces with hyphens
        .replace(/-+/g, "-");        // Remove consecutive hyphens
      setSlug(generatedSlug);
    }
  }, [title]);

  // Clean up Object URL preview on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      if (localPreview) {
        URL.revokeObjectURL(localPreview);
      }
    };
  }, [localPreview]);

  const editorConfig = useMemo(
    () => ({
      readonly: false,
      height: 500,
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

  // Helper utility to safely join URL strings
  const safeUrlJoin = (base: string, path: string) => {
    if (!base) return path;
    if (!path) return base;
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const cleanPath = path.startsWith('/') ? path : '/' + path;
    return `${cleanBase}${cleanPath}`;
  };

  // FETCH BLOG PIPELINE
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const baseApiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/blogs";
        const fetchUrl = baseApiUrl.endsWith('/blogs') ? `${baseApiUrl}/${params.id}` : `${baseApiUrl}/blogs/${params.id}`;

        const response = await fetch(fetchUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }

        const result = await response.json();
        const blog = result.data;

        setTitle(blog.title);
        setSlug(blog.slug || "");
        setAuthor(blog.author);
        setCategory(blog.category);
        setStatus(blog.status);
        setExcerpt(blog.excerpt);
        setContent(blog.content);
        setDate(blog.publishedAt?.split("T")[0] || "");

        if (blog.contentBlocks && Array.isArray(blog.contentBlocks)) {
          const parsedBlocks = blog.contentBlocks.map((block: any) => {
            if (block.type === "image") {
              const rawPath = block.content || block.url || "";
              const fullUrl = (rawPath.startsWith("http://") || rawPath.startsWith("https://"))
                ? rawPath
                : safeUrlJoin(process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000", rawPath);

              return {
                ...block,
                url: fullUrl,
                content: rawPath
              };
            }
            return block;
          });
          setContentBlocks(parsedBlocks);
        } else {
          setContentBlocks([]);
        }

        if (blog.image) {
          setServerImage(safeUrlJoin(process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000", blog.image));
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!dirty) {
      router.push("/admin/blogs");
      return;
    }
    setShowModal(true);
  };

  const handleRemoveLocalImage = () => {
    setImageFile(null);
    if (localPreview) {
      URL.revokeObjectURL(localPreview);
      setLocalPreview("");
    }
    markDirty();
  };

  const handleRemoveServerImage = () => {
    setServerImage("");
    markDirty();
  };

  const handleBlockImageUpload = async (file: File, blockIndex: number) => {
    const formData = new FormData();
    formData.append("blockFile", file);

    try {
      const baseApiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/blogs";
      const uploadUrl = baseApiUrl.endsWith('/blogs')
        ? `${baseApiUrl}/upload-block-image`
        : `${baseApiUrl}/blogs/upload-block-image`;

      console.log("Uploading block image to:", uploadUrl);

      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (err) {
        console.error("Raw response parsing error:", responseText);
        throw new Error("Server returned an invalid format. Check your router configuration.");
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Block image upload failed");
      }

      setContentBlocks((prevBlocks) => {
        const nextBlocks = [...prevBlocks];
        if (nextBlocks[blockIndex]) {
          const completeWebUrl = safeUrlJoin(process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000", result.url);
          nextBlocks[blockIndex] = {
            ...nextBlocks[blockIndex],
            url: completeWebUrl,
            content: result.url
          };
        }
        return nextBlocks;
      });

      markDirty();
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleSave = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const validationErrors = validateForm();

      if (Object.keys(validationErrors).length > 0) {
        const firstError = document.querySelector(
          "[data-error='true']"
        );

        firstError?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        (firstError as HTMLElement)?.focus();

        return;
      }

      const sanitizedBlocks = contentBlocks.map((block) => {
        if (block.type === "image") {
          let targetUrlPath = block.url || block.content || "";

          if (
            targetUrlPath.trim() === "" ||
            targetUrlPath === "http://localhost:5000/" ||
            targetUrlPath === "http://127.0.0.1:5000/" ||
            targetUrlPath === "http://localhost:5000" ||
            targetUrlPath === "http://127.0.0.1:5000"
          ) {
            return { ...block, content: "", url: "" };
          }

          if (targetUrlPath.includes("http://localhost:5000/http")) {
            targetUrlPath = targetUrlPath.replace("http://localhost:5000/", "");
          }
          if (targetUrlPath.includes("http://127.0.0.1:5000/http")) {
            targetUrlPath = targetUrlPath.replace("http://127.0.0.1:5000/", "");
          }

          const isAbsolute = targetUrlPath.startsWith("http://") || targetUrlPath.startsWith("https://");

          let finalPath = targetUrlPath;
          if (!isAbsolute) {
            finalPath = targetUrlPath
              .replace("http://localhost:5000", "")
              .replace("http://127.0.0.1:5000", "");

            if (!finalPath.startsWith("/")) {
              finalPath = "/" + finalPath;
            }
          }

          return {
            ...block,
            content: finalPath,
            url: finalPath
          };
        }
        return block;
      });

      const formData = new FormData();
      formData.append("title", title);
      formData.append("slug", slug);
      formData.append("excerpt", excerpt);
      formData.append("content", content);
      formData.append("contentBlocks", JSON.stringify(sanitizedBlocks));
      formData.append("author", author);
      formData.append("category", category);
      formData.append("status", status);
      formData.append("publishedAt", date);
      formData.append("serverImageRemaining", serverImage ? "true" : "false");

      if (imageFile) {
        formData.append("image", imageFile);
      }

      const baseApiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/blogs";
      const saveUrl = baseApiUrl.endsWith('/blogs')
        ? `${baseApiUrl}/${params.id}`
        : `${baseApiUrl}/blogs/${params.id}`;

      console.log("Saving entity updates to path location:", saveUrl);

      const response = await fetch(saveUrl, {
        method: "PUT",
        body: formData,
      });

      const responseText = await response.text();
      let result;
      try {
        result = JSON.parse(responseText);
      } catch (err) {
        throw new Error("Server communication broken. Please verify backend routes configuration structures.");
      }

      if (!response.ok) {
        throw new Error(result.message || "Failed to update blog content layouts");
      }

      setDirty(false);
      router.push("/admin/blogs");
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  };

  if (loading) {
    return <div className={styles.wrapper}>Loading...</div>;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <span className={styles.badge}>Content Management</span>
            <h1>Edit Blog</h1>
            <p>Update and manage blog content structures.</p>
          </div>

          <button
            type="button"
            onClick={handleBack}
            className={styles.backBtn}
          >
            <FaArrowLeft />
            Back to Blogs
          </button>
        </motion.div>

        <div className={styles.formCard}>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label>Blog Title</label>
              <input
                type="text"
                data-error={!!errors.title}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  markDirty();
                }}
              />
              {errors.title && (
                <span className={styles.errorText}>
                  {errors.title}
                </span>
              )}
            </div>

            <div className={styles.field}>
              <label>Slug (Auto-generated)</label>
              <input
                type="text"
                value={slug}
                readOnly
                placeholder="slug-format-preview"
                style={{ backgroundColor: "var(--premium-bg-secondary, #f9f9f9)", cursor: "not-allowed" }}
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

            <div className={styles.field}>
              <label>Status</label>
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

            <div className={styles.field}>
              <label>Publish Date</label>
              <input
                type="date"
                data-error={!!errors.date}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  markDirty();
                }}
              />
            </div>

            {/* Premium Dynamic Dual-Image Preview Grid Section */}
            <div className={styles.fieldFull}>
              <label>Blog Featured Asset Manager</label>
              <div data-error={!!errors.image}
                className={styles.imageSplitDashboard}>

                {/* LEFT SIDE: Active Upload Controller Container */}
                <div className={styles.uploadControlColumn}>
                  <span className={styles.subDashboardLabel}>Upload New Asset</span>

                  {!localPreview ? (
                    <label className={styles.premiumDropzone}>
                      <input
                        type="file"
                        accept="image/*"
                        className={styles.hiddenFileInput}
                        onChange={(e) => {
                          if (e.target.files?.[0]) {
                            const file = e.target.files[0];
                            setImageFile(file);
                            setLocalPreview(URL.createObjectURL(file));
                            markDirty();
                          }
                        }}
                      />
                      <FaCloudUploadAlt className={styles.uploadIconCloud} />
                      <div className={styles.uploadDropzoneTexts}>
                        <strong>Click to replace header image</strong>
                        <span>Supports PNG, JPG, WEBP formats</span>
                      </div>
                    </label>
                  ) : (
                    <div className={styles.previewImageCard}>
                      <span className={styles.previewBadgeLocal}>New Selection Draft</span>
                      <img src={localPreview} alt="Local asset update staging flow" />
                      <button
                        type="button"
                        className={styles.removeAssetBtnFloating}
                        onClick={handleRemoveLocalImage}
                        title="Remove Local Selected Draft"
                      >
                        <FaTrash size={12} /> Clear Selection
                      </button>
                    </div>
                  )}
                </div>

                {/* RIGHT SIDE: Server/Active Image Container */}
                <div className={styles.uploadControlColumn}>
                  <span className={styles.subDashboardLabel}>Current Live Cover</span>

                  {serverImage ? (
                    <div className={styles.previewImageCard}>
                      <span className={styles.previewBadgeServer}>Active Production</span>
                      <img src={serverImage} alt="Current active database live layout view" />
                      <button
                        type="button"
                        className={styles.removeAssetBtnFloatingServer}
                        onClick={handleRemoveServerImage}
                        title="Remove Existing Server Image"
                      >
                        <FaTrash size={12} /> Remove Live Asset
                      </button>
                    </div>
                  ) : (
                    <div className={styles.emptyAssetFallbackState}>
                      <FaImage size={24} className={styles.fallbackIcon} />
                      <span>No production asset is assigned to this blog post post meta structure.</span>
                    </div>
                  )}
                </div>

              </div>
              {errors.image && (
                <span className={styles.errorText}>
                  {errors.image}
                </span>
              )}
            </div>

            <div className={styles.fieldFull}>
              <label>Short Description</label>
              <textarea
                rows={4}
                data-error={!!errors.excerpt}
                value={excerpt}
                onChange={(e) => {
                  setExcerpt(e.target.value);
                  markDirty();
                }}
              />
              {errors.excerpt && (
                <span className={styles.errorText}>
                  {errors.excerpt}
                </span>
              )}
            </div>

            <div className={styles.fieldFull}>
              <label>Blog Content</label>
              <div data-error={!!errors.content}
                className={styles.editorWrapper}>
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

            {/* Container mapping manager safe context flags wrapper check */}
            <div className={styles.fieldFull}>
              <label>Additional Content Blocks</label>
              <BlockBuilder
                value={contentBlocks}
                onChange={(blocks) => {
                  setContentBlocks(blocks);
                  markDirty();
                }}
                onImageUpload={handleBlockImageUpload}
                errors={errors}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.saveBtn}
              onClick={handleSave}
            >
              <FaSave />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Unsaved Changes</h3>
            <p>You have unsaved changes. Leave anyway?</p>
            <div className={styles.modalActions}>
              <button
                type="button"
                className={styles.stayBtn}
                onClick={() => setShowModal(false)}
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
          </div>
        </div>
      )}
    </>
  );
}