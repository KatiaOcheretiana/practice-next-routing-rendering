import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

export default function NewsPage() {
  return (
    <>
      <h2>News Page</h2>
      <NewsList listData={DUMMY_NEWS} />
    </>
  );
}
