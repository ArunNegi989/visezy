"use client";

import { useEffect, useRef } from "react";

import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";

interface Props {
  initialContent?: any[];
  onChange: (blocks: any[]) => void;
}

export default function BlockEditor({
  initialContent = [],
  onChange,
}: Props) {
  const initialized = useRef(false);

  const editor = useCreateBlockNote({
    initialContent:
      initialContent.length > 0
        ? initialContent
        : undefined,
  });

  useEffect(() => {
    if (initialized.current) return;

    initialized.current = true;
  }, []);

  return (
    <BlockNoteView
      editor={editor}
      editable
      theme="light"
      onChange={() => {
        onChange(editor.document);
      }}
    />
  );
}