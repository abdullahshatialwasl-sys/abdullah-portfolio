"use client";

import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";

export default function Experience() {
  const { language } = useLanguage();

  const content =
    language === "en"
      ? {
          tag: "Experience",
          title: "Professional Experience",
          descriptions: [
            "Provided pharmaceutical care, medication dispensing, prescription review, patient counseling, and ensured the safe and effective use of medicines while maintaining high standards of healthcare services.",
            "Delivered comprehensive pharmaceutical services including medication dispensing, patient education, prescription verification, and promoting rational drug use through professional pharmacy practice.",
            "Managed procurement activities for healthcare products, supplier coordination, inventory analysis, purchase planning, and supply chain operations to ensure product availability and operational efficiency.",
          ],
        }
      : {
          tag: "الخبرة",
          title: "الخبرة العملية",
          descriptions: [
            "تقديم الرعاية الدوائية، وصرف الأدوية، ومراجعة الوصفات الطبية، وتثقيف المرضى، وضمان الاستخدام الآمن والفعال للأدوية وفق المعايير المهنية وأفضل الممارسات الصيدلانية.",
            "تقديم الخدمات الصيدلانية الشاملة، بما في ذلك صرف الأدوية، وتقديم الاستشارات الدوائية، ومراجعة الوصفات الطبية، وتعزيز الاستخدام الرشيد للدواء بما يحقق أفضل النتائج العلاجية للمرضى.",
            "إدارة عمليات المشتريات للمنتجات الصحية، والتنسيق مع الموردين، وتحليل المخزون، والتخطيط لعمليات الشراء، ودعم سلسلة الإمداد لضمان توفر المنتجات وتحسين كفاءة العمليات التشغيلية.",
          ],
        };

  const experiences =
    language === "en"
      ? profile.experience.en
      : profile.experience.ar;

  return (
    <section
      id="experience"
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`max-w-7xl mx-auto px-8 py-24 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="text-center mb-14">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          {content.tag}
        </p>

        <h2 className="text-4xl font-bold mt-2">{content.title}</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((job, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
          >
            <div className="flex flex-col lg:flex-row lg:justify-between mb-5">
              <div>
                <h3 className="text-2xl font-bold">{job.position}</h3>

                <p className="text-blue-400 text-lg">{job.company}</p>
              </div>

              <p className="text-slate-400 mt-3 lg:mt-0">
                {job.period}
              </p>
            </div>

            <p className="text-slate-400 leading-7">
              {content.descriptions[index]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}