"use client";

import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          tag: "About Me",
          title: "Clinical Pharmacist",

          p1: "I am a Clinical Pharmacist with a Bachelor's degree in Clinical Pharmacy and over four years of professional experience in community pharmacy practice. My expertise includes medication dispensing, prescription review, pharmaceutical care, patient counseling, and promoting the safe and effective use of medicines according to evidence-based practice.",

          p2: "In addition to my clinical pharmacy background, I have gained experience in healthcare procurement, supplier coordination, inventory analysis, and supply chain operations. This combination allows me to integrate clinical knowledge with operational excellence, supporting both patient care and healthcare business performance.",

          exp1: "Years Experience in Pharmacies",
          exp2: "Years Experience in Procurement",
          exp3: "Branches Supported",
          exp4: "Patient Safety Focus",
        }
      : {
          tag: "نبذة عني",
          title: "صيدلي سريري",

          p1: "أنا صيدلي حاصل على درجة البكالوريوس في الصيدلة السريرية، وأمتلك أكثر من أربع سنوات من الخبرة العملية في الصيدليات، شملت صرف الأدوية، مراجعة الوصفات الطبية، تقديم الاستشارات الدوائية، وتثقيف المرضى لضمان الاستخدام الآمن والفعال للأدوية وفق أفضل الممارسات المهنية.",

          p2: "إلى جانب خبرتي الصيدلانية، اكتسبت خبرة في مجال المشتريات الصحية شملت إدارة الموردين، تحليل المخزون، متابعة عمليات التوريد، ودعم سلسلة الإمداد. وقد ساهم ذلك في تطوير فهم متكامل للجوانب السريرية والإدارية داخل قطاع الرعاية الصحية.",

          exp1: "سنوات خبرة في الصيدليات",
          exp2: "سنوات خبرة في المشتريات",
          exp3: "فرعاً يتم دعمه",
          exp4: "التركيز على سلامة المرضى",
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