import Link from "next/link";

const resources = [
  {
    title: "Mathematical Modelling of COVID-19 Transmission",
    description:
      "A detailed mathematical study of COVID-19 dynamics using nonlinear differential equations.",
    link: "https://www.researchgate.net/publication/343431308_Analysis_of_COVID-19_and_comorbidity_co-infection_Model_with_Optimal_Control?_sg%5B0%5D=ttyZHoMIkLLrCdniZ0l1CxgQYsr0jeMGCZYmFfiDKf9eAu0h7REZAnsTDxNW0P1kjpLZMumUTo5gJFK8R04ENmLnZMn_p4_DYS__EnkU.lC6TcWn43qsarmkOH7ZRrRGTbpghoIoyBesv2QkNVh9Jsboqv8ZlJ3Gn5x2UkEE2UFE64GJt_uK38ass3N9XhA&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InNpZ251cCIsInBhZ2UiOiJwcm9maWxlIiwicG9zaXRpb24iOiJwYWdlQ29udGVudCJ9fQ",
    pdf: "/pdfs/COVID19_Modeling_Paper.pdf",
  },
  {
    title: "Analysis of a Mathematical Vaccination Model of an Infectious Measles Disease",
    description:
      "This research investigates how parameter variations affect Ebola spread and control strategies.",
    link: "https://www.researchgate.net/publication/349088725_Analysis_of_a_Mathematical_Vaccination_Model_of_an_Infectious_Measles_Disease?_sg%5B0%5D=ttyZHoMIkLLrCdniZ0l1CxgQYsr0jeMGCZYmFfiDKf9eAu0h7REZAnsTDxNW0P1kjpLZMumUTo5gJFK8R04ENmLnZMn_p4_DYS__EnkU.lC6TcWn43qsarmkOH7ZRrRGTbpghoIoyBesv2QkNVh9Jsboqv8ZlJ3Gn5x2UkEE2UFE64GJt_uK38ass3N9XhA&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InNpZ251cCIsInBhZ2UiOiJwcm9maWxlIiwicG9zaXRpb24iOiJwYWdlQ29udGVudCJ9fQ",
    pdf: "/pdfs/analysis_of_a_mathematical_vaccination_model_of_an_infectious_measles_disease.pdf",
  },
  {
    title: "Stability Analysis of Disease-Free Equilibrium",
    description:
      "A theoretical work analyzing disease-free equilibrium states using Lyapunov functions.",
    link: "https://www.researchgate.net/publication/1122334455_Stability_Analysis_of_Disease_Free_Equilibrium",
    pdf: "/pdfs/Stability_Analysis.pdf",
  },
  {
    title: "A co-infection model for HPV and syphilis with optimal control and cost-effectiveness analysis",
    description:
      "A co-infection model for human papillomavirus (HPV) and syphilis with cost-effectiveness optimal control analysis is developed and presented. The full co-infection model is shown to undergo the phenomenon of backward bifurcation when a certain condition is satisfied.",
    link: "https://www.researchgate.net/publication/350994161_A_co-infection_model_for_HPV_and_syphilis_with_optimal_control_and_cost-effectiveness_analysis?_sg%5B0%5D=DbqyYIaMeZAYShal24hF6-YbRyl4uiLbocxAK4KUtn19vz2QK7BmQ2pw4jkTtfLRc5kRPUzOQTJiukYbvhuEcwfrApPBFbX1UGuOZklt.4pJ1c5o6Xi6OTjOHby05BCaLgtepxV9HmY7p-zaubdTvVMPMgsqRE-FN0FORyRTfMa9B6gSj8hgCA_6KgKo2jA&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6InNpZ251cCIsInBhZ2UiOiJwcm9maWxlIiwicG9zaXRpb24iOiJwYWdlQ29udGVudCJ9fQ",
    pdf: "/pdfs/IJB_Omameetal2021.pdf",
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
