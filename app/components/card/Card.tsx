import Image from "next/image";
import Link from "next/link";

import styles from "./Card.module.css";
import { Post } from "@prisma/client";
import Markdown from "react-markdown";

const Card = ({ post }: { post: Post }) => {
  const contentLimit = post.cover.trim().length > 0 ? 80 : 240;

  return (
    <div className="max-w-sm border rounded-lg p-4 m-4">
      {post.cover && (
        <div className="relative h-52 mb-2">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover object-top"
          />
        </div>
      )}
      <div className="flex flex-col space-y-1.5">
        <div>
          <span className="text-gray-500">
            {new Date(post.createdAt).toLocaleDateString("es", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            -{" "}
          </span>
          <span className="text-green">{post.views} vistas</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h3 className="text-2xl font-bold">{post.title}</h3>
        </Link>
        <hr />
        <div className="text-lg">
          <Markdown>{post.content.substring(0, contentLimit) + "..."}</Markdown>
        </div>

        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Continuar leyendo
        </Link>
      </div>
    </div>
  );
};

export default Card;
