// components/BlogCard.jsx
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img src={post.image || "/images/default-card.jpg"} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-500 text-sm">{new Date(post.date).toDateString()}</p>
      </div>
    </Link>
  );
}

