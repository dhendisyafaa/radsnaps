import { Loader2 } from "lucide-react";
import { Suspense } from "react";
import TrendingTopics from "./TrendingTopics";
import WhoToFollow from "./WhoToFollow";

export default function TrendsSidebar() {
  // const pathname = useRouter();
  // console.log("🚀 ~ TrendsSidebar ~ pathname:", pathname);
  // const withTrendsSidebar = ["/", "/explore"];
  return (
    <div className="sticky top-[5.25rem] hidden h-fit w-72 flex-none space-y-5 md:block lg:w-80">
      <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
        <WhoToFollow />
        <TrendingTopics />
      </Suspense>
    </div>
  );
}
