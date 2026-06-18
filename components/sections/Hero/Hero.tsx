"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Hero.module.css";

import {
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineLightningBolt,
  HiTrendingUp,
  HiCheckCircle,
  HiOutlineArrowSmRight,
} from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
interface Banner {
  _id: string;
  badgeText: string;
  title: string;
  image: string;
  highlightedText: string;
  subTitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  isActive: boolean;
}

export default function Hero({
  banners,
}: {
  banners: Banner[];
}) {
  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL;

  const activeBanners = banners.filter(
    (banner) => banner.isActive
  );

  if (!activeBanners.length) return null;

  if (!banners?.length) return null;

  return (
    <section
      id="hero"
      className={styles.hero}
      aria-label="Insurance Introduction"
    >
      {/* Background Effects */}
      <div
        className={styles.gridPattern}
        aria-hidden="true"
      />

      <div
        className={styles.glowPremium}
        aria-hidden="true"
      />

      <div
        className={styles.blurOne}
        aria-hidden="true"
      />

      <div
        className={styles.blurTwo}
        aria-hidden="true"
      />

      <Swiper
        className={styles.heroSwiper}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={1400}
        allowTouchMove={false}
        loop={activeBanners.length > 1}
      >
        {activeBanners.map((banner) => (
          <SwiperSlide key={banner._id}>
            <div className={styles.container}>
              {/* LEFT SIDE */}
              <div className={styles.left}>
                <div className={styles.badge}>
                  <span
                    className={styles.badgeDot}
                  />

                  <span
                    className={styles.badgeText}
                  >
                    {banner.badgeText}
                  </span>
                </div>

                <h1 className={styles.title}>
                  {banner.title}

                  <span
                    className={
                      styles.gradientText
                    }
                  >
                    {" "}
                    {banner.highlightedText}
                  </span>

                  <br />

                  <span
                    className={
                      styles.textSlideUp
                    }
                  >
                    {banner.subTitle}
                  </span>
                </h1>

                <p
                  className={
                    styles.description
                  }
                >
                  {banner.description}
                </p>

                <div
                  className={styles.buttons}
                >
                  <Link
                    href={
                      banner.primaryButtonLink ||
                      "#"
                    }
                    className={
                      styles.primaryBtn
                    }
                  >
                    <span>
                      {
                        banner.primaryButtonText
                      }
                    </span>

                    <HiOutlineLightningBolt
                      className={
                        styles.btnIconInline
                      }
                    />
                  </Link>

                  <Link
                    href={
                      banner.secondaryButtonLink ||
                      "#"
                    }
                    className={
                      styles.secondaryBtn
                    }
                  >
                    <span>
                      {
                        banner.secondaryButtonText
                      }
                    </span>

                    <HiOutlineArrowSmRight
                      className={styles.arrow}
                    />
                  </Link>
                </div>

                {/* TRUST ROW */}
                <div
                  className={styles.trustRow}
                >
                  <div
                    className={
                      styles.trustItem
                    }
                  >
                    <HiOutlineShieldCheck
                      className={
                        styles.trustIcon
                      }
                    />

                    <span>
                      AES-256 Encrypted
                    </span>
                  </div>

                  <div
                    className={
                      styles.trustItem
                    }
                  >
                    <HiOutlineStar
                      className={
                        styles.trustIconStar
                      }
                    />

                    <span>
                      4.9/5 User Rating
                    </span>
                  </div>

                  <div
                    className={
                      styles.trustItem
                    }
                  >
                    <HiOutlineLightningBolt
                      className={
                        styles.trustIconLightning
                      }
                    />

                    <span>
                      Instant Setup
                    </span>
                  </div>
                </div>

                {/* STATS */}
                <div
                  className={styles.statsGrid}
                >
                  <div
                    className={
                      styles.statCard
                    }
                  >
                    <div
                      className={
                        styles.statLine
                      }
                    />

                    <h3>30+</h3>

                    <p>
                      Tier-1 Partners
                    </p>
                  </div>

                  <div
                    className={
                      styles.statCard
                    }
                  >
                    <div
                      className={
                        styles.statLine
                      }
                    />

                    <h3>98.4%</h3>

                    <p>
                      Settlement Rate
                    </p>
                  </div>

                  <div
                    className={
                      styles.statCard
                    }
                  >
                    <div
                      className={
                        styles.statLine
                      }
                    />

                    <h3>&lt; 2m</h3>

                    <p>
                      Instant Issuance
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className={styles.right}>
                <div
                  className={
                    styles.bannerImageWrapper
                  }
                >
                  <img
                    src={`${BACKEND_URL}${banner.image}`}
                    alt={banner.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.bannerImage}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}