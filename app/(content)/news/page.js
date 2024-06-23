import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import React from "react";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h2>News Page</h2>
      <NewsList listData={news} />
    </>
  );
}

// CLIENT SIDE

// "use client";

// import NewsList from "@/components/news-list";
// import React, { useEffect, useState } from "react";

// export default function NewsPage() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     async function fetchNews() {
//       setIsLoading(true);
//       const response = await fetch("http://localhost:8080/news");

//       if (!response.ok) {
//         setError("Failed to fetch news.");
//         setIsLoading(false);
//       }

//       const news = await response.json();
//       setIsLoading(false);
//       setNews(news);
//     }

//     fetchNews();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   let newsContent;

//   if (news) {
//     newsContent = <NewsList listData={news} />;
//   }

//   return (
//     <>
//       <h2>News Page</h2>
//       {newsContent}
//     </>
//   );
// }
