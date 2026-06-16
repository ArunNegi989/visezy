"use client";

import styles from "./CustomerTestimonials.module.css";
import {
  HiStar,
  HiBadgeCheck,
  HiOutlineChatAlt2,
} from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    policy: "Health Insurance",
    review:
      "Visezy helped me compare multiple plans and saved me nearly ₹12,000 annually. The entire process was transparent and hassle-free.",
  },
  {
    id: 2,
    name: "Priya Patel",
    policy: "Life Insurance",
    review:
      "Excellent customer support and clear guidance throughout the policy selection process. Highly recommended.",
  },
  {
    id: 3,
    name: "Amit Verma",
    policy: "Car Insurance",
    review:
      "Claim assistance was incredibly smooth. The team handled everything professionally and kept me informed at every step.",
  },
];

export default function CustomerTestimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            Trusted by 5,000+ Customers
          </div>

          <h2 className={styles.title}>
            Real Stories From
            <br />
            <span className={styles.gradient}>Satisfied Customers</span>
          </h2>

          <p className={styles.description}>
            Thousands of customers trust Visezy to find the right insurance
            coverage with transparent pricing, expert guidance, and dedicated
            support.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={3}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiper}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.card}>
                <div className={styles.quoteIcon}>
                  <HiOutlineChatAlt2 />
                </div>

                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <HiStar key={i} className={styles.star} />
                  ))}
                </div>

                <p className={styles.review}>
                  "{item.review}"
                </p>

                <div className={styles.footer}>
                  <div className={styles.userInfo}>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.policy}>{item.policy}</span>
                  </div>

                  <div className={styles.verified}>
                    <HiBadgeCheck className={styles.verifiedIcon} />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.bottomStats}>
          <div className={styles.statCard}>
            <div className={styles.statValue}>5000+</div>
            <div className={styles.statLabel}>Happy Customers</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>4.9/5</div>
            <div className={styles.statLabel}>Average Rating</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statValue}>98%</div>
            <div className={styles.statLabel}>Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}