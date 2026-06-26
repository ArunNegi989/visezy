"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaEye,
  FaEyeSlash, // Hidden state ke liye naya icon import kiya
} from "react-icons/fa";

import styles from "./blogs.module.css";
import { deleteBlog } from "@/app/src/lib/blogService";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  status: "Published" | "Draft";
  isVisible: boolean;
  createdAt: string;
  publishedAt : string;
}

export default function BlogsPage() {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const result = await response.json();
        setBlogs(result.data || []);
      } catch (error) {
        console.error(error);
      } finally {
        loading && setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const hiddenCount = useMemo(() => {
    return blogs.filter((blog) => !blog.isVisible).length;
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.category.toLowerCase().includes(search.toLowerCase()) ||
        blog.author.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All Status" || blog.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [blogs, search, statusFilter]);

  const toggleHideBlog = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}/visibility`,
        {
          method: "PATCH",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setBlogs((prev) =>
        prev.map((blog) =>
          blog._id === id
            ? {
                ...blog,
                isVisible: result.data.isVisible,
              }
            : blog
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const openDeleteModal = (id: string) => {
    setSelectedBlog(id);
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
    setSelectedBlog(null);
  };

  const handleDelete = async () => {
    if (!selectedBlog) return;

    try {
      await deleteBlog(selectedBlog);

      setBlogs((prev) => prev.filter((blog) => blog._id !== selectedBlog));

      closeDeleteModal();
    } catch (error) {
      console.error(error);
    }
  };

  const truncateText = (text: string, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength
      ? `${text.slice(0, maxLength).trim()}...`
      : text;
  };

  if (loading) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.contentCard}>Loading blogs...</div>
      </div>
    );
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
            <h1>Blogs Management</h1>
            <p>
              Manage, edit and publish all website blogs from one place.
            </p>
          </div>

          <button
            className={styles.addBtn}
            onClick={() => router.push("/admin/blogs/create")}
          >
            <FaPlus />
            Add Blog
          </button>
        </motion.div>

        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div>
              <span>Total Blogs</span>
              <h2>{blogs.length}</h2>
            </div>
          </div>

          <div className={styles.statCard}>
            <div>
              <span>Published</span>
              <h2>{blogs.filter((b) => b.status === "Published").length}</h2>
            </div>
          </div>

          <div className={styles.statCard}>
            <div>
              <span>Drafts</span>
              <h2>{blogs.filter((b) => b.status === "Draft").length}</h2>
            </div>
          </div>

          <div className={styles.statCard}>
            <div>
              <span>Hidden</span>
              <h2>{hiddenCount}</h2>
            </div>
          </div>
        </div>

        <div className={styles.contentCard}>
          <div className={styles.toolbar}>
            <div className={styles.search}>
              <FaSearch />
              <input
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              className={styles.filter}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
            </select>
          </div>

          <div className={styles.blogGrid}>
            {filteredBlogs.map((blog) => {
              // Yahan blog.isVisible key ke hisab se CSS apply ho rhi h
              const isHidden = !blog.isVisible;

              return (
                <motion.div
                  key={blog._id}
                  className={`${styles.blogCard} ${
                    isHidden ? styles.hiddenCard : ""
                  }`}
                  whileHover={{ y: -6 }}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.image}`}
                    alt={blog.title}
                    className={styles.blogImage}
                  />

                  <div className={styles.blogBody}>
                    <div className={styles.topRow}>
                      <span className={styles.category}>{blog.category}</span>
                      <span
                        className={
                          blog.status === "Published"
                            ? styles.published
                            : styles.draft
                        }
                      >
                        {blog.status}
                      </span>
                    </div>

                    {/* Agar blog hidden h to aapki CSS ki Badge class dikhegi */}
                    {isHidden && (
                      <span className={styles.hiddenBadge}>Hidden</span>
                    )}

                    <h3>{blog.title}</h3>
                    <p>{truncateText(blog.excerpt, 180)}</p>

                    <div className={styles.meta}>
                      <span>{blog.author}</span>
                      <span>
                        {new Date(blog.publishedAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div className={styles.actions}>
                      {/* Hide/Show Button Icon Ke Sath */}
                      <button
                        onClick={() => toggleHideBlog(blog._id)}
                        title={blog.isVisible ? "Hide Blog" : "Show Blog"}
                      >
                        {blog.isVisible ? <FaEyeSlash /> : <FaEye />}
                      </button>

                      <button
                        onClick={() =>
                          router.push(`/admin/blogs/edit/${blog._id}`)
                        }
                      >
                        <FaEdit />
                      </button>

                      <button onClick={() => openDeleteModal(blog._id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {deleteModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Delete Blog</h3>
            <p>Are you sure you want to delete this blog?</p>
            <div className={styles.modalActions}>
              <button className={styles.cancelBtn} onClick={closeDeleteModal}>
                Cancel
              </button>
              <button className={styles.deleteBtn} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}