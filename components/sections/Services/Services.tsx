"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import styles from "./Services.module.css";
import {
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlineArrowSmRight,
} from "react-icons/hi";
import { RiCarLine } from "react-icons/ri";

const services = [
  {
    icon: <RiCarLine />,
    title: "Motor Insurance",
    description:
      "Drive with peace of mind knowing your vehicle and liabilities are covered against accidents, theft, and third-party damages.",
    colorClass: styles.motorTheme,
    linkText: "Explore Motor Cover",
    href: "/policies/car-insurance",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Life Insurance",
    description:
      "Protect your loved ones' future with a policy that provides financial security in case of unforeseen events.",
    colorClass: styles.lifeTheme,
    linkText: "Secure Life Plan",
    href: "/policies/life-insurance",
  },
  {
    icon: <HiOutlineHeart />,
    title: "Health Insurance",
    description:
      "Secure your health and well-being with comprehensive plans covering hospitalization, OPD care, critical illness, and more.",
    colorClass: styles.healthTheme,
    linkText: "Check Health Schemes",
    href: "/policies/health-insurance",
  },
];

export default function Services() {

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.15,
      },
    },
  };

  const fadeDown: Variants = {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className={styles.section}>
      <div className={styles.radialGlow} aria-hidden="true"></div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className={styles.headerBlock}
          variants={fadeDown}
        >
          <div className={styles.sectionBadge}>
            <span className={styles.badgePulse}></span>
            <span className={styles.miniLabel}>Our Offerings</span>
          </div>

          <h2 className={styles.title}>
            Explore all of our{" "}
            <span className={styles.gradientText}>Services</span>
          </h2>

          <p className={styles.subtitle}>
            Compare, customize, and secure your financial safety net using an
            automated ecosystem engineered for absolute transparency.
          </p>
        </motion.div>

        <motion.div
          className={styles.cardGrid}
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.href}
              variants={fadeUp}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateX: 4,
                rotateY: -4,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 18,
              }}
            >
              <Link
                href={service.href}
                className={`${styles.serviceCard} ${service.colorClass}`}
                aria-label={`Learn more about ${service.title}`}
              >
                <div className={styles.topAccentBar}></div>

                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>

                <h3 className={styles.cardTitle}>{service.title}</h3>

                <p className={styles.cardDescription}>
                  {service.description}
                </p>

                <div className={styles.cardFooterInline}>
                  <span className={styles.learnMoreText}>
                    {service.linkText}
                  </span>

                  <span className={styles.actionArrow}>
                    <HiOutlineArrowSmRight />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.footerAction}
          variants={fadeUp}
        >
          <Link href="/policies" className={styles.primaryDiscoverBtn}>
            Discover all our Services
            <HiOutlineArrowSmRight className={styles.btnIconArrow} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}