import { db } from "@/app/server/db";

export const GET = async () => {
  try {
    const categories = await db.category.findMany({ skip: 0 });
    return new Response(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
    });
  }
};
