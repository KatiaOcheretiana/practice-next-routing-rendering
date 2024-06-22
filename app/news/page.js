import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsPage() {
  return (
    <>
      <h2>News Page</h2>
      <ul className="news-list">
        {DUMMY_NEWS.map((item) => (
          <li key={item.id}>
            <Link href={`news/${item.slug}`}>
              <Image
                src={`/images/news/${item.image}`}
                alt={item.title}
                width={"200"}
                height={"200"}
              />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
