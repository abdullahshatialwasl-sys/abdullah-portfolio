"use client";

import { useLanguage } from "./LanguageProvider";

export default function Education() {
  const { language } = useLanguage();

  const education =
    language === "en"
      ? [
          {
            title: "Bachelor of Clinical Pharmacy",
            place: "Hodeidah University | 2019",
            description:
              "Bachelor's degree in Clinical Pharmacy with comprehensive academic training in pharmacotherapy, pharmaceutical care, clinical pharmacy practice, patient counseling, medication safety, and evidence-based healthcare.",
          },
          {
            title: "Pharmacy Practice License",
            place: "Yemeni Medical Council | 2023",
            description:
              "Licensed Pharmacist authorized to practice the pharmacy profession in accordance with professional standards and healthcare regulations.",
          },
          {
            title: "Diploma in Pharmaceutical Marketing",
            place: "University of Science & Technology | 2019",
            description:
              "Professional diploma covering pharmaceutical marketing, product promotion, healthcare business strategies, and market analysis.",
          },
          {
            title: "Diploma in Community Nutrition",
            place: "University of Science & Technology | 2018",
            description:
              "Professional education in nutrition principles, healthy lifestyle promotion, and community health awareness.",
          },
          {
            title: "Diploma in Microsoft Office Applications",
            place: "British Institute of Science & Technology | 2019",
            description:
              "Professional training in Microsoft Excel, Word, PowerPoint, data management, and business reporting.",
          },
          {
            title: "Diploma in English Language",
            place: "British Institute of Science & Technology | 2013",
            description:
              "Professional English language skills for effective communication in healthcare and professional environments.",
          },
        ]
      : [
          {
            title: "بكالوريوس الصيدلة السريرية",
            place: "جامعة الحديدة | 2019",
            description:
              "درجة البكالوريوس في الصيدلة السريرية، مع دراسة متقدمة في العلاج الدوائي، والرعاية الصيدلانية، والصيدلة السريرية، وسلامة الدواء، وتثقيف المرضى، والممارسة المبنية على الأدلة العلمية.",
          },
          {
            title: "ترخيص مزاولة مهنة الصيدلة",
            place: "المجلس الطبي اليمني | 2023",
            description:
              "ترخيص رسمي لمزاولة مهنة الصيدلة وفق الأنظمة والمعايير المهنية المعتمدة في القطاع الصحي.",
          },
          {
            title: "دبلوم التسويق الدوائي",
            place: "جامعة العلوم والتكنولوجيا | 2019",
            description:
              "دبلوم مهني في التسويق الدوائي يشمل تسويق المنتجات الصحية، واستراتيجيات التسويق، وتحليل الأسواق الدوائية.",
          },
          {
            title: "دبلوم التغذية المجتمعية",
            place: "جامعة العلوم والتكنولوجيا | 2018",
            description:
              "دراسة مبادئ التغذية، وتعزيز الصحة، والتوعية الغذائية، وتحسين جودة الحياة الصحية.",
          },
          {
            title: "دبلوم تطبيقات مايكروسوفت أوفيس",
            place: "المعهد البريطاني للعلوم والتقنية | 2019",
            description:
              "تدريب احترافي في Microsoft Excel وWord وPowerPoint وإدارة البيانات وإعداد التقارير.",
          },
          {
            title: "دبلوم اللغة الإنجليزية",
            place: "المعهد البريطاني للعلوم والتقنية | 2013",
            description:
              "تأهيل في مهارات اللغة الإنجليزية للتواصل المهني والعمل في بيئات الرعاية الصحية.",
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
            ? "Education & Qualifications"
            : "المؤهلات العلمية"}
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