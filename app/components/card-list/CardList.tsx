
import React from 'react'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'
import { posts } from '@/app/lib/placeholder-data';

import styles from './CardList.module.css'

interface CardListProps {
    page: number;
    cat: string;
}

const CardList = ({ page, cat }: CardListProps) => {
    const POST_PER_PAGE = 4;

    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < posts.length;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                {posts.map((post) => (
                    <Card post={post} key={post.id} />
                ))}
            </div>

            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
        </div>
    );
}

export default CardList