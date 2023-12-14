import Link from "next/link";
import Card from "../components/card/Card";
import Menu from "../components/menu/Menu";
import { getCategories, getPosts } from "../lib/data";
import styles from "./Blog.module.css";
import { Suspense } from "react";

interface BlogPageProps {
  searchParams: {
    category: string;
    page: string;
  };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const page = parseInt(searchParams.page) || 1;
  const { category } = searchParams;

  const posts = await getPosts(category);
  const categories = await getCategories();

  return (
    <div>
      <div className="bg-green-pattern py-8">
        <div className="container mx-auto">
          <h1 className="bg-white p-4 text-4xl font-bold">
            ¡Bienvenido/a a nuestro blog!
          </h1>
        </div>
      </div>
      <div className="container mx-auto flex flex-col mt-4">
        <h3 className="text-xl font-semibold">Categorías</h3>
        <div className="flex flex-row space-x-2 mt-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/blog?category=${cat.id}`}
              className="bg-blue py-2 px-4 rounded-full text-white font-medium"
            >
              {cat.slug}
            </Link>
          ))}
        </div>
        <h3 className="text-xl font-semibold mt-4">Posts</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center w-full">
          {posts.map((post) => (
            <Card post={post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
    // <div className={styles.container}>
    //   <h1 className={styles.title}>{cat} Blog</h1>
    //   <div className={styles.content}>
    //     {/* <Suspense fallback={<div>Loading...</div>}>
    //       <CardList page={page} cat={cat} />
    //     </Suspense> */}
    //     <Menu />
    //   </div>
    // </div>
  );
};

export default BlogPage;
