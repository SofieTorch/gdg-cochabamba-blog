export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export type Category = {
  id: string;
  title: string;
  slug: string;
  color: string;
};

export type Comment = {
  id: string;
  createdAt: Date;
  desc: string;
  userEmail: string;
  user: User;
  postSlug: string;
};

export type Post = {
  id: string;
  createdAt: Date;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  cat: Category;
  userEmail?: string;
  user?: User;
  comments?: Comment[];
};
