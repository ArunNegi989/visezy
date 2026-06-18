"use client";

import { useEffect, useState, useCallback } from "react";
import {
  FaHeading,
  FaParagraph,
  FaListUl,
  FaQuoteLeft,
  FaImage,
  FaTable,
  FaCode,
  FaArrowsAltV,
  FaTrash,
  FaMinus,
  FaChevronUp,
  FaChevronDown,
  FaPlus,
  FaLink,
  FaCloudUploadAlt,
} from "react-icons/fa";

import styles from "./BlockBuilder.module.css";

export interface ContentBlock {
  id: string;
  type:
  | "h2"
  | "h3"
  | "paragraph"
  | "list"
  | "quote"
  | "image"
  | "table"
  | "code"
  | "divider"
  | "spacer";
  content?: string;
  items?: string[];
  url?: string;
  language?: string;
  rows?: string[][];
  localFile?: File;
}

interface Props {
  value: ContentBlock[];
  onChange: (blocks: ContentBlock[]) => void;
  onImageUpload?: (
    file: File,
    blockIndex: number
  ) => Promise<string | void>;

  errors?: Record<string, string>;
}

const blockTypes = [
  { type: "h2", label: "Heading 2", icon: <FaHeading /> },
  { type: "h3", label: "Heading 3", icon: <FaHeading /> },
  { type: "paragraph", label: "Paragraph", icon: <FaParagraph /> },
  { type: "list", label: "Bullet List", icon: <FaListUl /> },
  { type: "quote", label: "Quote", icon: <FaQuoteLeft /> },
  { type: "image", label: "Image Embed", icon: <FaImage /> },
  { type: "table", label: "Data Table", icon: <FaTable /> },
  { type: "code", label: "Code Snippet", icon: <FaCode /> },
  { type: "divider", label: "Divider Line", icon: <FaMinus /> },
  { type: "spacer", label: "Vertical Spacer", icon: <FaArrowsAltV /> },
] as const;

const AVAILABLE_LANGUAGES = [
  { value: "plaintext", label: "Plain Text" },
  { value: "javascript", label: "JavaScript / TypeScript" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "python", label: "Python" },
  { value: "json", label: "JSON" },
];

export default function BlockBuilder({ value, onChange, onImageUpload, errors, }: Props) {

  const [blocks, setBlocks] = useState<ContentBlock[]>(value);
  const [imageModes, setImageModes] = useState<Record<string, "upload" | "url">>({});
  const [uploadingBlockId, setUploadingBlockId] = useState<string | null>(null);

  // Smart Sync & Edit Mode Initialization
  useEffect(() => {
    setBlocks(value || []);

    if (value && value.length > 0) {
      const initialModes: Record<string, "upload" | "url"> = {};
      value.forEach((block) => {
        if (block.type === "image") {
          initialModes[block.id] = block.url ? "url" : "upload";
        }
      });
      setImageModes((prev) => ({ ...prev, ...initialModes }));
    }
  }, [value]);

  const syncBlocks = useCallback(
    (updated: ContentBlock[]) => {
      setBlocks(updated);
      onChange(updated);
    },
    [onChange]
  );

  const addBlock = (e: React.MouseEvent, type: ContentBlock["type"]) => {
    e.preventDefault();
    e.stopPropagation();

    const block: ContentBlock = {
      id: crypto.randomUUID(),
      type,
      content: "",
      ...(type === "list" && { items: [""] }),
      ...(type === "code" && { language: "plaintext" }),
      ...(type === "table" && {
        rows: [
          ["Header 1", "Header 2", "Header 3"],
          ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
        ],
      }),
      ...(type === "spacer" && { content: "40" }),
    };

    if (type === "image") {
      setImageModes((prev) => ({ ...prev, [block.id]: "upload" }));
    }

    syncBlocks([...blocks, block]);
  };

  const updateBlock = (id: string, updates: Partial<ContentBlock>) => {
    const updated = blocks.map((block) =>
      block.id === id ? { ...block, ...updates } : block
    );
    setBlocks(updated);
    onChange(updated);
  };

  const removeBlock = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = blocks.filter((block) => block.id !== id);
    syncBlocks(updated);
  };

  const moveBlock = (e: React.MouseEvent, index: number, direction: number) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = [...blocks];
    const target = index + direction;

    if (target < 0 || target >= updated.length) return;

    [updated[index], updated[target]] = [updated[target], updated[index]];
    syncBlocks(updated);
  };

  const updateTableCell = (blockId: string, currentRows: string[][], rowIndex: number, colIndex: number, cellVal: string) => {
    const updatedRows = currentRows.map((row, rIdx) =>
      row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? cellVal : cell))
    );
    updateBlock(blockId, { rows: updatedRows });
  };

  const addTableRow = (blockId: string, currentRows: string[][]) => {
    const colCount = currentRows[0]?.length || 2;
    const newRow = Array(colCount).fill("");
    updateBlock(blockId, { rows: [...currentRows, newRow] });
  };

  const addTableColumn = (blockId: string, currentRows: string[][]) => {
    const updatedRows = currentRows.map((row) => [...row, ""]);
    updateBlock(blockId, { rows: updatedRows });
  };

  const removeTableRow = (blockId: string, currentRows: string[][], rowIndex: number) => {
    if (currentRows.length <= 1) return;
    const updatedRows = currentRows.filter((_, idx) => idx !== rowIndex);
    updateBlock(blockId, { rows: updatedRows });
  };

  const removeTableColumn = (blockId: string, currentRows: string[][], colIndex: number) => {
    if (currentRows[0]?.length <= 1) return;
    const updatedRows = currentRows.map((row) => row.filter((_, idx) => idx !== colIndex));
    updateBlock(blockId, { rows: updatedRows });
  };

  const getCleanPreviewUrl = (block: ContentBlock) => {
    if (block.localFile) {
      return URL.createObjectURL(block.localFile);
    }

    const targetUrl = block.url || block.content || "";

    if (
      targetUrl.includes("unsplash.com/photos/") ||
      targetUrl.includes("pexels.com/photo/")
    ) {
      return "";
    }

    if (targetUrl.startsWith("/")) {
      return `${process.env.NEXT_PUBLIC_BACKEND_URL}${targetUrl}`;
    }

    return targetUrl;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.blocksContainer}>
        {blocks.length === 0 ? (
          <div className={styles.emptyState}>
            No custom blocks added yet. Use the selector dashboard below to add elements.
          </div>
        ) : (
          blocks.map((block, index) => (
            <div
              key={block.id}
              className={styles.blockCard}
              data-error={!!errors?.[`block-${index}`]}
            >
              <div className={styles.blockHeader}>
                <div className={styles.typeBadge} data-type={block.type}>
                  <span className={styles.badgeDot}></span>
                  {block.type}
                </div>
                {errors?.[`block-${index}`] && (
                  <span className={styles.errorText}>
                    {errors[`block-${index}`]}
                  </span>
                )}
                <div className={styles.actionButtonGroup}>
                  <button
                    type="button"
                    className={styles.controlBtn}
                    disabled={index === 0}
                    onClick={(e) => moveBlock(e, index, -1)}
                    title="Move Block Up"
                  >
                    <FaChevronUp size={12} />
                  </button>

                  <button
                    type="button"
                    className={styles.controlBtn}
                    disabled={index === blocks.length - 1}
                    onClick={(e) => moveBlock(e, index, 1)}
                    title="Move Block Down"
                  >
                    <FaChevronDown size={12} />
                  </button>

                  <div className={styles.divider}></div>

                  <button
                    type="button"
                    className={`${styles.controlBtn} ${styles.deleteBtn}`}
                    onClick={(e) => removeBlock(e, block.id)}
                    title="Delete Block"
                  >
                    <FaTrash size={12} className={styles.trashIcon} />
                  </button>
                </div>
              </div>

              <div className={styles.blockContent}>
                {(block.type === "h2" ||
                  block.type === "h3" ||
                  block.type === "paragraph" ||
                  block.type === "quote") && (
                    <textarea
                     data-error={!!errors?.[`block-${index}`]}
                      value={block.content || ""}
                      placeholder={`Type your custom ${block.type} content...`}
                      onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                    />
                  )}

                {block.type === "code" && (
                  <div className={styles.codeBlockWrapper}>
                    <div className={styles.selectWrapper} style={{ marginBottom: "10px", width: "220px" }}>
                      <select
                      
                        value={block.language || "plaintext"}
                        onChange={(e) => updateBlock(block.id, { language: e.target.value })}
                      >
                        {AVAILABLE_LANGUAGES.map((lang) => (
                          <option key={lang.value} value={lang.value}>
                            {lang.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <textarea
                     data-error={!!errors?.[`block-${index}`]}
                      value={block.content || ""}
                      placeholder={`// Write your ${block.language || 'plaintext'} code here...`}
                      className={styles.monoTextarea}
                      onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                    />
                  </div>
                )}

                {block.type === "list" && (
                  <textarea
                   data-error={!!errors?.[`block-${index}`]}
                    value={block.items?.join("\n") || ""}
                    placeholder="Line item one&#10;Line item two"
                    onChange={(e) => updateBlock(block.id, { items: e.target.value.split("\n") })}
                  />
                )}

                {block.type === "image" && (
                  <div className={styles.imageBlockWrapper}>
                    <div className={styles.imageModeTabs}>
                      <button
                        type="button"
                        className={(imageModes[block.id] || "upload") === "upload" ? styles.imageActiveTab : styles.imageTab}
                        onClick={() => setImageModes((prev) => ({ ...prev, [block.id]: "upload" }))}
                      >
                        <FaCloudUploadAlt style={{ marginRight: "6px" }} /> Upload Image
                      </button>
                      <button
                        type="button"
                        className={(imageModes[block.id] || "upload") === "url" ? styles.imageActiveTab : styles.imageTab}
                        onClick={() => setImageModes((prev) => ({ ...prev, [block.id]: "url" }))}
                      >
                        <FaLink style={{ marginRight: "6px" }} /> Remote URL Path
                      </button>
                    </div>

                    <div className={styles.imageTabContent}>
                      {(imageModes[block.id] || "upload") === "upload" ? (
                        <div className={styles.imageUploadZone}>
                          <label className={styles.inlineDropzone}>
                            <input
                              type="file"
                              accept="image/*"
                              style={{ display: "none" }}
                              disabled={uploadingBlockId === block.id}
                              onChange={async (e) => {
                                if (e.target.files?.[0] && onImageUpload) {
                                  const file = e.target.files[0];
                                  try {
                                    setUploadingBlockId(block.id);
                                    // CRITICAL FIXED FLOW: Waiting for upload and getting returned string
                                    const uploadedUrl = await onImageUpload(file, index);

                                    // Force updating the local state with the newly created server string path
                                    updateBlock(block.id, {
                                      localFile: file,
                                      url: uploadedUrl || block.url,
                                      content: uploadedUrl || block.content
                                    });
                                  } catch (err) {
                                    console.error("Upload handler broken:", err);
                                  } finally {
                                    setUploadingBlockId(null);
                                  }
                                }
                              }}
                            />
                            <FaCloudUploadAlt size={16} style={{ marginRight: "8px" }} />
                            {uploadingBlockId === block.id
                              ? "Uploading Asset to Server..."
                              : block.localFile || block.url
                                ? "Change Local Image File"
                                : "Choose / Drop Native File Asset"
                            }
                          </label>
                        </div>
                      ) : (
                        <div className={styles.inputIconWrapper}>
                          <input
                           data-error={!!errors?.[`block-${index}`]}
                            type="text"
                            placeholder="Enter remote image URL..."
                            value={block.url || ""}
                            onChange={(e) => {
                              const updatedUrl = e.target.value;
                              updateBlock(block.id, { url: updatedUrl, content: updatedUrl });
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {(block.localFile || block.url || block.content) && (
                      <div className={styles.premiumImagePreviewLayout}>
                        <div className={styles.previewImageCanvas}>
                          {getCleanPreviewUrl(block) ? (
                            <img
                              src={getCleanPreviewUrl(block)}
                              alt="Preview Asset"
                            />
                          ) : (
                            <div className={styles.invalidPreview}>
                              Invalid image URL
                            </div>
                          )}
                        </div>
                        <div className={styles.previewMetaContext}>
                          <div className={styles.previewHeadingContext}>
                            {block.localFile ? "Native Block Asset File (Staged)" : "Active Production Server Image Route"}
                          </div>
                          <span className={styles.previewSubtextContext}>
                            {block.localFile
                              ? `${block.localFile.name} (${(block.localFile.size / 1024).toFixed(1)} KB)`
                              : getCleanPreviewUrl(block)}
                          </span>
                          <button
                            type="button"
                            className={styles.inlineRemoveBtn}
                            onClick={() => updateBlock(block.id, { localFile: undefined, url: "", content: "" })}
                          >
                            <FaTrash size={11} style={{ marginRight: "5px" }} /> Remove Asset
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {block.type === "table" && block.rows && (
                  <div className={styles.interactiveTableContainer}>
                    <table className={styles.adminLiveTable}>
                      <thead>
                        <tr>
                          {block.rows[0]?.map((_, colIdx) => (
                            <th key={`th-${colIdx}`}>
                              <div className={styles.tableHeaderCellControls}>
                                <span>Column {colIdx + 1}</span>
                                {block.rows![0]!.length > 1 && (
                                  <button
                                    type="button"
                                    className={styles.tableColDeleteBtn}
                                    onClick={() => removeTableColumn(block.id, block.rows!, colIdx)}
                                    title="Delete Column"
                                  >
                                    ×
                                  </button>
                                )}
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, rowIdx) => (
                          <tr key={`row-${rowIdx}`}>
                            {row.map((cellValue, colIdx) => (
                              <td key={`cell-${rowIdx}-${colIdx}`}>
                                <div className={styles.tableInputCellWrapper}>
                                  <input
                                    type="text"
                                    value={cellValue}
                                    onChange={(e) => updateTableCell(block.id, block.rows!, rowIdx, colIdx, e.target.value)}
                                    placeholder="Enter raw cell text data..."
                                  />
                                  {rowIdx > 0 && colIdx === 0 && (
                                    <button
                                      type="button"
                                      className={styles.tableRowDeleteBtn}
                                      onClick={() => removeTableRow(block.id, block.rows!, rowIdx)}
                                      title="Delete Row"
                                    >
                                      <FaTrash size={10} />
                                    </button>
                                  )}
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className={styles.tableActionControlRow}>
                      <button type="button" className={styles.tableActionBtn} onClick={() => addTableRow(block.id, block.rows!)}>
                        <FaPlus size={11} /> Add Row
                      </button>
                      <button type="button" className={styles.tableActionBtn} onClick={() => addTableColumn(block.id, block.rows!)}>
                        <FaPlus size={11} /> Add Column
                      </button>
                    </div>
                  </div>
                )}

                {block.type === "spacer" && (
                  <div className={styles.spacerInputRow}>
                    <input
                      type="number"
                      min={20}
                      max={200}
                      value={block.content || "40"}
                      onChange={(e) => updateBlock(block.id, { content: e.target.value })}
                    />
                    <span className={styles.inputUnit}>px height clearance gap</span>
                  </div>
                )}

                {block.type === "divider" && <div className={styles.dividerPreviewLine}></div>}
              </div>
            </div>
          ))
        )}
      </div>

      {blocks.length > 0 && <div style={{ height: "16px" }} />}

      <div className={styles.toolbarLabel}>Click to add layout elements</div>
      <div className={styles.toolbar}>
        {blockTypes.map((item) => (
          <button key={item.type} type="button" className={styles.addBtn} onClick={(e) => addBlock(e, item.type)}>
            <span className={item.type === "image" ? styles.btnIcon : styles.btnIcon}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}