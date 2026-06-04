import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./blogDetails.module.css";
import { blogs } from "../BlogsData";
import {
  FiClock,
  FiCalendar,
  FiArrowLeft,
  FiShare2,
} from "react-icons/fi";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  const relatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .slice(0, 3);

  return (
    <main className={styles.page}>
      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroImage}>
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <Link
            href="/blogs"
            className={styles.backBtn}
          >
            <FiArrowLeft />
            Back To Blogs
          </Link>

          <span className={styles.category}>
            {blog.category}
          </span>

          <h1>{blog.title}</h1>

          <div className={styles.meta}>
            <span>
              <FiCalendar />
              {blog.date}
            </span>

            <span>
              <FiClock />
              {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* ARTICLE */}

      <section className={styles.articleSection}>
        <div className={styles.articleLayout}>
          {/* LEFT */}

          <article className={styles.article}>
            {blog.content
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
          </article>

          {/* SIDEBAR */}

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Article Info</h3>

              <div className={styles.infoItem}>
                <strong>Category</strong>
                <span>{blog.category}</span>
              </div>

              <div className={styles.infoItem}>
                <strong>Published</strong>
                <span>{blog.date}</span>
              </div>

              <div className={styles.infoItem}>
                <strong>Reading Time</strong>
                <span>{blog.readTime}</span>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <h3>
                <FiShare2 />
                Share Article
              </h3>

              <div className={styles.shareButtons}>
                <button>
                  Facebook
                </button>

                <button>
                  LinkedIn
                </button>

                <button>
                  Twitter
                </button>
              </div>
            </div>

            <div className={styles.ctaCard}>
              <span>Need Insurance Help?</span>

              <h4>
                Explore Policy Options
              </h4>

              <p>
                Compare insurance plans
                and discover coverage
                designed around your
                needs.
              </p>

              <Link
                href="/policies"
                className={styles.ctaBtn}
              >
                Explore Policies
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED BLOGS */}

      <section className={styles.related}>
        <div className={styles.relatedHeader}>
          <span>MORE ARTICLES</span>

          <h2>
            Related Articles
          </h2>
        </div>

        <div className={styles.relatedGrid}>
          {relatedBlogs.map((item) => (
            <Link
              key={item.slug}
              href={`/blogs/${item.slug}`}
              className={styles.relatedCard}
            >
              <div className={styles.relatedImage}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                />
              </div>

              <div className={styles.relatedContent}>
                <span>
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <small>
                  {item.date}
                </small>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}