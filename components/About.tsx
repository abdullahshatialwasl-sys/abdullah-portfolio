"use client";

import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          tag: "About Me",
          title: "Clinical Pharmacist & Procurement Specialist",
          p1: "I am a Clinical Pharmacist and Procurement Specialist with experience in pharmacy operations, healthcare, purchasing, supplier management, inventory control, and procurement activities.",
          p2: "I focus on improving procurement processes, analyzing inventory, managing supplier relationships, and supporting business growth through efficient purchasing strategies and operational excellence.",
          exp1: "Years Experience in Pharmacies",
          exp2: "Years Experience in Procurement",
          exp3: "Branches Supported",
          exp4: "Commitment & Professionalism",
        }
      : {
          tag: "نبذة عني",
          title: "صيدلي سريري وأخصائي مشتريات",
          p1: "أنا صيدلي سريري وأخصائي مشتريات، أمتلك خبرة في الصيدليات وإدارة المشتريات والتعامل مع الموردين وتحليل المخزون وتحسين العمليات التشغيلية.",
          p2: "أركز على تطوير عمليات الشراء، وتحليل المخزون، وبناء علاقات فعالة مع الموردين، ودعم نمو الأعمال من خلال استراتيجيات شراء احترافية.",
          exp1: "سنوات خبرة في الصيدليات",
          exp2: "سنوات خبرة في المشتريات",
          exp3: "فرعاً يتم دعمه",
          exp4: "التزام واحترافية",
        };

  return (
    <section
      id="about"
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`max-w-7xl mx-auto px-8 py-24 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-blue-400 text-lg font-semibold mb-3 uppercase tracking-widest">
            {content.tag}
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {content.title}
          </h2>

          <p className="text-slate-400 text-lg leading-8 mb-6">
            {content.p1}
          </p>

          <p className="text-slate-400 text-lg leading-8">
            {content.p2}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <h3 className="text-4xl font-bold text-blue-400">4+</h3>
            <p className="text-slate-400 mt-2">{content.exp1}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <h3 className="text-4xl font-bold text-blue-400">2+</h3>
            <p className="text-slate-400 mt-2">{content.exp2}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <h3 className="text-4xl font-bold text-blue-400">15+</h3>
            <p className="text-slate-400 mt-2">{content.exp3}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <h3 className="text-4xl font-bold text-blue-400">100%</h3>
            <p className="text-slate-400 mt-2">{content.exp4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}