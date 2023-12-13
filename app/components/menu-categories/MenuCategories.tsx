import React from "react";
import Link from "next/link";

import styles from "./MenuCategories.module.css";
import { categories } from "@/app/lib/placeholder-data";


const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      {categories.map((item) => (
        <Link
          href={`/blog?cat=${item.slug}`}
          key={item.id}
          className={`${styles.categoryItem}`}
          style={{ backgroundColor: item.color! }}
        >
          {item.title}
        </Link>
      ))
      }
    </div>
  );
};

export default MenuCategories;
