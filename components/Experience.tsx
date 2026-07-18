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
          description:
            "Professional experience in healthcare operations, procurement activities, supplier coordination, and business process improvement.",
        }
      : {
          tag: "الخبرة",
          title: "الخبرة العملية",
          description:
            "خبرة عملية في تشغيل الصيدليات، وإدارة المشتريات، والتنسيق مع الموردين، وتحسين إجراءات العمل وتحليل المخزون.",
        };

  const experiences = profile.experience[language];

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

              <p className="text-slate-400 mt-3 lg:mt-0">{job.period}</p>
            </div>

            <p className="text-slate-400 leading-7">
              {content.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}