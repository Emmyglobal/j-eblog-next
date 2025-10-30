// components/BlogList.jsx
import BlogCard from "./BlogCard";

export default function BlogList({ posts }) {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-medium mb-4">Latest Articles</span>
            <h2 className="heading-font text-3xl md:text-4xl font-bold mb-2">From Our Blog</h2>
            <p className="text-gray-600">Weekly insights on topics that matter</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

