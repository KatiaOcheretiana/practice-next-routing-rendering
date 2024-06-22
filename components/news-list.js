import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsList({ listData }) {
  return (
    <ul className="news-list">
      {listData.map((item) => (
        <li key={item.id}>
          <Link href={`/news/${item.slug}`}>
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
  );
}
