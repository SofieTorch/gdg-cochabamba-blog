import React from 'react'
import Link from 'next/link'
import { categories } from '@/app/lib/placeholder-data'

import styles from './CategoryList.module.css'

const CategoryList = async () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {categories.map((item) => (
                    <Link
                        href={`/blog?cat=${item.slug}`}
                        key={item.id}
                        className={`${styles.category}`}
                        style={{ backgroundColor: item.color! }}
                    >
                        #{item.title}
                    </Link>
                ))}
            </div>
        </div >

    )
}

export default CategoryList
