import { useSession } from "next-auth/react";
import { Category, Post } from "./definitions";

export const status = "authenticated";

export const categories: Category[] = [
  {
    id: "1",
    title: "Next JS",
    slug: "next",
    color: "#dddddd",
  },
  {
    id: "2",
    title: "React",
    slug: "react",
    color: "#61dafb",
  },
  {
    id: "3",
    title: "Vue",
    slug: "vue",
    color: "#41b883",
  },
  {
    id: "4",
    title: "Angular",
    slug: "angular",
    color: "#dd0031",
  },
  {
    id: "5",
    title: "Svelte",
    slug: "svelte",
    color: "#ff3e00",
  },
  {
    id: "6",
    title: "Ember",
    slug: "ember",
    color: "#f23819",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    createdAt: new Date("2021-01-01"),
    slug: "next-js",
    title: "Next JS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
    img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702275296/swz5vbykpoiilhgmwtus.webp",
    views: 100,
    catSlug: "next",
    cat: {
      id: "1",
      title: "Next JS",
      slug: "next",
      color: "#dddddd",
    },
  },
  {
    id: "2",
    createdAt: new Date("2021-01-01"),
    slug: "next-js",
    title: "Next JS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
    img: "https://res.cloudinary.com/dqcoo1wnq/image/upload/v1702275296/swz5vbykpoiilhgmwtus.webp",
    views: 100,
    catSlug: "next",
    cat: {
      id: "1",
      title: "Next JS",
      slug: "next",
      color: "#dddddd",
    },
  },
];
