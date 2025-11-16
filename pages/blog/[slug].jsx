"use client";

import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import VideoEmbed from "../../components/VideoEmbed";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import CommentSection from "../../components/CommentSection";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content"));
  const paths = files
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      params: { slug: filename.replace(".md", "") },
    }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = fs.readFileSync(
    path.join("content", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdown);
  return { props: { frontmatter, slug, content } };
}

export default function BlogPost({ frontmatter, content, slug }) {
  useEffect(() => {
    try {
      if (window.adsbygoogle) window.adsbygoogle.push({});
    } catch (error) {}
  }, []);

  return (
    <article className="prose prose-lg md:prose-xl mx-auto py-12 px-4">

      <h1 className="text-4xl font-bold mb-4 text-emerald-700">
        {frontmatter.title}
      </h1>
      <p className="text-gray-500 mb-8">
        {frontmatter.date} • {frontmatter.author}
      </p>

      {frontmatter.image && (
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="rounded-xl shadow-lg mb-8 w-full object-cover"
        />
      )}
<ReactMarkdown
  rehypePlugins={[rehypeRaw]}
  remarkPlugins={[remarkGfm]}
  skipHtml={false}
  components={{
    a({ href, children }) {
      if (href.includes("youtube.com/embed")) {
        return <VideoEmbed url={href} />;
      }
      return <a href={href}>{children}</a>;
    },
  }}
>
  {content}
</ReactMarkdown>


      <CommentSection postId={slug} />
    </article>
  );
}
