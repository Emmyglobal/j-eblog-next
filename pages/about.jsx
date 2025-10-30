import Layout from "@/components/Layout";

export default function About() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6 text-emerald-600">About Orbittech</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Orbittech Blog is a digital platform that shares insightful articles
          about Technology, Education, Politics, Religion, and Relationships.
          Created by <strong>Nwafor Ugochukwu</strong>, the platform aims to
          inspire creativity and knowledge in readers worldwide.
        </p>
      </section>
    </Layout>
  );
}

