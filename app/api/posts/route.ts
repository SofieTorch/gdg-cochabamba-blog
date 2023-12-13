import { getServerAuthSession } from "@/app/server/auth";
import { db } from "@/app/server/db";

export const POST = async (req: Request): Promise<Response> => {
  const session = await getServerAuthSession();

  if (!session || !session.user) {
    return new Response(JSON.stringify({ error: "Not authenticated" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const post = await db.post.create({
      data: { ...body, authorEmail: session.user.email },
    });

    return new Response(JSON.stringify(post));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
    });
  }
};
