export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-8 mt-16">
      <p className="text-sm">
        © {new Date().getFullYear()} Orbittech Blog — Designed & Developed by{" "}
        <span className="text-emerald-400 font-semibold">Nwafor Ugochukwu</span>
      </p>
    </footer>
  );
}

