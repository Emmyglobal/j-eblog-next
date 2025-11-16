import React, { useEffect } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import VideoEmbed from "../../components/VideoEmbed";
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
  const markdownWithMeta = fs.readFileSync(
    path.join("content", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return { props: { frontmatter, slug, content } };
}

export default function BlogPost({ frontmatter, content, slug }) {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <article className="prose prose-lg md:prose-xl mx-auto py-12 px-4 prose-img:rounded-xl prose-h2:text-emerald-700 prose-strong:text-emerald-700">

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
    iframe({ node, ...props }) {
      return (
        <iframe
          {...props}
          style={{ width: "100%", height: "400px", marginBottom: "2rem" }}
        />
      );
    },
    a({ href, children }) {
      return <a href={href} className="text-blue-600 underline">{children}</a>;
    },
  }}
>
  {content}
</ReactMarkdown>



      <div className="mt-16 text-center">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8061135224509487"
          data-ad-slot="5161174753"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      <CommentSection postId={slug} />
    </article>
  );
}
