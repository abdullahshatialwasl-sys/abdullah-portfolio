"use client";

import { useLanguage } from "./LanguageProvider";

export default function Education() {
  const { language } = useLanguage();

  const education =
    language === "en"
      ? [
          {
            title: "Bachelor of Clinical Pharmacy",
            place: "Bachelor Degree",
            description:
              "Clinical pharmacy education including pharmacotherapy, patient care, medication management, and healthcare practice.",
          },
          {
            title: "Diploma in Community Nutrition",
            place: "Professional Diploma",
            description:
              "Knowledge of nutrition principles, dietary guidance, and health improvement strategies.",
          },
          {
            title: "Diploma in Pharmaceutical Marketing",
            place: "Professional Diploma",
            description:
              "Understanding pharmaceutical markets, product promotion, and healthcare business concepts.",
          },
          {
            title: "Microsoft Office Diploma",
            place: "Professional Training",
            description:
              "Advanced skills in Excel, Word, PowerPoint, and business reporting.",
          },
          {
            title: "English Diploma",
            place: "Professional Training",
            description:
              "Professional English communication and workplace skills.",
          },
        ]
      : [
          {
            title: "بكالوريوس الصيدلة السريرية",
            place: "درجة البكالوريوس",
            description:
              "دراسة الصيدلة السريرية بما يشمل العلاج الدوائي ورعاية المرضى وإدارة الأدوية والممارسات الصحية.",
          },
          {
            title: "دبلوم التغذية المجتمعية",
            place: "دبلوم مهني",
            description:
              "دراسة مبادئ التغذية والإرشاد الغذائي وتحسين الصحة العامة.",
          },
          {
            title: "دبلوم التسويق الدوائي",
            place: "دبلوم مهني",
            description:
              "فهم الأسواق الدوائية وتسويق المنتجات والمفاهيم التجارية في القطاع الصحي.",
          },
          {
            title: "دبلوم مايكروسوفت أوفيس",
            place: "تدريب مهني",
            description:
              "مهارات متقدمة في مايكروسوفت إكسل، ومايكروسوفت وورد، ومايكروسوفت باوربوينت، وإعداد التقارير الاحترافية.",
          },
          {
            title: "دبلوم اللغة الإنجليزية",
            place: "تدريب مهني",
            description:
              "مهارات اللغة الإنجليزية للتواصل والعمل باحترافية.",
          },
        ];

  return (
    <section
      id="education"
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`max-w-7xl mx-auto px-8 py-24 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="text-center mb-12">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          {language === "en" ? "Education" : "التعليم"}
        </p>

        <h2 className="text-4xl font-bold mt-2">
          {language === "en"
            ? "Education & Training"
            : "التعليم والتدريب"}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">
              {item.title}
            </h3>

            <p className="text-blue-400 mb-3">
              {item.place}
            </p>

            <p className="text-slate-400 leading-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}