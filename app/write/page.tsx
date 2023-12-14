"use client";
import dynamic from "next/dynamic";
import { ChangeEvent, Suspense, useEffect, useRef, useState } from "react";
import { createPost, getCategories, uploadToCloudinary } from "../lib/data";
import { Category, Post } from "@prisma/client";
import { MDXEditorMethods } from "@mdxeditor/editor";
import { slugify } from "../lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

const EditorComp = dynamic(() => import("../components/md-editor/MDEditor"), {
  ssr: false,
});

const markdown = `
# Cabecera 1
Haz click aquí para editar. Escribe en Markdown y ve los resultados al instante.
`;

const Write = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("Título para tu nuevo gran post");
  const contentRef = useRef<MDXEditorMethods>(null);
  const [imageFile, setImageFile] = useState<File | null | undefined>(null);
  const [imageUrl, setImageUrl] = useState("");
  const imageRef = useRef<any>();
  const router = useRouter();

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    let isActive = true;

    const uploadFile = async () => {
      if (!imageFile) return;

      try {
        const url = await uploadToCloudinary(imageFile);
        if (url) {
          setImageUrl(url);
        }
        if (isActive) {
          setImageFile(null);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    };

    void uploadFile();
  }, [imageFile]);

  const uploadFile = () => {
    imageRef.current?.click();
  };

  const onCategoryCheckedChanged = (
    e: ChangeEvent<HTMLInputElement>,
    category: Category
  ) => {
    e.target.checked
      ? setSelectedCategories([...selectedCategories, category.id])
      : setSelectedCategories([
          ...selectedCategories.filter((cat) => cat != category.id),
        ]);
  };

  const submit = async () => {
    createPost({
      title: title,
      cover: imageUrl ?? "",
      content: contentRef.current?.getMarkdown(),
      categoryIds: selectedCategories,
      slug: slugify(title),
    }).then((post: Post) => {
      router.push(`/posts/${post.slug}`);
    });
  };

  return (
    <div className="flex flex-col max-w-3xl mx-auto min-h-screen mt-4 space-y-2 post-page">
      <h1
        contentEditable={true}
        className="text-5xl p-4 font-bold rounded-md"
        suppressContentEditableWarning={true}
        onBlur={(e) => setTitle(e.currentTarget.textContent ?? "")}
      >
        {title}
      </h1>
      <div className="">
        <input
          ref={imageRef}
          id="image"
          type="file"
          accept="image/*"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files ? e.target.files[0] : null;
            setImageFile(file);
          }}
          style={{ display: "none" }}
        />
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="Uploaded Image"
            width={1200}
            height={700}
            onClick={uploadFile}
          />
        ) : (
          <Image
            src="/upload_photograph.svg"
            alt="Upload Image"
            width={1200}
            height={700}
            onClick={uploadFile}
            className="rounded-md border-4 border-dashed p-10 mx-4 h-60"
          />
        )}
      </div>
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} editorRef={contentRef} />
      </Suspense>
      <div className="mx-4">
        <hr />
        <p className="text-lg font-medium mt-3 mb-1">Categorías</p>
        <div className="flex flex-row flex-wrap space-x-4">
          {categories.map((category: any) => (
            <div className="flex flex-row items-center" key={category.id}>
              <input
                type="checkbox"
                className="w-4 h-4 aspect-square rounded-md"
                onChange={(e) => onCategoryCheckedChanged(e, category)}
              ></input>
              <span className="ml-1">{category.slug}</span>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="self-start btn-primary mt-6"
          onClick={submit}
        >
          Publicar
        </button>
      </div>
    </div>
  );
};

export default Write;
