import React from "react";
import Copy from "./components/copy";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <Link href="/">返回首页</Link>

      <h1>这是copy路由页面</h1>
      <Copy />
    </main>
  );
}