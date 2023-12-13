"use client";
import type { FC, ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  imagePlugin,
  linkPlugin,
  linkDialogPlugin,
} from "@mdxeditor/editor";
import React from "react";

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

// Only import this to the next file
const MDEditor: FC<EditorProps> = ({ markdown, editorRef }) => {
  return (
    <MDXEditor
      plugins={[
        // Example Plugin Usage
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        imagePlugin(),
        linkPlugin(),
        linkDialogPlugin(),
      ]}
      markdown={markdown}
      ref={editorRef}
    />
  );
};

export default MDEditor;
