import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6 text-emerald-600">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have questions or feedback? Reach out below.
        </p>

        <form className="grid gap-4 text-left max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg w-full"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border rounded-lg w-full h-32"
          ></textarea>
          <button className="bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition">
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}

