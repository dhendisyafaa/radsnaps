import SearchField from "@/components/SearchField";
import TrendingTopics from "@/components/TrendingTopics";
import React from "react";

export default function ExplorePage() {
  return (
    <div className="w-full">
      <SearchField />
      <TrendingTopics />
    </div>
  );
}
