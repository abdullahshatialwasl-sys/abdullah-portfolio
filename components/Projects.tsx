"use client";

import { useLanguage } from "./LanguageProvider";

export default function Projects() {
  const { language } = useLanguage();

  const projects =
    language === "en"
      ? [
          {
            title: "Inventory Analysis Dashboard",
            description:
              "Created inventory reports to monitor stock movement, slow-moving products, and purchasing decisions using Microsoft Excel.",
          },
          {
            title: "Promotion Pricing Calculator",
            description:
              "Prepared promotional pricing tools to calculate discounts and updated selling prices.",
          },
          {
            title: "Supplier Return Management",
            description:
              "Managed supplier returns, credit notes, and coordination with suppliers.",
          },
          {
            title: "Odoo Procurement Reports",
            description:
              "Prepared procurement and inventory reports using Odoo ERP.",
          },
          {
            title: "Product Data Management",
            description:
              "Managed product information, categories, and barcode organization.",
          },
          {
            title: "Supplier Coordination Workflow",
            description:
              "Improved supplier communication and purchase order tracking.",
          },
        ]
      : [
          {
            title: "لوحة تحليل المخزون",
            description:
              "إعداد تقارير لمراقبة حركة المخزون والمنتجات الراكدة واتخاذ قرارات الشراء باستخدام Excel.",
          },
          {
            title: "حاسبة العروض الترويجية",
            description:
              "إعداد أدوات لحساب الخصومات والعروض وتحديث أسعار البيع.",
          },
          {
            title: "إدارة مرتجعات الموردين",
            description:
              "متابعة مرتجعات الموردين والإشعارات الدائنة والتنسيق مع الموردين.",
          },
          {
            title: "تقارير المشتريات في Odoo",
            description:
              "إعداد تقارير المشتريات وتحليل المخزون باستخدام Odoo ERP.",
          },
          {
            title: "إدارة بيانات المنتجات",
            description:
              "تنظيم بيانات المنتجات والأصناف والباركود.",
          },
          {
            title: "تنسيق الموردين",
            description:
              "تحسين التواصل مع الموردين ومتابعة أوامر الشراء.",
          },
        ];

  return (
    <section
      id="projects"
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`max-w-7xl mx-auto px-8 py-24 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="text-center mb-12">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          {language === "en" ? "Projects" : "المشاريع"}
        </p>

        <h2 className="text-4xl font-bold mt-2">
          {language === "en"
            ? "Professional Projects"
            : "المشاريع المهنية"}
        </h2>

        <p className="text-slate-400 mt-4">
          {language === "en"
            ? "Practical projects and achievements from my professional experience."
            : "نماذج من المشاريع والإنجازات التي قمت بها خلال مسيرتي المهنية."}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-slate-400 leading-7">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}