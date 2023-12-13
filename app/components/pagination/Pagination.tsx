"use client";
import React from "react";
import { useRouter } from "next/navigation";

import styles from "./Pagination.module.css";

interface PaginationProps {
    page: number;
    hasPrev: boolean;
    hasNext: boolean;
}

const Pagination = ({ page, hasPrev, hasNext }: PaginationProps) => {
    const router = useRouter();

    return (
        <>
            {page > 1 && (
                <div className={styles.container}>
                    <button
                        className={styles.button}
                        disabled={!hasPrev}
                        onClick={() => router.push(`?page=${page - 1}`)}
                    >
                        Previous
                    </button>
                    <button
                        disabled={!hasNext}
                        className={styles.button}
                        onClick={() => router.push(`?page=${page + 1}`)}
                    >
                        Next
                    </button>
                </div>
            )}
        </>

    );
};

export default Pagination;
