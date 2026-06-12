"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import {
FaPlus,
FaSearch,
FaEdit,
FaTrash,
FaEye,
} from "react-icons/fa";

import styles from "./blogs.module.css";

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
date: "10 Jun 2026",
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
date: "08 Jun 2026",
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
date: "05 Jun 2026",
status: "Published",
},
];

export default function BlogsPage() {
const router = useRouter();

const [search, setSearch] =
useState("");

const [statusFilter, setStatusFilter] =
useState("All Status");

const [hiddenBlogs, setHiddenBlogs] =
useState<number[]>([]);

const [deleteModal, setDeleteModal] =
useState(false);

const [selectedBlog, setSelectedBlog] =
useState<number | null>(null);

const filteredBlogs = useMemo(() => {
return blogs.filter((blog) => {
const matchesSearch =
blog.title
.toLowerCase()
.includes(
search.toLowerCase()
) ||
blog.category
.toLowerCase()
.includes(
search.toLowerCase()
) ||
blog.author
.toLowerCase()
.includes(
search.toLowerCase()
);

 
  const matchesStatus =
    statusFilter ===
      "All Status" ||
    blog.status === statusFilter;

  return (
    matchesSearch &&
    matchesStatus
  );
});
 

}, [search, statusFilter]);

const toggleHideBlog = (
id: number
) => {
setHiddenBlogs((prev) =>
prev.includes(id)
? prev.filter(
(blogId) =>
blogId !== id
)
: [...prev, id]
);
};

const openDeleteModal = (
id: number
) => {
setSelectedBlog(id);
setDeleteModal(true);
};

const closeDeleteModal = () => {
setDeleteModal(false);
setSelectedBlog(null);
};

return (
<> <div className={styles.wrapper}>
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
> <div>
<span
className={
styles.badge
}
>
Content Management </span>

 
        <h1>
          Blogs Management
        </h1>

        <p>
          Manage, edit and
          publish all website
          blogs from one place.
        </p>
      </div>

      <button
        className={
          styles.addBtn
        }
        onClick={() =>
          router.push(
            "/admin/blogs/create"
          )
        }
      >
        <FaPlus />
        Add Blog
      </button>
    </motion.div>

    <div
      className={
        styles.statsRow
      }
    >
      <div
        className={
          styles.statCard
        }
      >
        <span>
          Total Blogs
        </span>
        <h2>
          {blogs.length}
        </h2>
      </div>

      <div
        className={
          styles.statCard
        }
      >
        <span>
          Published
        </span>
        <h2>
          {
            blogs.filter(
              (b) =>
                b.status ===
                "Published"
            ).length
          }
        </h2>
      </div>

      <div
        className={
          styles.statCard
        }
      >
        <span>Drafts</span>
        <h2>
          {
            blogs.filter(
              (b) =>
                b.status ===
                "Draft"
            ).length
          }
        </h2>
      </div>

      <div
        className={
          styles.statCard
        }
      >
        <span>
          Hidden
        </span>
        <h2>
          {
            hiddenBlogs.length
          }
        </h2>
      </div>
    </div>

    <div
      className={
        styles.contentCard
      }
    >
      <div
        className={
          styles.toolbar
        }
      >
        <div
          className={
            styles.search
          }
        >
          <FaSearch />

          <input
            placeholder="Search blogs..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />
        </div>

        <select
          className={
            styles.filter
          }
          value={
            statusFilter
          }
          onChange={(e) =>
            setStatusFilter(
              e.target.value
            )
          }
        >
          <option>
            All Status
          </option>

          <option>
            Published
          </option>

          <option>
            Draft
          </option>
        </select>
      </div>

      <div
        className={
          styles.blogGrid
        }
      >
        {filteredBlogs.map(
          (blog) => {
            const isHidden =
              hiddenBlogs.includes(
                blog.id
              );

            return (
              <motion.div
                key={
                  blog.id
                }
                className={`${styles.blogCard} ${
                  isHidden
                    ? styles.hiddenCard
                    : ""
                }`}
                whileHover={{
                  y: -6,
                }}
              >
                <img
                  src={
                    blog.image
                  }
                  alt={
                    blog.title
                  }
                  className={
                    styles.blogImage
                  }
                />

                <div
                  className={
                    styles.blogBody
                  }
                >
                  <div
                    className={
                      styles.topRow
                    }
                  >
                    <span
                      className={
                        styles.category
                      }
                    >
                      {
                        blog.category
                      }
                    </span>

                    <span
                      className={
                        blog.status ===
                        "Published"
                          ? styles.published
                          : styles.draft
                      }
                    >
                      {
                        blog.status
                      }
                    </span>
                  </div>

                  {isHidden && (
                    <span
                      className={
                        styles.hiddenBadge
                      }
                    >
                      Hidden
                    </span>
                  )}

                  <h3>
                    {
                      blog.title
                    }
                  </h3>

                  <p>
                    {
                      blog.excerpt
                    }
                  </p>

                  <div
                    className={
                      styles.meta
                    }
                  >
                    <span>
                      {
                        blog.author
                      }
                    </span>

                    <span>
                      {
                        blog.date
                      }
                    </span>
                  </div>

                  <div
                    className={
                      styles.actions
                    }
                  >
                    <button
                      onClick={() =>
                        toggleHideBlog(
                          blog.id
                        )
                      }
                      title={
                        isHidden
                          ? "Show Blog"
                          : "Hide Blog"
                      }
                    >
                      <FaEye />
                    </button>

                    <button
                      onClick={() =>
                        router.push(
                          `/admin/blogs/edit/${blog.id}`
                        )
                      }
                    >
                      <FaEdit />
                    </button>

                    <button
                      onClick={() =>
                        openDeleteModal(
                          blog.id
                        )
                      }
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  </div>

  {deleteModal && (
    <div
      className={
        styles.modalOverlay
      }
    >
      <motion.div
        className={
          styles.modal
        }
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        <h3>
          Delete Blog?
        </h3>

        <p>
          Are you sure you
          want to delete this
          blog?
        </p>

        <div
          className={
            styles.modalActions
          }
        >
          <button
            className={
              styles.cancelBtn
            }
            onClick={
              closeDeleteModal
            }
          >
            Cancel
          </button>

          <button
            className={
              styles.deleteBtn
            }
            onClick={
              closeDeleteModal
            }
          >
            Yes, Delete
          </button>
        </div>
      </motion.div>
    </div>
  )}
</>
 

);
}
