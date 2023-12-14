import { getPosts } from "@/app/lib/data";
import Card from "../card/Card";

const LatestNews = async () => {
  const posts = await getPosts("6579e2a834c08a947757d799");
  return (
    <div className="my-8">
      <h2 className="mb-4 text-3xl font-semibold">Lo último en la comunidad</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto justify-center w-full">
        {posts.slice(0, 3).map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
