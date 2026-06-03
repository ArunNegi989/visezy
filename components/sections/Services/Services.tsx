"use client";

import React from "react";
import styles from "./Services.module.css";
import { HiOutlineShieldCheck, HiOutlineHeart, HiOutlineArrowSmRight } from "react-icons/hi";
import { RiCarLine } from "react-icons/ri";

const services = [
  {
    icon: <RiCarLine />,
    title: "Motor Insurance",
    description: "Drive with peace of mind knowing your vehicle and liabilities are covered against accidents, theft, and third-party damages.",
    colorClass: styles.motorTheme,
    linkText: "Explore Motor Cover"
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Life Insurance",
    description: "Protect your loved ones' future with a policy that provides financial security in case of unforeseen events.",
    colorClass: styles.lifeTheme,
    linkText: "Secure Life Plan"
  },
  {
    icon: <HiOutlineHeart />,
    title: "Health Insurance",
    description: "Secure your health and well-being with comprehensive plans covering hospitalization, OPD care, critical illness, and more.",
    colorClass: styles.healthTheme,
    linkText: "Check Health Schemes"
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      {/* Structural Backdrop Asset */}
      <div className={styles.radialGlow} aria-hidden="true"></div>

      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgePulse}></span>
            <span className={styles.miniLabel}>Our Offerings</span>
          </div>
          <h2 className={styles.title}>
            Explore all of our <span className={styles.gradientText}>Services</span>
          </h2>
          <p className={styles.subtitle}>
            Compare, customize, and secure your financial safety net using an automated ecosystem engineered for absolute transparency.
          </p>
        </div>

        <div className={styles.cardGrid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.serviceCard} ${service.colorClass}`}>
              {/* Animated top-bar layout trigger */}
              <div className={styles.topAccentBar}></div>
              
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              
              <div className={styles.cardFooterInline}>
                <span className={styles.learnMoreText}>{service.linkText}</span>
                <button className={styles.actionArrow} aria-label={`Learn more about ${service.title}`}>
                  <HiOutlineArrowSmRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerAction}>
          <button className={styles.primaryDiscoverBtn}>
            Discover all our Services
            <HiOutlineArrowSmRight className={styles.btnIconArrow} />
          </button>
        </div>
      </div>
    </section>
  );
}