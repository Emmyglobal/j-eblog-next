// pages/posts/[slug].jsx
import Layout from "../../components/Layout";
import { getAllPostSlugs, getPostBySlug } from "../../lib/posts";
import Head from "next/head";

export default function PostPage({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title} | Orbittech Blog</title>
        <meta name="description" content={post.description || ""} />
      </Head>

      <article className="container mx-auto px-4 py-12 prose prose-lg">
        <h1 className="heading-font text-4xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-500 mb-4">{new Date(post.date).toDateString()} • {post.category}</p>
        {post.image && <img src={post.image} alt={post.title} className="rounded-lg mb-6" />}
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}
