"use client";

import { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelopeOpenText,
  FaPaperPlane,
} from "react-icons/fa";
import { getLatestFooterBlogs } from "@/app/src/lib/blogService";


export const Footer = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await getLatestFooterBlogs();
      setBlogs(data);
    };

    loadBlogs();
  }, []);
  
  return (

    <footer className={styles.footer}>
      <div className={styles.wrapper}>

        {/* ================= TOP PREMIUM ROW ================= */}
        <div className={styles.topRow}>
          <div className={styles.newsletterSection}>
            <div className={styles.badge}>Stay Updated</div>
            <h3 className={styles.newsletterHeading}>Subscribe to our Newsletter</h3>
            <p className={styles.newsText}>
              Get the latest news, tips and latest messages, including special offers.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                aria-label="Email Address"
              />
              <button type="submit" aria-label="Subscribe">
                <FaPaperPlane />
              </button>
            </form>
          </div>

          <div className={styles.ctaCard}>
            <div className={styles.ctaIconBox}>
              <FaEnvelopeOpenText />
            </div>
            <div className={styles.ctaContent}>
              <span className={styles.ctaSub}>Direct Business Channel</span>
              <h4 className={styles.ctaMainTitle}>Ready to speak with us?</h4>
              <a href="mailto:sales@visezy.in" className={styles.ctaEmailLink}>
                sales@visezy.in
              </a>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT ROW ================= */}
        <div className={styles.mainGrid}>

          {/* Brand Panel */}
          <div className={styles.brandPanel}>
            <Image
              src="/visezy-logo.png"
              alt="Visezy"
              width={200}
              height={70}
              priority
              className={styles.logo}
            />
            <div className={styles.contactContainer}>
              <div className={styles.contactRow}>
                <FaPhoneAlt className={styles.contactIcon} />
                <a href="tel:+919634556234" className={styles.contactText}>+91 9634556234</a>
              </div>
              <div className={styles.contactRow}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span className={styles.contactText}>
                  Dehradun, Uttarakhand, India
                </span>
              </div>
              <div className={styles.contactRow}>
                <FaEnvelopeOpenText className={styles.contactIcon} />
                <span className={styles.contactText}>
                  sales@visezy.in<br />
                  sparsh@visezy.in
                </span>
              </div>
            </div>
          </div>

          {/* Help & Support Panel */}
          <div className={styles.helpPanel}>
            <h3 className={styles.sectionHeading}>Help & Support</h3>

            <ul className={styles.servicesMenu}>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>

              <li>
                <Link href="/policies">Privacy Policy</Link>
              </li>

              <li>
                <Link href="/terms-and-conditions">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Dynamic Blogs Panel */}
          <div className={styles.blogsPanel}>
            <h3 className={styles.sectionHeading}>Latest Post</h3>
            <div className={styles.blogStack}>
              {blogs.map((blog: any) => (
                <Link
                  href={`/blogs/${blog.slug}`}
                  key={blog._id}
                  className={styles.blogRowItem}
                >
                  <div className={styles.imageContainer}>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.image}`}
                      alt={blog.title}
                      width={64}
                      height={64}
                      className={styles.blogImg}
                    />
                  </div>

                  <div className={styles.blogMeta}>
                    <span className={styles.blogDate}>
                      {new Date(blog.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>

                    <h4 className={styles.blogTitleText}>
                      {blog.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Links Panel */}
          {/* Services Panel */}
          <div className={styles.linksPanel}>
            <h3 className={styles.sectionHeading}>Services</h3>
            <ul className={styles.servicesMenu}>
              <li><Link href="/policies/car-insurance">Car Insurance</Link></li>
              <li><Link href="/policies/health-insurance">Health Insurance</Link></li>
              <li><Link href="/policies/life-insurance">Life Insurance</Link></li>
            </ul>

            <div className={styles.socialWrapper}>
              <span className={styles.socialLabel}>Connect With Us</span>
              <div className={styles.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterestP /></a>
                <a href="https://www.instagram.com/visezy.insurance/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              </div>
            </div>
          </div>


        </div>

        {/* ================= BOTTOM METRICS BAR ================= */}
        <div className={styles.bottomSection}>
          <p className={styles.copyrightText}>
            © {new Date().getFullYear()} VISEZY | All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};