"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
FaPaperPlane,
FaImage,
FaArrowLeft,
} from "react-icons/fa";

import styles from "./createBlog.module.css";

export default function CreateBlogPage() {
const router = useRouter();

const [isDirty, setIsDirty] = useState(false);
const [showExitModal, setShowExitModal] =
useState(false);

const markDirty = () => {
setIsDirty(true);
};

const handleBack = () => {
if (!isDirty) {
router.push("/admin/blogs");
return;
}

setShowExitModal(true);


};

const handlePublish = () => {
router.push("/admin/blogs");
};

return (
<> <div className={styles.wrapper}>
<motion.div
className={styles.hero}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
> <div className={styles.heroHeader}> <div> <span className={styles.badge}>
Content Management </span>

          <h1>Create New Blog</h1>

          <p>
            Create and publish SEO optimized
            insurance blogs.
          </p>
        </div>

        <button
          className={styles.backBtn}
          onClick={handleBack}
        >
          <FaArrowLeft />
          Back to Blogs
        </button>
      </div>
    </motion.div>

    <div className={styles.formCard}>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Blog Title</label>

          <input
            placeholder="Complete Health Insurance Guide"
            onChange={markDirty}
          />
        </div>

        <div className={styles.field}>
          <label>Author</label>

          <input
            placeholder="Admin"
            onChange={markDirty}
          />
        </div>

        <div className={styles.field}>
          <label>Category</label>

          <select onChange={markDirty}>
            <option>
              Health Insurance
            </option>

            <option>
              Life Insurance
            </option>

            <option>
              Car Insurance
            </option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Status</label>

          <select onChange={markDirty}>
            <option>Published</option>

            <option>Draft</option>
          </select>
        </div>

        <div className={styles.field}>
          <label>Publish Date</label>

          <input
            type="date"
            onChange={markDirty}
          />
        </div>

        <div className={styles.fieldFull}>
          <label>
            Featured Image URL
          </label>

          <div className={styles.imageInput}>
            <FaImage />

            <input
              placeholder="Paste image URL..."
              onChange={markDirty}
            />
          </div>
        </div>

        <div className={styles.fieldFull}>
          <label>
            Short Description
          </label>

          <textarea
            rows={5}
            placeholder="Everything you need to know about health insurance policies."
            onChange={markDirty}
          />
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.publishBtn}
          onClick={handlePublish}
        >
          <FaPaperPlane />
          Publish Blog
        </button>
      </div>
    </div>
  </div>

  {showExitModal && (
    <div className={styles.modalOverlay}>
      <motion.div
        className={styles.modal}
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        <h3>Unsaved Changes</h3>

        <p>
          You have unsaved changes.
          Are you sure you want to
          leave this page?
        </p>

        <div
          className={styles.modalActions}
        >
          <button
            className={styles.stayBtn}
            onClick={() =>
              setShowExitModal(false)
            }
          >
            Stay Here
          </button>

          <button
            className={styles.discardBtn}
            onClick={() =>
              router.push(
                "/admin/blogs"
              )
            }
          >
            Discard Changes
          </button>
        </div>
      </motion.div>
    </div>
  )}
</>
);
}
