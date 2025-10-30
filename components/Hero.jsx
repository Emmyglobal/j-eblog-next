// components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto px-4 py-20 text-white">
        <div className="max-w-2xl">
          <h1 className="heading-font text-4xl md:text-6xl font-bold mb-6">Elevate Your Mind With Premium Content</h1>
          <p className="text-lg md:text-xl mb-8">Join thousands of learners exploring religion, politics, relationships, and education through our curated content and expert-led classes.</p>
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
  );
}
