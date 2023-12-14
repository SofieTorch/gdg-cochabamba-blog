import Image from "next/image";

import styles from "./SinglePage.module.css";
import Menu from "@/app/components/menu/Menu";
import { getSinglePost } from "@/app/lib/data";
import Comments from "@/app/components/comments/Comments";
import Markdown from "react-markdown";

interface SinglePageProps {
  params: {
    slug: string;
  };
}

const SinglePage = async ({ params: { slug } }: SinglePageProps) => {
  const post = await getSinglePost(slug);

  return (
    <div className="max-w-3xl mx-auto my-6">
      <h1 className="mb-4 text-5xl font-bold">{post?.title}</h1>
      <hr />
      <div className="flex flex-row space-x-4 my-6">
        {post?.author?.image && (
          <div className={styles.userImageContainer}>
            <Image
              // src={
              //   "https://lh3.googleusercontent.com/a/ACg8ocJZJ89wGhnPGsRaOGKAL2JOBik9nX81bczo3PtqFkR4iy0=s96-c"
              // }
              src={post.author.image}
              alt=""
              fill
              className={styles.avatar}
            />
          </div>
        )}
        <div className="flex flex-col">
          <h4>{post?.author?.name}</h4>
          <span>
            {post?.createdAt &&
              new Date(post.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </span>
        </div>
      </div>
      {/* {post?.img && (
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="" fill className={styles.image} />
          </div>
        )} */}

      <div className="flex flex-col space-y-2.5">
        <Markdown>{post?.content}</Markdown>
      </div>
      {/* <Menu /> */}
      <Comments postSlug={post?.slug ?? ""} />
    </div>
  );
};

export default SinglePage;
