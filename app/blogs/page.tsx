"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";

import styles from "./blogs.module.css";

import {
  FiSearch,
  FiClock,
  FiArrowRight,
  FiTrendingUp,
  FiTag,
  FiInbox,
} from "react-icons/fi";

interface Blog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  publishedAt: string;
}

const categories = [
  "All",
  "Health Insurance",
  "Motor Insurance",
  "Life Insurance",
  "Travel Insurance",
  "Home Insurance",
  "Business Insurance",
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs?public=true`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch blogs"
          );
        }

        const result =
          await response.json();

        const publishedBlogs =
          result.data.filter(
            (blog: any) =>
              blog.status ===
              "Published"
          );

        setBlogs(publishedBlogs);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        blog.excerpt
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All"
          ? true
          : blog.category ===
          activeCategory;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }, [
    blogs,
    search,
    activeCategory,
  ]);

  const featuredBlog =
    blogs[0] || null;

  const latestBlogs =
    blogs.slice(0, 5);

  const formatDate = (
    date: string
  ) => {
    return new Date(
      date
    ).toLocaleDateString(
      "en-US",
      {
        month: "short",
        day: "numeric",
        year: "numeric",
      }
    );
  };
  const truncateText = (
    text: string,
    maxLength = 180
  ) => {
    if (!text) return "";

    return text.length > maxLength
      ? `${text.slice(0, maxLength).trim()}...`
      : text;
  };

  if (loading) {
    return (
      <main className={styles.page}>
        <div
          style={{
            minHeight: "70vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          Loading blogs...
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>

        <div
          className={
            styles.heroContainer
          }
        >
          <span
            className={styles.heroTag}
          >
            INSURANCE INSIGHTS Hub
          </span>

          <h1>
            Smarter Coverage{" "}
            <span>
              Starts With Knowledge
            </span>
          </h1>

          <p>
            Demolish the jargon.
            Explore expert
            articles, clear policy
            comparisons, and
            practical financial
            roadmaps curated by
            industry professionals.
          </p>

          <div
            className={
              styles.searchContainer
            }
          >
            <div
              className={
                styles.searchBox
              }
            >
              <FiSearch
                className={
                  styles.searchIcon
                }
              />

              <input
                type="text"
                placeholder="Search premium guides, insights, and keywords..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          styles.categorySection
        }
      >
        <div
          className={
            styles.categories
          }
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveCategory(
                  cat
                )
              }
              className={
                activeCategory === cat
                  ? styles.activeCategory
                  : styles.categoryBtn
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section
        className={styles.blogLayout}
      >
        <div className={styles.leftSide}>
          {featuredBlog &&
            activeCategory ===
            "All" &&
            !search && (
              <div
                className={
                  styles.featuredSection
                }
              >
                <Link
                  href={`/blogs/${featuredBlog.slug}`}
                  className={
                    styles.featuredCard
                  }
                >
                  <div
                    className={
                      styles.featuredImage
                    }
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${featuredBlog.image}`}
                      alt={featuredBlog.title}
                      className={styles.blogImage}
                    />

                  </div>

                  <div
                    className={
                      styles.featuredContent
                    }
                  >
                    <div
                      className={
                        styles.featuredHeaderMeta
                      }
                    >
                      <span
                        className={
                          styles.featuredBadge
                        }
                      >
                        Editor's Choice
                      </span>

                      <span
                        className={
                          styles.inlineCategory
                        }
                      >
                        {
                          featuredBlog.category
                        }
                      </span>
                    </div>

                    <h2>
                      {
                        featuredBlog.title
                      }
                    </h2>

                    <p>{truncateText(featuredBlog.excerpt, 180)}</p>

                    <div
                      className={
                        styles.featuredMeta
                      }
                    >
                      <span>
                        {formatDate(
                          featuredBlog.publishedAt
                        )}
                      </span>

                      <span
                        className={
                          styles.dotSeparator
                        }
                      >
                        •
                      </span>

                      <span>
                        <FiClock />

                        {
                          featuredBlog.readTime
                        }
                      </span>
                    </div>

                    <div
                      className={
                        styles.readBtn
                      }
                    >
                      <span>
                        Read
                        Masterclass
                      </span>

                      <FiArrowRight />
                    </div>
                  </div>
                </Link>
              </div>
            )}

          <div
            className={
              styles.sectionHeader
            }
          >
            <div>
              <h3>
                All Publications
              </h3>

              <p
                className={
                  styles.sectionSubtitle
                }
              >
                Browse filtered
                selections
              </p>
            </div>

            <div
              className={
                styles.countBadge
              }
            >
              {filteredBlogs.length}{" "}
              {filteredBlogs.length ===
                1
                ? "Article"
                : "Articles"}
            </div>
          </div>

          {filteredBlogs.length >
            0 ? (
            <div
              className={
                styles.blogGrid
              }
            >
              {filteredBlogs.map(
                (blog) => (
                  <Link
                    href={`/blogs/${blog.slug}`}
                    key={blog._id}
                    className={
                      styles.card
                    }
                  >
                    <div
                      className={
                        styles.imageWrap
                      }
                    >
                      <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.image}`}
                        alt={blog.title}
                        className={styles.blogImage}
                      />

                      <div
                        className={
                          styles.cardCategory
                        }
                      >
                        {blog.category}
                      </div>
                    </div>

                    <div
                      className={
                        styles.cardContent
                      }
                    >
                      <div
                        className={
                          styles.cardMeta
                        }
                      >
                        <span>
                          {formatDate(
                            blog.publishedAt
                          )}
                        </span>

                        <span>
                          <FiClock />

                          {
                            blog.readTime
                          }
                        </span>
                      </div>

                      <h3>
                        {blog.title}
                      </h3>

                      <p>{truncateText(blog.excerpt, 180)}</p>

                      <div
                        className={
                          styles.readMore
                        }
                      >
                        Explore
                        Article

                        <FiArrowRight />
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>
          ) : (
            <div
              className={
                styles.noResults
              }
            >
              <FiInbox size={40} />

              <h4>
                No insights match
                your criteria
              </h4>

              <p>
                Try adjusting your
                search terms or
                selecting another
                category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory(
                    "All"
                  );
                }}
                className={
                  styles.resetButton
                }
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        <aside
          className={styles.sidebar}
        >
          <div
            className={
              styles.sidebarCard
            }
          >
            <h3>
              <FiTrendingUp
                className={
                  styles.sidebarIconBlue
                }
              />

              Trending Now
            </h3>

            <div
              className={
                styles.latestList
              }
            >
              {latestBlogs.map(
                (blog) => (
                  <Link
                    key={blog._id}
                    href={`/blogs/${blog.slug}`}
                    className={
                      styles.latestItem
                    }
                  >
                    <span>
                      {blog.title}
                    </span>

                    <small>
                      {formatDate(
                        blog.publishedAt
                      )}{" "}
                      •{" "}
                      {blog.readTime}
                    </small>
                  </Link>
                )
              )}
            </div>
          </div>

          <div
            className={
              styles.sidebarCard
            }
          >
            <h3>
              <FiTag
                className={
                  styles.sidebarIconPurple
                }
              />

              Quick Filter
            </h3>

            <div
              className={
                styles.categoryList
              }
            >
              {categories
                .filter(
                  (c) =>
                    c !== "All"
                )
                .map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setActiveCategory(
                        cat
                      )
                    }
                    className={`${styles.categoryItem} ${activeCategory ===
                      cat
                      ? styles.sidebarActiveCat
                      : ""
                      }`}
                  >
                    {cat}
                  </button>
                ))}
            </div>
          </div>

          <div className={styles.ctaCard}>
            <div
              className={styles.ctaGlow}
            ></div>

            <span>
              CONCIERGE COVERAGE
            </span>

            <h4>
              Confused about
              complex policy terms?
            </h4>

            <p>
              Don't guess on your
              coverage structure.
              Let our automated
              matching tool extract
              the lowest rate
              vectors tailored for
              you.
            </p>

            <Link
              href="/policies"
              className={
                styles.ctaButton
              }
            >
              Compare Premium
              Rates

              <FiArrowRight />
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
