"use client";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import CommentSection from "../../components/CommentSection";

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("content"));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return { props: { frontmatter, slug, content } };
}

export default function BlogPost({ frontmatter, content, slug }) {
  return (
    <article className="prose prose-lg md:prose-xl mx-auto py-12 px-4 font-[Inter]">
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

      {/* Markdown content */}
      <ReactMarkdown>{content}</ReactMarkdown>

      {/* ✅ Google Ad Block */}
      <div className="mt-16 text-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8061135224509487"
          data-ad-slot="5161174753"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
          }}
        />
      </div>

      {/* 💬 Comments Section */}
      <CommentSection postId={slug} />
    </article>
  );
}

