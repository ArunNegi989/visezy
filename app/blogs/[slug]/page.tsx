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
  const showSidebar =
    relatedBlogs.length > 0 ||
    (blog.contentBlocks?.length || 0) > 4;
    
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
  <div
    className={
      showSidebar
        ? styles.articleLayout
        : styles.articleLayoutSingle
    }
  >
    <article className={styles.article}>
      {blog.excerpt && (
        <div className={styles.excerpt}>
          {blog.excerpt}
        </div>
      )}

      <div className={styles.articleContent}>
        {Array.isArray(blog.contentBlocks) &&
        blog.contentBlocks.length > 0 ? (
          <BlockRenderer blocks={blog.contentBlocks} />
        ) : (
          blog.content && (
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          )
        )}
      </div>
    </article>

    {showSidebar && (
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
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

          <div className={styles.tocCard}>
            <h3>In This Article</h3>

            <ul>
              <li>Overview</li>
              <li>Benefits</li>
              <li>Coverage Options</li>
              <li>Important Factors</li>
              <li>Conclusion</li>
            </ul>
          </div>

          <div className={styles.keyTakeaways}>
            <h3>Key Takeaways</h3>

            <ul>
              <li>Compare policies before purchasing.</li>
              <li>Review coverage exclusions carefully.</li>
              <li>Choose add-ons based on your needs.</li>
              <li>Keep your policy renewed on time.</li>
            </ul>
          </div>

          <div className={styles.expertTip}>
            <span>Expert Tip</span>

            <p>
              Choose coverage based on your lifestyle and
              risk profile instead of selecting the lowest
              premium.
            </p>
          </div>

          {relatedBlogs.length > 0 && (
            <div className={styles.miniRelatedCard}>
              <h3>Recommended Reads</h3>

              {relatedBlogs.slice(0, 2).map((item: any) => (
                <Link
                  key={item._id || item.slug}
                  href={`/blogs/${item.slug}`}
                  className={styles.miniArticle}
                >
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}`}
                    alt={item.title}
                  />

                  <div>
                    <span>{item.category}</span>
                    <p>{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className={styles.newsletterCard}>
            <div>
              <h3>Stay Updated</h3>

              <p>
                Get insurance insights, expert advice,
                and policy updates directly in your inbox.
              </p>
            </div>

            <Link
              href="/contact-us"
              className={styles.newsletterBtn}
            >
              Subscribe Now
            </Link>
          </div>

          <div className={styles.ctaCard}>
            <span>Need Insurance Help?</span>

            <h4>Explore Policy Options</h4>

            <p>
              Compare insurance plans and discover
              coverage designed around your needs.
            </p>

            <Link
              href="/policies"
              className={styles.ctaBtn}
            >
              Explore Policies
            </Link>
          </div>
        </div>
      </aside>
    )}
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