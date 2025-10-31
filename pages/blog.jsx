import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-emerald-600 mb-8 text-center">
          All Blog Articles
        </h1>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
            >
              <img
                src={post.frontMatter.image}
                alt={post.frontMatter.title}
                className="rounded-md mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold mb-2">
                {post.frontMatter.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                {post.frontMatter.date}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-emerald-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("content/posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content/posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.replace(".md", ""),
    };
  });

  return {
    props: {
      posts,
    },
  };
}
