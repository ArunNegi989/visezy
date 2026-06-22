"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";


import styles from "./WhatsAppButton.module.css";

const socialLinks = [
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/visezy.insurance/",
    label: "Instagram",
    className: styles.instagram,
  },
  {
    icon: <FaFacebookF />,
    url: "https://facebook.com/yourprofile",
    label: "Facebook",
    className: styles.facebook,
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/company/visezy",
    label: "LinkedIn",
    className: styles.linkedin,
  },
];

export default function WhatsAppButton() {
  return (
    <div className={styles.floatingContainer}>
      <div className={styles.socialSidebar}>
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${item.className}`}
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>

      <a
        href="https://wa.me/9027883898"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}