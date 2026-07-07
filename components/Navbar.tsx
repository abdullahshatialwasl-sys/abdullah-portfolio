export default function Navbar() {
  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-blue-400">
          Abdullah Jaber
        </h1>

        <nav className="hidden lg:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-blue-400 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}