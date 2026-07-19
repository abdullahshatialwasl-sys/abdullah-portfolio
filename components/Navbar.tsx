"use client";

import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const links =
    language === "en"
      ? [
          { name: "About", href: "#about" },
          { name: "Experience", href: "#experience" },
          { name: "Education", href: "#education" },
          { name: "Courses", href: "#courses" },
          { name: "Certificates", href: "#certificates" },
          { name: "Skills", href: "#skills" },
          { name: "Contact", href: "#contact" },
        ]
      : [
          { name: "نبذة عني", href: "#about" },
          { name: "الخبرة", href: "#experience" },
          { name: "التعليم", href: "#education" },
          { name: "الدورات", href: "#courses" },
          { name: "الشهادات", href: "#certificates" },
          { name: "المهارات", href: "#skills" },
          { name: "تواصل", href: "#contact" },
        ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-400">
          Abdullah Jaber
        </h1>

        <div className="flex items-center gap-6">
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

          <button
            onClick={() =>
              setLanguage(language === "en" ? "ar" : "en")
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition"
          >
            {language === "en" ? "العربية" : "English"}
          </button>
        </div>
      </div>
    </header>
  );
}