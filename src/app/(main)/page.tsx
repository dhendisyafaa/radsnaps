import PostEditor from "@/components/posts/editor/PostEditor";
import PostComponent from "@/components/posts/PostComponent";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/types";

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: postDataInclude,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="w-full min-w-0">
      <div className="w-full min-w-0 space-y-5">
        <div className="hidden sm:block">
          <PostEditor />
        </div>
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
