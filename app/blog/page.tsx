import Menu from "../components/menu/Menu";
import styles from "./Blog.module.css";
import { Suspense } from "react";

interface BlogPageProps {
  searchParams: {
    cat: string;
    page: string;
  };
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <CardList page={page} cat={cat} />
        </Suspense> */}
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
