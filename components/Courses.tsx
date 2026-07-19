"use client";

import { useLanguage } from "./LanguageProvider";

export default function Courses() {
  const { language } = useLanguage();

  const courses =
    language === "en"
      ? [
          {
            title: "Certified Clinical Pharmacy Training",
            place: "Al Thawra General Hospital Authority",
            description:
              "Comprehensive clinical pharmacy training focused on pharmaceutical care, patient assessment, medication therapy management, and evidence-based clinical practice.",
          },
          {
            title: "Training of Trainers (TOT)",
            place: "Professional Development",
            description:
              "Professional training in presentation skills, communication, leadership, and effective training techniques.",
          },
          {
            title: "YemenSoft Accounting System",
            place: "Professional Training",
            description:
              "Training in the YemenSoft accounting system, financial operations, reporting, and business workflows.",
          },
          {
            title: "First Aid Certificate",
            place: "Healthcare Training",
            description:
              "Training in emergency response, basic life support, and first aid procedures.",
          },
          {
            title: "Human Nutrition Fundamentals",
            place: "Professional Course",
            description:
              "Fundamentals of nutrition, healthy lifestyle promotion, and nutritional counseling.",
          },
          {
            title: "Public Relations Certificate",
            place: "Professional Development",
            description:
              "Training in communication skills, customer relations, teamwork, and professional interaction.",
          },
        ]
      : [
          {
            title: "تدريب معتمد في الصيدلة السريرية",
            place: "هيئة مستشفى الثورة العام",
            description:
              "تدريب عملي متقدم في الصيدلة السريرية شمل الرعاية الدوائية، ومراجعة العلاج الدوائي، وتقييم المرضى، والمشاركة في الممارسة السريرية المبنية على الأدلة.",
          },
          {
            title: "شهادة TOT (إعداد المدربين)",
            place: "التطوير المهني",
            description:
              "تدريب احترافي في مهارات التدريب، والإلقاء، وإدارة الدورات، والتواصل الفعال، وتنمية المهارات القيادية.",
          },
          {
            title: "شهادة برنامج النظام المحاسبي يمن سوفت",
            place: "تدريب مهني",
            description:
              "تدريب على استخدام نظام يمن سوفت المحاسبي وإدارة العمليات المالية وإعداد التقارير.",
          },
          {
            title: "شهادة الإسعافات الأولية",
            place: "التدريب الصحي",
            description:
              "التدريب على مبادئ الإسعافات الأولية والتعامل مع الحالات الطارئة والإجراءات الأساسية لإنقاذ الحياة.",
          },
          {
            title: "شهادة أساسيات تغذية الإنسان",
            place: "دورة مهنية",
            description:
              "دراسة أساسيات التغذية الصحية، والتوعية الغذائية، وتعزيز أنماط الحياة الصحية.",
          },
          {
            title: "شهادة العلاقات العامة",
            place: "التطوير المهني",
            description:
              "تنمية مهارات التواصل، وخدمة العملاء، وبناء العلاقات المهنية والعمل بروح الفريق.",
          },
        ];

  return (
    <section
      id="courses"
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`max-w-7xl mx-auto px-8 py-24 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="text-center mb-12">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          {language === "en"
            ? "Professional Courses"
            : "الدورات المهنية"}
        </p>

        <h2 className="text-4xl font-bold mt-2">
          {language === "en"
            ? "Courses & Professional Training"
            : "الدورات والتدريب المهني"}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-bold mb-3">
              {course.title}
            </h3>

            <p className="text-blue-400 mb-3">
              {course.place}
            </p>

            <p className="text-slate-400 leading-7">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}