"use client";

import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";

export default function Contact() {
  const { language } = useLanguage();

  return (
    <section
      id="contact"
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`max-w-7xl mx-auto px-8 py-24 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-blue-400 font-semibold uppercase tracking-widest mb-3">
            {language === "en" ? "Contact" : "تواصل"}
          </p>

          <h2 className="text-4xl font-bold mb-6">
            {language === "en" ? "Get In Touch" : "تواصل معي"}
          </h2>

          <p className="text-slate-400 text-lg leading-8 mb-10">
            {language === "en"
              ? "I am open to professional opportunities, procurement collaborations, and healthcare-related projects."
              : "أرحب بالفرص المهنية، والتعاون في مجال المشتريات، والمشاريع المتعلقة بالرعاية الصحية."}
          </p>
        </div>

        <div
          className={`bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 ${
            language === "ar" ? "text-right" : "text-left"
          }`}
        >
          <div>
            <h3 className="text-blue-400 font-semibold mb-2">
              {language === "en" ? "Name" : "الاسم"}
            </h3>

            <p className="text-slate-300">
              {language === "en" ? profile.name : "عبدالله جابر"}
            </p>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-2">
              Email
            </h3>

            <a
              href={`mailto:${profile.email}`}
              className="text-slate-300 hover:text-blue-400 transition"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-2">
              {language === "en" ? "Phone" : "الجوال"}
            </h3>

            <a
              href={`tel:${profile.phone}`}
              className="text-slate-300 hover:text-blue-400 transition"
            >
              {profile.phone}
            </a>
          </div>

          <div>
            <h3 className="text-blue-400 font-semibold mb-2">
              {language === "en" ? "Location" : "الموقع"}
            </h3>

            <p className="text-slate-300">
              {language === "en"
                ? profile.location
                : "الدمام، المملكة العربية السعودية"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}