"use client";

import React from "react";
import styles from "./WhyChooseUs.module.css";
import {
  HiOutlineCurrencyDollar,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineUserGroup
} from "react-icons/hi";

const items = [
  {
    id: "unbeatable-discounts",
    title: "Unbeatable Discounts",
    description: "We work with top insurance providers to secure exclusive deals you won't find anywhere else. Save up to 20% on your premiums without compromising on coverage.",
    icon: <HiOutlineCurrencyDollar />,
    colorClass: styles.greenTheme
  },
  {
    id: "unmatched-choice",
    title: "Unmatched Choice",
    description: "Compare plans from all leading insurers under one roof. Find the perfect policy that fits your needs and budget with ease.",
    icon: <HiOutlineShieldCheck />,
    colorClass: styles.blueTheme
  },
  {
    id: "unwavering-expertise",
    title: "Unwavering Expertise",
    description: "Our licensed insurance advisors are here to guide you through every step, ensuring you make informed decisions with confidence.",
    icon: <HiOutlineClock />,
    colorClass: styles.orangeTheme
  },
  {
    id: "unburdened-convenience",
    title: "Unburdened Convenience",
    description: "Forget the hassle of paperwork and negotiations. We handle everything for you, from comparing quotes to claim assistance.",
    icon: <HiOutlineUserGroup />,
    colorClass: styles.purpleTheme
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className={styles.whyChooseUs}>
      {/* Background Ambient Glow Layer */}
      <div className={styles.ambientGlow} aria-hidden="true"></div>

      <div className={styles.container}>

        {/* LEFT PANEL */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span className={styles.badgeText}>WHY CHOOSE VISEZY</span>
          </div>

          <h2 className={styles.title}>
            Your Gateway to <br />
            <span className={styles.gradientText}>Insurance Advantage</span>
          </h2>

          <p className={styles.description}>
            Tired of insurance complexities and sky-high premiums? At Visezy, we empower you to find unbeatable deals on every policy, all under one roof. Forget the hassle of individual quotes and confusing jargon – our platform makes insurance simple, transparent, and surprisingly affordable.
          </p>

          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1200&auto=format&fit=crop"
                alt="Happy family protection plans"
                className={styles.familyImg}
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - MULTI-COLOR ACCENTS */}
        <div className={styles.right}>
          <div className={styles.cardContainer}>
            {items.map((item) => (
              <div
                key={item.id}
                className={`${styles.infoCard} ${item.colorClass}`}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconNode}>
                    {item.icon}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                </div>

                <div className={styles.contentField}>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}