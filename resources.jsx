import Link from "next/link";

const resources = [
  {
    title: "Mathematical Modelling of COVID-19 Transmission",
    description:
      "A detailed mathematical study of COVID-19 dynamics using nonlinear differential equations.",
    link: "https://www.researchgate.net/publication/123456789_Mathematical_Modelling_of_COVID-19",
    pdf: "/pdfs/COVID19_Modeling_Paper.pdf",
  },
  {
    title: "Epidemiological Modeling of Ebola Virus Transmission",
    description:
      "This research investigates how parameter variations affect Ebola spread and control strategies.",
    link: "https://www.researchgate.net/publication/987654321_Ebola_Virus_Modeling",
    pdf: "/pdfs/Ebola_Virus_Research.pdf",
  },
  {
    title: "Stability Analysis of Disease-Free Equilibrium",
    description:
      "A theoretical work analyzing disease-free equilibrium states using Lyapunov functions.",
    link: "https://www.researchgate.net/publication/1122334455_Stability_Analysis_of_Disease_Free_Equilibrium",
    pdf: "/pdfs/Stability_Analysis.pdf",
  },
    link: "/",                                  pdf: "/pdfs/TEST 4.pdf",
  },
    link: "/",
    pdf: "/pdfs/WAEC 2025 QUESTIONS.pdf",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="text-center py-16 bg-emerald-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Premium Resources</h1>
        <p className="text-lg">Explore my published works and research materials.</p>
      </section>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {resources.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-xl transition p-5"
          >
            <h2 className="text-2xl font-semibold text-emerald-600 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <div className="flex flex-col gap-2">
              <Link
                href={item.link}
                target="_blank"
                className="bg-emerald-600 text-white px-4 py-2 rounded text-center hover:bg-emerald-700"
              >
                View on ResearchGate
              </Link>
              <Link
                href={item.pdf}
                target="_blank"
                className="border border-emerald-600 text-emerald-600 px-4 py-2 rounded text-center hover:bg-emerald-50"
              >
                Download PDF
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
