"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blogs.module.css";
import { blogs } from "./BlogsData";
import {
  FiSearch,
  FiClock,
  FiArrowRight,
  FiTrendingUp,
  FiTag,
  FiInbox,
} from "react-icons/fi";

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
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ? true : blog.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  // Safely fallback if data array is empty
  const featuredBlog = blogs[0] || null;
  const latestBlogs = blogs.slice(0, 5);

  return (
    <main className={styles.page}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroGlow}></div>
        <div className={styles.heroContainer}>
          <span className={styles.heroTag}>INSURANCE INSIGHTS Hub</span>
          <h1>
            Smarter Coverage <span>Starts With Knowledge</span>
          </h1>
          <p>
            Demolish the jargon. Explore expert articles, clear policy comparisons, 
            and practical financial roadmaps curated by industry professionals.
          </p>

          {/* INTEGRATED SEARCH BAR */}
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search premium guides, insights, and keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className={styles.categorySection}>
        <div className={styles.categories}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={
                activeCategory === cat ? styles.activeCategory : styles.categoryBtn
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* MAIN LAYOUT CONTAINER */}
      <section className={styles.blogLayout}>
        {/* LEFT COLUMN: MAIN CONTENT */}
        <div className={styles.leftSide}>
          {/* FEATURED HERO POST (Only shows up when filter is clean/initial) */}
          {featuredBlog && activeCategory === "All" && !search && (
            <div className={styles.featuredSection}>
              <Link href={`/blogs/${featuredBlog.slug}`} className={styles.featuredCard}>
                <div className={styles.featuredImage}>
                  <Image
                    src={featuredBlog.image}
                    alt={featuredBlog.title}
                    fill
                    priority
                  />
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.featuredHeaderMeta}>
                    <span className={styles.featuredBadge}>Editor's Choice</span>
                    <span className={styles.inlineCategory}>{featuredBlog.category}</span>
                  </div>
                  <h2>{featuredBlog.title}</h2>
                  <p>{featuredBlog.excerpt}</p>
                  <div className={styles.featuredMeta}>
                    <span>{featuredBlog.date}</span>
                    <span className={styles.dotSeparator}>•</span>
                    <span>
                      <FiClock /> {featuredBlog.readTime}
                    </span>
                  </div>
                  <div className={styles.readBtn}>
                    <span>Read Masterclass</span>
                    <FiArrowRight />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* GRID ARTICLES CONTROLLER */}
          <div className={styles.sectionHeader}>
            <div>
              <h3>All Publications</h3>
              <p className={styles.sectionSubtitle}>Browse filtered selections</p>
            </div>
            <div className={styles.countBadge}>
              {filteredBlogs.length} {filteredBlogs.length === 1 ? "Article" : "Articles"}
            </div>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className={styles.blogGrid}>
              {filteredBlogs.map((blog) => (
                <Link href={`/blogs/${blog.slug}`} key={blog.slug} className={styles.card}>
                  <div className={styles.imageWrap}>
                    <Image src={blog.image} alt={blog.title} fill />
                    <div className={styles.cardCategory}>{blog.category}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardMeta}>
                      <span>{blog.date}</span>
                      <span>
                        <FiClock /> {blog.readTime}
                      </span>
                    </div>
                    <h3>{blog.title}</h3>
                    <p>{blog.excerpt}</p>
                    <div className={styles.readMore}>
                      Explore Article <FiArrowRight />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <FiInbox size={40} />
              <h4>No insights match your criteria</h4>
              <p>Try adjusting your search terms or selecting another category.</p>
              <button 
                onClick={() => { setSearch(""); setActiveCategory("All"); }} 
                className={styles.resetButton}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: STICKY SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <h3>
              <FiTrendingUp className={styles.sidebarIconBlue} />
              Trending Now
            </h3>
            <div className={styles.latestList}>
              {latestBlogs.map((blog) => (
                <Link key={blog.slug} href={`/blogs/${blog.slug}`} className={styles.latestItem}>
                  <span>{blog.title}</span>
                  <small>{blog.date} • {blog.readTime}</small>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.sidebarCard}>
            <h3>
              <FiTag className={styles.sidebarIconPurple} />
              Quick Filter
            </h3>
            <div className={styles.categoryList}>
              {categories
                .filter((c) => c !== "All")
                .map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`${styles.categoryItem} ${activeCategory === cat ? styles.sidebarActiveCat : ""}`}
                  >
                    {cat}
                  </button>
                ))}
            </div>
          </div>

          {/* HIGH-CONVERTING SIDEBAR CTA */}
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow}></div>
            <span>CONCIERGE COVERAGE</span>
            <h4>Confused about complex policy terms?</h4>
            <p>
              Don't guess on your coverage structure. Let our automated matching tool extract the lowest rate vectors tailored for you.
            </p>
            <Link href="/policies" className={styles.ctaButton}>
              Compare Premium Rates
              <FiArrowRight />
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}