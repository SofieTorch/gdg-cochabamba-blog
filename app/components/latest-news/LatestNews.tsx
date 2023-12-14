import { getPosts } from "@/app/lib/data";
import Card from "../card/Card";

const LatestNews = async () => {
  const posts = await getPosts("6579e2a834c08a947757d799");
  return (
    <div className="my-8">
      <h2>Lo último en la comunidad</h2>
      {posts.map((post) => (
        <Card post={post} />
      ))}
    </div>
  );
};

export default LatestNews;
