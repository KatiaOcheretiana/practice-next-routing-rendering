import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default function DefaultPage() {
  const latestNews = getLatestNews();

  return (
    <>
      <h2>Latest Page</h2>
      <NewsList listData={latestNews} />
    </>
  );
}
