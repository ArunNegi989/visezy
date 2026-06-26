"use client";

import {
  useEffect,
  useState,
  ChangeEvent,
} from "react";

import { useParams, useRouter } from "next/navigation";

import { motion } from "framer-motion";

import { toast } from "sonner";

import {
  FaCloudUploadAlt,
  FaSave,
  FaArrowLeft,
  FaTimes,
} from "react-icons/fa";


import Link from "next/link";

import styles from "./BannerForm.module.css";

interface FormErrors {
  badgeText?: string;
  title?: string;
  highlightedText?: string;
  subTitle?: string;
  description?: string;
  image?: string;
}

interface BannerFormProps {
  mode: "create" | "edit";
}

interface BannerData {
  badgeText: string;
  title: string;
  highlightedText: string;
  subTitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  isActive: boolean;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL;

export default function BannerForm({
  mode,
}: BannerFormProps) {
  const router = useRouter();

  const params = useParams();

  const id = params?.id as string;

  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState("");
  const [errors, setErrors] =
    useState<FormErrors>({});
  const [image, setImage] =
    useState<File | null>(null);

  const [formData, setFormData] =
    useState<BannerData>({
      badgeText: "",
      title: "",
      highlightedText: "",
      subTitle: "",
      description: "",
      primaryButtonText: "",
      primaryButtonLink: "",
      secondaryButtonText: "",
      secondaryButtonLink: "",
      isActive: true,
    });

  useEffect(() => {
    if (mode === "edit" && id) {
      fetchBanner();
    }
  }, [id, mode]);
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.badgeText.trim()) {
      newErrors.badgeText =
        "Badge text is required";
    }

    if (!formData.title.trim()) {
      newErrors.title =
        "Title is required";
    }

    if (!formData.highlightedText.trim()) {
      newErrors.highlightedText =
        "Highlighted text is required";
    }

    if (!formData.subTitle.trim()) {
      newErrors.subTitle =
        "Subtitle is required";
    }

    if (!formData.description.trim()) {
      newErrors.description =
        "Description is required";
    }

    if (
      mode === "create" &&
      !image &&
      !preview
    ) {
      newErrors.image =
        "Banner image is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const fetchBanner = async () => {
    try {
      const response = await fetch(
        `${API_URL}/banners/${id}`
      );

      const data = await response.json();

      setFormData(data.data);

      setPreview(
        `${BACKEND_URL}${data.data.image}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "number"
          ? Number(value)
          : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
    setErrors((prev) => ({
      ...prev,
      image: "",
    }));
    toast.success("Banner image uploaded");
  };


  const removeImage = () => {
    setImage(null);
    setPreview("");

    if (mode === "create") {
      setErrors((prev) => ({
        ...prev,
        image: "Banner image is required",
      }));
    }

    toast.success("Banner image removed");
  };


  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error(
        "Please fill all required fields"
      );

      return;
    }
    try {
      setLoading(true);

      const payload = new FormData();

      Object.entries(formData).forEach(
        ([key, value]) => {
          payload.append(
            key,
            String(value)
          );
        }
      );

      if (image) {
        payload.append("image", image);
      }

      const url =
        mode === "create"
          ? `${API_URL}/banners`
          : `${API_URL}/banners/${id}`;

      const response = await fetch(url, {
        method:
          mode === "create"
            ? "POST"
            : "PUT",
        body: payload,
      });

      if (!response.ok) {
        throw new Error(
          "Failed to save banner"
        );
      }
      toast.success(
        mode === "create"
          ? "Banner created successfully"
          : "Banner updated successfully"
      );
      router.push("/admin/banners");
    } catch (error) {
      console.error(error);

      toast.error("Failed to save banner");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          <Link
            href="/admin/banners"
            className={styles.backBtn}
          >
            <FaArrowLeft />
            Back
          </Link>

          <h1>
            {mode === "create"
              ? "Create Banner"
              : "Edit Banner"}
          </h1>

          <p>
            Manage homepage slider
            content dynamically.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <motion.form
          className={styles.formCard}
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <div className={styles.field}>
            <label>Badge Text</label>

            <input
              name="badgeText"
              value={formData.badgeText}
              onChange={handleChange}
              className={
                errors.badgeText
                  ? styles.inputError
                  : ""
              }
            />

            {errors.badgeText && (
              <span className={styles.errorText}>
                {errors.badgeText}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label>Title</label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={
                errors.title
                  ? styles.inputError
                  : ""
              }

            />

            {errors.title && (
              <span className={styles.errorText}>
                {errors.title}
              </span>
            )}        </div>

          <div className={styles.field}>
            <label>
              Highlighted Text
            </label>

            <input
              name="highlightedText"
              value={
                formData.highlightedText
              }
              onChange={handleChange}
              className={
                errors.highlightedText
                  ? styles.inputError
                  : ""
              }
            />
            {errors.highlightedText && (
              <span className={styles.errorText}>
                {errors.highlightedText}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label>Subtitle</label>

            <input
              name="subTitle"
              value={formData.subTitle}
              onChange={handleChange}
              className={
                errors.subTitle
                  ? styles.inputError
                  : ""
              }
            />
            {errors.subTitle && (
              <span className={styles.errorText}>
                {errors.subTitle}
              </span>
            )}
          </div>

          <div className={styles.field}>
            <label>Description</label>

            <textarea
              rows={5}
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={
                errors.description
                  ? styles.inputError
                  : ""
              }
            />
            {errors.description && (
              <span className={styles.errorText}>
                {errors.description}
              </span>
            )}
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>
                Primary Button Text
              </label>

              <input
                name="primaryButtonText"
                value={
                  formData.primaryButtonText
                }
                onChange={handleChange}

              />
            </div>

            <div className={styles.field}>
              <label>
                Primary Button Link
              </label>

              <input
                name="primaryButtonLink"
                value={
                  formData.primaryButtonLink
                }
                onChange={handleChange}

              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>
                Secondary Button Text
              </label>

              <input
                name="secondaryButtonText"
                value={
                  formData.secondaryButtonText
                }
                onChange={handleChange}

              />
            </div>

            <div className={styles.field}>
              <label>
                Secondary Button Link
              </label>

              <input
                name="secondaryButtonLink"
                value={
                  formData.secondaryButtonLink
                }
                onChange={handleChange}

              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.toggle}>
              <label>Active Banner</label>

              <input
                type="checkbox"
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    isActive: e.target.checked,
                  }))
                }

              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={styles.submitBtn}
          >
            <FaSave />

            {loading
              ? "Saving..."
              : mode === "create"
                ? "Create Banner"
                : "Update Banner"}
          </button>
        </motion.form>

        <motion.div
          className={styles.previewCard}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className={styles.previewHeader}>
            <span className={styles.previewTag}>
              Live Preview
            </span>

            <div className={styles.previewActions}>
              <label
                htmlFor="banner-image"
                className={styles.changeImageBtn}
              >
                Change Image
              </label>

              {preview && (
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={removeImage}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          </div>

          <input
            id="banner-image"
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />

          {preview ? (
            <img
              src={preview}
              alt="Banner preview"
              className={styles.previewImage}
            />
          ) : (
            <>
              <label
                htmlFor="banner-image"
                className={styles.emptyPreview}
              >
                <FaCloudUploadAlt />

                <span>Upload Banner Image</span>

                <small>
                  JPG, PNG, WEBP • Max 5MB
                </small>
              </label>

              {errors.image && (
                <span className={styles.errorText}>
                  {errors.image}
                </span>
              )}
            </>
          )}
          <div className={styles.previewContent}>
            <span className={styles.badge}>
              {formData.badgeText || "Badge Text"}
            </span>

            <h2>
              {formData.title || "Banner Title"}

              <span>
                {" "}
                {formData.highlightedText}
              </span>
            </h2>

            <h3>
              {formData.subTitle ||
                "Banner subtitle"}
            </h3>

            <p>
              {formData.description ||
                "Banner description will appear here."}
            </p>

            <div className={styles.previewButtons}>
              <button type="button">
                {formData.primaryButtonText ||
                  "Get Started"}
              </button>

              <button
                type="button"
                className={styles.previewSecondary}
              >
                {formData.secondaryButtonText ||
                  "Learn More"}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}