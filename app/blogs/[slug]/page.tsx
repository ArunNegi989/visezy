import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "@/app/blogs/[slug]/blogDetails.module.css";
import BlockRenderer from "@/components/blogs/BlockRenderer";
import { FiClock, FiCalendar, FiArrowLeft } from "react-icons/fi"; 

import { getBlogBySlug, getBlogs } from "@/app/src/lib/blogService";

const formatDate = (date: string) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const allBlogs = await getBlogs();
  const relatedBlogs = allBlogs
    .filter((item: any) => item.slug !== blog.slug && item.status === "Published")
    .slice(0, 3);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroImage}>
          <img
            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.image}`}
            alt={blog.title}
            className={styles.blogImage}
          />
        </div>

        <div className={styles.heroContent}>
          <Link href="/blogs" className={styles.backBtn}>
            <FiArrowLeft />
            Back To Blogs
          </Link>
          <span className={styles.category}>{blog.category}</span>
          <h1>{blog.title}</h1>
          <div className={styles.meta}>
            <span>
              <FiCalendar />
              {formatDate(blog.publishedAt)}
            </span>
            <span>
              <FiClock />
              {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className={styles.articleSection}>
        <div className={styles.articleLayout}>
          <article className={styles.article}>
            {blog.excerpt && <div className={styles.excerpt}>{blog.excerpt}</div>}

            <div className={styles.articleContent}>
              {Array.isArray(blog.contentBlocks) && blog.contentBlocks.length > 0 ? (
                <BlockRenderer blocks={blog.contentBlocks} />
              ) : (
                blog.content && (
                  <div 
                    dangerouslySetInnerHTML={{ __html: blog.content }} 
                    onClick={(e) => {
                      const target = e.target as HTMLElement;
                      if (target.tagName === 'A' && target.getAttribute('href') === '#') {
                        e.preventDefault();
                      }
                    }}
                  />
                )
              )}
            </div>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h3>Article Info</h3>
              <div className={styles.infoItem}>
                <strong>Category</strong>
                <span>{blog.category}</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Published</strong>
                <span>{formatDate(blog.publishedAt)}</span>
              </div>
              <div className={styles.infoItem}>
                <strong>Reading Time</strong>
                <span>{blog.readTime}</span>
              </div>
            </div>

            <div className={styles.ctaCard}>
              <span>Need Insurance Help?</span>
              <h4>Explore Policy Options</h4>
              <p>Compare insurance plans and discover coverage designed around your needs.</p>
              <Link href="/policies" className={styles.ctaBtn}>
                Explore Policies
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className={styles.related}>
        <div className={styles.relatedHeader}>
          <span>MORE ARTICLES</span>
          <h2>Related Articles</h2>
        </div>

        <div className={styles.relatedGrid}>
          {relatedBlogs.map((item: any) => (
            <Link key={item._id || item.slug} href={`/blogs/${item.slug}`} className={styles.relatedCard}>
              <div className={styles.relatedImage}>
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}`}
                  alt={item.title}
                />
              </div>
              <div className={styles.relatedContent}>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <small>{formatDate(item.publishedAt)}</small>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}