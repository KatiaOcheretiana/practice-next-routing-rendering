import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function DetailsPage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItemSlug}/image`}>
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={"100"}
            height={"100"}
          />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
