import PostEditor from "@/components/posts/editor/PostEditor";
import PostComponent from "@/components/posts/PostComponent";
import TrendsSidebar from "@/components/TrendsSIdebar";
import prisma from "@/lib/prisma";
import { postDataInclude } from "@/lib/types";

export default async function Home() {
  const posts = await prisma.post.findMany({
    include: postDataInclude,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />
        {posts.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      </div>
      <TrendsSidebar />
    </main>
  );
}
