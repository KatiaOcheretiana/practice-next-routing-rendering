import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

export default async function DefaultPage() {
  const latestNews = await getLatestNews();

  return (
    <>
      <h2>Latest Page</h2>
      <NewsList listData={latestNews} />
    </>
  );
}
