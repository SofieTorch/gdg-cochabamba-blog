import CardList from "./components/card-list/CardList";
import CategoryList from "./components/category-list/CategoryList";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";
import { Suspense } from "react";
import styles from "./page.module.css";
import LatestNews from "./components/latest-news/LatestNews";

interface HomeProps {
  searchParams: {
    page: string;
    cat: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const page = parseInt(searchParams.page) || 1;
  const cat = searchParams.cat || "";

  return (
    <main>
      <Featured />
      <div className="container mx-auto px-2">
        <LatestNews />
      </div>

      {/* <Suspense fallback={<div>Loading...</div>}>
        <CategoryList />
      </Suspense> */}
      {/* <div className={styles.content}> */}
      {/* <CardList page={page} cat={cat} /> */}
      {/* <Menu /> */}
      {/* </div> */}
    </main>
  );
}
