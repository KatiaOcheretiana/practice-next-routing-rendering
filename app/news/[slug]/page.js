import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

export default function DetailsPage({ params }) {
  const newsItem = DUMMY_NEWS.find((item) => item.slug === params.slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Image
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          width={"100"}
          height={"100"}
        />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
