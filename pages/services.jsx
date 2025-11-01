import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

const services = [
  {
    title: "Website Design & Hosting",
    desc: "Beautiful responsive websites for blogs and businesses built with modern frameworks like React, Node.js, and Next.js.",
    price: "$200",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Digital Marketing",
    desc: "Grow your audience through data-driven campaigns on Google and social media.",
    price: "$150",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "SEO Optimization",
    desc: "Rank higher on Google and get more organic visitors through proven SEO strategies.",
    price: "$120",
    img: "https://images.unsplash.com/photo-1504691342899-8a1beaaa8a31",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
	  <Header />
      <section className="text-center py-16 bg-emerald-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Premium Services</h1>
        <p className="text-lg">Let’s help you grow your online presence and brand.</p>
      </section>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-5"
          >
            <Image
              src={service.img}
              alt={service.title}
              width={400}
              height={250}
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <p className="text-xl font-bold text-emerald-700 mb-6">
              {service.price}
            </p>
            <Link
              href="/contact"
              className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700"
            >
              Get Started
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}

