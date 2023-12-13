import { Category, Post, User } from "@prisma/client";

const BASE_URL = "http://localhost:3000/api";

export interface ExtendedPost extends Post {
  author: User;
}

export const getSinglePost = async (
  slug: string
): Promise<ExtendedPost | null> => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch post");
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    throw new Error("Failed to fetch post");
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const categories = await response.json();
    return categories;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};

export const createPost = async (post: any): Promise<Post> => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    const createdPost = await response.json();
    return createdPost;
  } catch (error) {
    throw new Error("Failed to create post");
  }
};
