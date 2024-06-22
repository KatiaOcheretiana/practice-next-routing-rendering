"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ href, title }) {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) && "active"}>
      {title}
    </Link>
  );
}
