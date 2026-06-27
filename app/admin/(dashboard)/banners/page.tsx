"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import { toast } from "sonner";
import styles from "./banners.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Banner {
  _id: string;
  title: string;
  highlightedText: string;
  image: string;
  displayOrder: number;
  isActive: boolean;
}

export default function BannersPage() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [search, setSearch] = useState("");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  useEffect(() => {
    fetchBanners();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await fetch(`${API_URL}/banners`);
      const data = await response.json();

      setBanners(data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBanner = async (id: string) => {
  const confirmed = window.confirm(
    "Delete this banner?"
  );

  if (!confirmed) return;

  try {
    const response = await fetch(
      `${API_URL}/banners/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error();
    }

    toast.success("Banner deleted");

    fetchBanners();
  } catch (error) {
    toast.error("Failed to delete banner");
  }
};

const toggleStatus = async (id: string) => {
  try {
    setLoadingId(id);

    const response = await fetch(
      `${API_URL}/banners/${id}/status`,
      {
        method: "PATCH",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    toast.success(
      `Banner ${
        data.data.isActive
          ? "activated"
          : "deactivated"
      }`
    );

    fetchBanners();
  } catch (error) {
    toast.error("Failed to update status");
  } finally {
    setLoadingId(null);
  }
};

const reorderBanner = async (
  id: string,
  direction: "up" | "down"
) => {
  try {
    setLoadingId(id);

    const response = await fetch(
      `${API_URL}/banners/${id}/reorder`,
      {
        method: "PATCH",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          direction,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      toast.error(data.message);
      return;
    }

    toast.success("Banner reordered");

    await fetchBanners();
  } catch (error) {
    toast.error("Failed to reorder banner");
  } finally {
    setLoadingId(null);
  }
};

const filtered = banners.filter((item) =>
    `${item.title} ${item.highlightedText}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <span className={styles.badge}>
            Homepage Management
          </span>

          <h1>Banner Slider</h1>

          <p>
            Create, edit and manage homepage banners.
          </p>
        </div>

        <Link
          href="/admin/banners/create"
          className={styles.addBtn}
        >
          <FaPlus />
          Add Banner
        </Link>
      </motion.div>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <div className={styles.search}>
            <FaSearch />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search banners..."
            />
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <table>
            <thead>
              <tr>
                <th>Preview</th>
                <th>Title</th>
                <th>Order</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((banner, index) => (
                <tr key={banner._id}>
                  <td>
                    <img
                      src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${banner.image}`}
                      alt={banner.title}
                      className={styles.preview}
                    />
                  </td>

                  <td>
                    <div>
                      <h4>{banner.title}</h4>
                      <p>{banner.highlightedText}</p>
                    </div>
                  </td>

                  <td>
                    <div className={styles.orderControls}>
                      <span className={styles.orderValue}>
                        {banner.displayOrder}
                      </span>

                     <div className={styles.orderButtons}>
  {index !== 0 && (
    <button
      onClick={() =>
        reorderBanner(
          banner._id,
          "up"
        )
      }
      disabled={loadingId === banner._id}
    >
      <FaArrowUp />
    </button>
  )}

  {index !== filtered.length - 1 && (
    <button
      onClick={() =>
        reorderBanner(
          banner._id,
          "down"
        )
      }
      disabled={loadingId === banner._id}
    >
      <FaArrowDown />
    </button>
  )}
</div>
</div>
                  </td>

                  <td>
                    <button
                      className={
                        banner.isActive
                          ? styles.active
                          : styles.inactive
                      }
                      onClick={() =>
                        toggleStatus(banner._id)
                      }
                      disabled={
                        loadingId === banner._id
                      }
                    >
                      {loadingId === banner._id
                        ? "Updating..."
                        : banner.isActive
                        ? "Active"
                        : "Inactive"}
                    </button>
                  </td>

                  <td>
                    <div className={styles.actions}>
                      <Link
                        href={`/admin/banners/edit/${banner._id}`}
                      >
                        <FaEdit />
                      </Link>

                      <button
                        onClick={() =>
                          deleteBanner(banner._id)
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}