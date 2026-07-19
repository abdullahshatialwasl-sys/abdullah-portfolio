"use client";

import {
  FaHospital,
  FaFileExcel,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";

import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";

export default function Skills() {
  const { language } = useLanguage();

  const categories =
    language === "en"
      ? [
          {
            icon: <FaHospital size={35} />,
            title: "Clinical Pharmacy",
            skills: [
              "Clinical Pharmacy",
              "Pharmaceutical Care",
              "Patient Counseling",
              "Medication Safety",
              "Prescription Review",
              "Drug Information",
            ],
          },
          {
            icon: <FaFileExcel size={35} />,
            title: "Technical Skills",
            skills: [
              "Microsoft Excel",
              "Odoo ERP",
              "Microsoft Office",
              "Data Analysis",
              "Reports Preparation",
            ],
          },
          {
            icon: <FaShoppingCart size={35} />,
            title: "Healthcare Procurement",
            skills: [
              "Supplier Management",
              "Negotiation",
              "Purchase Orders",
              "Inventory Control",
              "Supply Chain Coordination",
            ],
          },
          {
            icon: <FaChartLine size={35} />,
            title: "Professional Skills",
            skills: [
              "Communication",
              "Problem Solving",
              "Teamwork",
              "Leadership",
              "Time Management",
              "Continuous Learning",
            ],
          },
        ]
      : [
          {
            icon: <FaHospital size={35} />,
            title: "الصيدلة السريرية",
            skills: [
              "الصيدلة السريرية",
              "الرعاية الدوائية",
              "تثقيف المرضى",
              "سلامة الدواء",
              "مراجعة الوصفات الطبية",
              "المعلومات الدوائية",
            ],
          },
          {
            icon: <FaFileExcel size={35} />,
            title: "المهارات التقنية",
            skills: [
              "مايكروسوفت إكسل",
              "Odoo ERP",
              "مايكروسوفت أوفيس",
              "تحليل البيانات",
              "إعداد التقارير",
            ],
          },
          {
            icon: <FaShoppingCart size={35} />,
            title: "المشتريات الصحية",
            skills: [
              "إدارة الموردين",
              "التفاوض",
              "أوامر الشراء",
              "إدارة المخزون",
              "تنسيق سلسلة الإمداد",
            ],
          },
          {
            icon: <FaChartLine size={35} />,
            title: "المهارات المهنية",
            skills: [
              "التواصل الفعال",
              "حل المشكلات",
              "العمل الجماعي",
              "القيادة",
              "إدارة الوقت",
              "التطوير المهني المستمر",
            ],
          },
        ];

  return (
    <section
      id="skills"
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`max-w-7xl mx-auto px-8 py-24 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="text-center mb-12">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          {language === "en" ? "Skills" : "المهارات"}
        </p>

        <h2 className="text-4xl font-bold mt-2">
          {language === "en"
            ? "Professional Skills"
            : "المهارات المهنية"}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
          >
            <div className="text-blue-400 mb-5">{category.icon}</div>

            <h3 className="text-2xl font-bold mb-5">
              {category.title}
            </h3>

            <ul className="space-y-3 text-slate-400">
              {category.skills.map((skill, i) => (
                <li key={i}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}