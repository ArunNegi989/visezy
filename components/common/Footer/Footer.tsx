"use client";

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

const blogs = [
  {
    title: "Why entrepreneurs need life insurance",
    date: "March 19, 2023",
    image:
      "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
    slug: "/blogs",
  },
  {
    title: "How insurance can empower women's",
    date: "March 19, 2023",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    slug: "/blogs",
  },
  {
    title: "The benefits of mood boarding for your clients",
    date: "March 19, 2023",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
    slug: "/blogs",
  },
];

export const Footer = () => {
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
      <Link href="/privacy-policy">Privacy Policy</Link>
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
              {blogs.map((blog, idx) => (
                <Link href={blog.slug} key={idx} className={styles.blogRowItem}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={64}
                      height={64}
                      className={styles.blogImg}
                    />
                  </div>
                  <div className={styles.blogMeta}>
                    <span className={styles.blogDate}>{blog.date}</span>
                    <h4 className={styles.blogTitleText}>{blog.title}</h4>
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
    <li><Link href="#">Car Insurance</Link></li>
    <li><Link href="#">Health Insurance</Link></li>
    <li><Link href="#">Life Insurance</Link></li>
  </ul>

  <div className={styles.socialWrapper}>
    <span className={styles.socialLabel}>Connect With Us</span>
    <div className={styles.socialIcons}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterestP /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
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