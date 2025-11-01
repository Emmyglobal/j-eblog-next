// pages/index.jsx
import Layout from "../components/Layout";
import Head from "next/head";
import Link from "next/link";
import { getSortedPosts } from "../lib/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Orbittech Blog - Premium Content & Education</title>
        <meta name="description" content="Orbittech Blog offers premium content and education on religion, politics, relationships, and more." />
      </Head>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-20"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4 py-20 text-white">
          <div className="max-w-2xl">
            <h1 className="heading-font text-4xl md:text-6xl font-bold mb-6">
              Elevate Your Mind With Premium Content
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Join thousands of learners exploring religion, politics, relationships, and education through our curated content and expert-led classes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#blog" className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition flex items-center">
                <i className="fas fa-book-open mr-2"></i> Read Blog
              </a>
              <a href="#services" className="px-6 py-3 rounded-full bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-medium transition flex items-center">
                <i className="fas fa-chalkboard-teacher mr-2"></i> Join a Class
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Religion */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <i className="fas fa-hands-praying text-emerald-600 text-xl"></i>
                </div>
                <h3 className="heading-font text-xl font-bold mb-2">Religion</h3>
                <p className="text-gray-600 mb-4">Thought-provoking analysis on faith, spirituality, and religious traditions.</p>
                <a href="/blog/religion" className="text-emerald-600 font-medium flex items-center">Read Articles <i className="fas fa-arrow-right ml-2"></i></a>
              </div>
            </div>

            {/* Politics */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562601579-599dec564e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <i className="fas fa-landmark text-emerald-600 text-xl"></i>
                </div>
                <h3 className="heading-font text-xl font-bold mb-2">Politics</h3>
                <p className="text-gray-600 mb-4">Insightful commentary on governance, policy, and current affairs.</p>
                <a href="/blog/politics" className="text-emerald-600 font-medium flex items-center">Read Articles <i className="fas fa-arrow-right ml-2"></i></a>
              </div>
            </div>

            {/* Relationships */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')" }}></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <i className="fas fa-heart text-emerald-600 text-xl"></i>
                </div>
                <h3 className="heading-font text-xl font-bold mb-2">Relationships</h3>
                <p className="text-gray-600 mb-4">Expert advice on love, family dynamics, and interpersonal connections.</p>
                <a href="/blog/relationships" className="text-emerald-600 font-medium flex items-center">Read Articles <i className="fas fa-arrow-right ml-2"></i></a>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <i className="fas fa-graduation-cap text-emerald-600 text-xl"></i>
                </div>
                <h3 className="heading-font text-xl font-bold mb-2">Education</h3>
                <p className="text-gray-600 mb-4">Cutting-edge perspectives on learning, pedagogy, and academic excellence.</p>
                <a href="/blog/education" className="text-emerald-600 font-medium flex items-center">Read Articles <i className="fas fa-arrow-right ml-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-medium mb-4">Our Services</span>
            <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">Premium Educational Offerings</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Beyond our blog content, we offer premium services to help you grow personally and professionally.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Online Classes */}
            <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')" }}>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">Most Popular</div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <i className="fas fa-video text-emerald-600"></i>
                  </div>
                  <h3 className="heading-font text-xl font-bold">Online Classes</h3>
                </div>
                <p className="text-gray-600 mb-4">Interactive live and recorded sessions with industry experts across our core subject areas.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">$49</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-GVXHThjhRIHpzJRSfqU0tHpMxz8zY6By3C1847j5-Hld-Q/viewform" className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition flex items-center">
                    Enroll Now <i className="fas fa-arrow-right ml-2"></i>
                  </a>
	  <a href="https://forms.gle/6C5MUctKUn6eBpz49" class="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition flex items-center">
                                confirm payment <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                </div>
              </div>
            </div>

            {/* Consulting */}
            <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')" }}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <i className="fas fa-handshake text-emerald-600"></i>
                  </div>
                  <h3 className="heading-font text-xl font-bold">1-on-1 Consulting</h3>
                </div>
                <p className="text-gray-600 mb-4">Personalized guidance from our specialists to help you navigate complex topics and decisions.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">$99</span>
                    <span className="text-gray-500">/session</span>
                  </div>
                  <a href="#" className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition flex items-center">
                    Book Now <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80')" }}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <i className="fas fa-book text-emerald-600"></i>
                  </div>
                  <Link href="/resources"><h3 className="heading-font text-xl font-bold">Premium Resources</h3></Link>
                </div>
                <p className="text-gray-600 mb-4">Exclusive e-books, worksheets, and research materials to supplement your learning journey.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">$29</span>
                    <span className="text-gray-500">/resource</span>
                  </div>
                  <a href="/resources" className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition flex items-center">
                    Browse <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/services" className="inline-block px-6 py-3 rounded-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium transition">
              View All Services <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Orbittech Team" className="rounded-xl shadow-lg w-full" />
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-medium mb-4">Our Story</span>
              <h2 className="heading-font text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">Founded in 2025, Orbittech Blog began as a passion project among educators, thought leaders, and content creators who believed in the power of knowledge to transform lives.</p>
              <p className="text-gray-600 mb-8">Today, we've grown into a premium educational platform serving thousands of subscribers worldwide, with a commitment to excellence, integrity, and intellectual growth.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-bullseye text-emerald-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Mission</h4>
                    <p className="text-gray-600">To empower individuals through insightful content and transformative learning experiences.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-eye text-emerald-600"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Vision</h4>
                    <p className="text-gray-600">A world where knowledge bridges divides and fosters meaningful connections.</p>
                  </div>
                </div>
              </div>

              <a href="#" className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition inline-flex items-center">
                Meet Our Team <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
            <p className="max-w-2xl mx-auto text-emerald-100">Don't just take our word for it - hear from our satisfied members.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card rounded-xl p-6 bg-white bg-opacity-10">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/16.jpg" alt="Chinedu O." className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Chinedu Okeke</h4>
                  <p className="text-emerald-100 text-sm">Premium Member</p>
                </div>
              </div>
              <p className="mb-4">"Orbittech’s resources helped me excel in my studies and connect with my roots."</p>
              <div className="flex text-yellow-300">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
            </div>

            <div className="testimonial-card rounded-xl p-6 bg-white bg-opacity-10">
              <div className="flex items-center mb-4">
                <div>
                  <h4 className="font-bold">Aisha Bello</h4>
                  <p className="text-emerald-100 text-sm">Consulting Client</p>
                </div>
              </div>
              <p className="mb-4">"I feel more confident communicating with my community."</p>
              <div className="flex text-yellow-300">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            <div className="testimonial-card rounded-xl p-6 bg-white bg-opacity-10">
              <div className="flex items-center mb-4">
                <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Tunde A." className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Tunde Adeyemi</h4>
                  <p className="text-emerald-100 text-sm">Frontend Developer</p>
                </div>
              </div>
              <p className="mb-4">"The Frontend course was eye-opening to me. The instructors truly understand our heritage and exposed me to HTML, CSS and JS."</p>
              <div className="flex text-yellow-300">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION (uses posts from content/posts via getStaticProps) */}
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mt-16">
            {/* AdSense unit preserved */}
            <ins className="adsbygoogle" style={{display:"block"}} data-ad-client="ca-pub-8061135224509487" data-ad-slot="3364563697" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});` }} />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-medium mb-4">Latest Articles</span>
              <h2 className="heading-font text-3xl md:text-4xl font-bold mb-2">From Our Blog</h2>
              <p className="text-gray-600">Weekly insights on topics that matter</p>
            </div>
            <Link href="/blog" className="mt-4 md:mt-0 px-6 py-3 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-medium transition">View All Articles <i className="fas fa-arrow-right ml-2"></i></Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example: large curated cards from your index.html */}
            <article className="bg-emerald-50 py-10 px-6">
              <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/images/nn.jpg" alt="Nigeria Debt Panel" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-emerald-700 mb-2">Nigeria Now Spends Half Its Revenue on Debt—Presidential Panel</h2>
                  <p className="text-gray-700 mb-4">A recent report by the Presidential Fiscal Policy and Tax Reforms Committee reveals that over 50% of Nigeria’s government revenue is now directed towards debt servicing...</p>
                  <a href="/blog/politics/nigeria-revenue-debt-2025.html" className="inline-block text-emerald-600 font-semibold hover:underline">Read More →</a>
                </div>
              </div>
            </article>

            <article className="max-w-5xl mx-auto px-4 py-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/images/atiku.jpg" alt="Atiku and Obi" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Atiku vs Peter Obi: Top Analyst Predicts Who Will Secure ADC’s Presidential Ticket Ahead of 2027</h2>
                  <p className="text-gray-600 mb-4">As Nigeria’s 2027 presidential election draws closer, political analysts are watching closely ...</p>
                  <a href="/blog/politics/atiku-vs-obi-2027.html" className="inline-block px-6 py-2 bg-emerald-600 text-white font-medium rounded hover:bg-emerald-700 transition">Read More</a>
                </div>
              </div>
            </article>

            {/* More cards below... (you can add more posts via content/posts .md) */}
            {posts && posts.slice(0, 6).map((p) => (
              <article key={p.slug} className="bg-white rounded-lg shadow hover:shadow-md transition-all overflow-hidden">
                <img src={p.image || "/images/default-card.jpg"} alt={p.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-emerald-700">{p.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{new Date(p.date).toDateString()} • {p.category}</p>
                  <p className="mt-2 text-gray-700 text-sm line-clamp-3">{p.description || ""}</p>
                  <a href={`/posts/${p.slug}`} className="inline-block mt-4 text-emerald-600 font-medium hover:underline">Read More →</a>
                </div>
              </article>
            ))}
          </div>

          {/* persistent ad units from original */}
          <div className="mt-16">
            <ins className="adsbygoogle" style={{display:"block"}} data-ad-client="ca-pub-8061135224509487" data-ad-slot="5161174753" data-ad-format="auto" data-full-width-responsive="true"></ins>
            <script dangerouslySetInnerHTML={{ __html: `(adsbygoogle = window.adsbygoogle || []).push({});` }} />
          </div>
        </div>
      </section>

      {/* NEWS & EXTRA CARDS (some highlighted sections from your HTML) */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-700 mb-8">Latest News</h2>

          <div className="grid gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/images/kanu.jpg" alt="Nnamdi Kanu" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-emerald-800 mb-2">Reject Nnamdi Kanu’s No-Case Submission, FG Tells Court</h3>
                <p className="text-gray-700 mb-4">The Federal Government urged the court to dismiss the no-case submission filed by IPOB leader Nnamdi Kanu...</p>
                <a href="/blog/politics/reject-kanu-no-case.html" className="text-emerald-700 font-medium hover:underline inline-flex items-center">Read More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-font text-3xl md:text-4xl font-bold mb-6">Stay Updated With Our Latest Content</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter and get weekly insights, exclusive offers, and early access to new courses.</p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input type="email" placeholder="Your email address" className="newsletter-input flex-grow px-4 py-3 rounded-full bg-gray-800 border border-gray-700 focus:border-emerald-500 text-white placeholder-gray-400" />
              <button type="submit" className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition whitespace-nowrap">Subscribe Now</button>
            </form>

            <p className="text-gray-400 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 font-medium mb-4">Get In Touch</span>
            <h2 className="heading-font text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Have questions or want to learn more? Reach out to our team.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gray-50 rounded-xl p-8 shadow-inner">
                <h3 className="heading-font text-xl font-bold mb-6">Send Us a Message</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                      <input id="name" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input id="subject" type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-emerald-500 focus:outline-none"></textarea>
                  </div>
                  <button type="submit" className="w-full px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium transition">Send Message</button>
                </form>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="h-full bg-gray-50 rounded-xl p-8 shadow-inner">
                <h3 className="heading-font text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-map-marker-alt text-emerald-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Our Headquarters</h4>
                      <p className="text-gray-600">123 Knowledge Avenue, Lagos, Nigeria</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-envelope text-emerald-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email Us</h4>
                      <p className="text-gray-600">hello@orbittechblog.com</p>
                      <p className="text-gray-600">support@orbittechblog.com</p>
                      <p className="text-gray-600">nwaforugochukwu21@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-phone-alt text-emerald-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-gray-600">+234 814 637 9353 (Office)</p>
                      <p className="text-gray-600">+234 902 324 1785 (Support)</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-4 mt-1">
                      <i className="fas fa-clock text-emerald-600"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/nwafor-ugochukwu-54626b142/" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://x.com/TechHub_OC" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://x.com/TechHub_OC" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://wa.me/+2347031992338" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="h-96 w-full bg-gray-200">
        <div className="h-full w-full flex items-center justify-center bg-gray-300">
          <div className="text-center">
            <i className="fas fa-map-marked-alt text-4xl text-gray-500 mb-2"></i>
            <p className="text-gray-600">Interactive Map Would Appear Here</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <a href="/" className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center mr-2">
                  <i className="fas fa-atom text-white text-xl"></i>
                </div>
                <span className="heading-font text-2xl font-bold text-white">Orbittech</span>
              </a>
              <p className="text-gray-400 mb-6">Premium content and educational services to elevate your mind and transform your life.</p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/nwafor-ugochukwu-54626b142/" className="text-gray-400 hover:text-white transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://x.com/TechHub_OC" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter"></i></a>
                <a href="https://x.com/TechHub_OC" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div>
              <h3 className="heading-font text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <Link href="/services"><h3 className="heading-font text-lg font-bold mb-6">Services</h3></Link>
              <ul className="space-y-3 text-gray-400">
                <li>Online Classes</li>
                <li>Consulting</li>
                <li>Premium Resources</li>
              </ul>
            </div>

            <div>
              <h3 className="heading-font text-lg font-bold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for weekly updates.</p>
              <form className="flex gap-2">
                <input type="email" placeholder="Your email" className="p-3 rounded-lg w-full text-gray-900" />
                <button className="px-4 py-2 bg-emerald-600 rounded text-white">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
            © {new Date().getFullYear()} Orbittech Blog. All rights reserved.
          </div>
        </div>
      </footer>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();
  return { props: { posts } };
}
