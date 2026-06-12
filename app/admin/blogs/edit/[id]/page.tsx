"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaSave,
  FaImage,
} from "react-icons/fa";

import styles from "./editBlog.module.css";

const blogs = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400",
    title: "Complete Health Insurance Guide",
    excerpt:
      "Everything you need to know about health insurance policies.",
    category: "Health Insurance",
    author: "Admin",
    date: "2026-06-10",
    status: "Published",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400",
    title: "Car Insurance Tips",
    excerpt:
      "Learn how to save money while choosing the right coverage.",
    category: "Car Insurance",
    author: "Admin",
    date: "2026-06-08",
    status: "Draft",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=400",
    title: "Life Insurance Planning",
    excerpt:
      "Long term financial protection for your family.",
    category: "Life Insurance",
    author: "Admin",
    date: "2026-06-05",
    status: "Published",
  },
];

export default function EditBlogPage() {
  const router = useRouter();
  const params = useParams();

  const blog =
    blogs.find(
      (b) => b.id === Number(params.id)
    ) || blogs[0];

  const [title, setTitle] =
    useState(blog.title);

  const [author, setAuthor] =
    useState(blog.author);

  const [category, setCategory] =
    useState(blog.category);

  const [status, setStatus] =
    useState(blog.status);

  const [date, setDate] =
    useState(blog.date);

  const [image, setImage] =
    useState(blog.image);

  const [description, setDescription] =
    useState(blog.excerpt);

  const [dirty, setDirty] =
    useState(false);

  const [showModal, setShowModal] =
    useState(false);

  const markDirty = () =>
    setDirty(true);

  const handleBack = () => {
    if (!dirty) {
      router.push("/admin/blogs");
      return;
    }

    setShowModal(true);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.hero}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <div>
            <span className={styles.badge}>
              Content Management
            </span>

            <h1>Edit Blog</h1>

            <p>
              Update and manage blog
              content.
            </p>
          </div>

          <button
            onClick={handleBack}
            className={styles.backBtn}
          >
            <FaArrowLeft />
            Back to Blogs
          </button>
        </motion.div>

        <div className={styles.formCard}>
          <div className={styles.preview}>
            <img
              src={image}
              alt={title}
            />
          </div>

          <div className={styles.grid}>
            <div className={styles.field}>
              <label>Blog Title</label>

              <input
                value={title}
                onChange={(e) => {
                  setTitle(
                    e.target.value
                  );
                  markDirty();
                }}
              />
            </div>

            <div className={styles.field}>
              <label>Author</label>

              <input
                value={author}
                onChange={(e) => {
                  setAuthor(
                    e.target.value
                  );
                  markDirty();
                }}
              />
            </div>

            <div className={styles.field}>
              <label>Category</label>

              <input
                value={category}
                onChange={(e) => {
                  setCategory(
                    e.target.value
                  );
                  markDirty();
                }}
              />
            </div>

            <div className={styles.field}>
              <label>Status</label>

              <select
                value={status}
                onChange={(e) => {
                  setStatus(
                    e.target.value
                  );
                  markDirty();
                }}
              >
                <option>
                  Published
                </option>
                <option>Draft</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Date</label>

              <input
                type="date"
                value={date}
                onChange={(e) => {
                  setDate(
                    e.target.value
                  );
                  markDirty();
                }}
              />
            </div>

            <div
              className={styles.fieldFull}
            >
              <label>
                Featured Image URL
              </label>

              <div
                className={
                  styles.imageInput
                }
              >
                <FaImage />

                <input
                  value={image}
                  onChange={(e) => {
                    setImage(
                      e.target.value
                    );
                    markDirty();
                  }}
                />
              </div>
            </div>

            <div
              className={styles.fieldFull}
            >
              <label>
                Description
              </label>

              <textarea
                rows={5}
                value={description}
                onChange={(e) => {
                  setDescription(
                    e.target.value
                  );
                  markDirty();
                }}
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button
              className={styles.saveBtn}
              onClick={() =>
                router.push(
                  "/admin/blogs"
                )
              }
            >
              <FaSave />
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className={
            styles.modalOverlay
          }
        >
          <div className={styles.modal}>
            <h3>
              Unsaved Changes
            </h3>

            <p>
              You have unsaved
              changes. Leave anyway?
            </p>

            <div
              className={
                styles.modalActions
              }
            >
              <button
                className={
                  styles.stayBtn
                }
                onClick={() =>
                  setShowModal(
                    false
                  )
                }
              >
                Stay Here
              </button>

              <button
                className={
                  styles.discardBtn
                }
                onClick={() =>
                  router.push(
                    "/admin/blogs"
                  )
                }
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