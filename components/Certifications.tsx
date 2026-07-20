"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function Certifications() {
  const { language } = useLanguage();

  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const certificates = [
    "certificate05.jpeg",
    "certificate16.jpeg",
    "certificate17.jpeg",
    "certificate15.jpeg",
    "certificate01.jpeg",
    "certificate02.jpeg",
    "certificate03.jpeg",
    "certificate04.jpeg",
    "certificate06.jpeg",
    "certificate07.jpeg",
    "certificate08.jpeg",
    "certificate09.jpeg",
    "certificate10.jpeg",
    "certificate11.jpeg",
    "certificate12.jpeg",
    "certificate13.jpeg",
    "certificate14.jpeg",
  ];

  return (
    <section
      id="certificates"
      dir={language === "ar" ? "rtl" : "ltr"}
      className={`max-w-7xl mx-auto px-8 py-24 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      <div className="text-center mb-12">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          {language === "en" ? "Certifications" : "الشهادات"}
        </p>

        <h2 className="text-4xl font-bold mt-2">
          {language === "en"
            ? "Professional Certifications"
            : "الشهادات المهنية"}
        </h2>

        <p className="text-slate-400 mt-4">
          {language === "en"
            ? "Training courses and professional certificates."
            : "الدورات التدريبية والشهادات المهنية."}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition"
          >
            <button
              onClick={() =>
                setSelectedFile(`/certificates/${certificate}`)
              }
              className="w-full"
            >
              <Image
                src={`/certificates/${certificate}`}
                alt={`Certificate ${index + 1}`}
                width={500}
                height={350}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300 cursor-pointer"
              />
            </button>
          </div>
        ))}

        {/* بطاقة تقرير DataFlow */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition">
          <button
            onClick={() => setSelectedFile("/documents/DataFlow-Report.pdf")}
            className="w-full h-48 flex flex-col items-center justify-center bg-slate-800 hover:bg-slate-700 transition"
          >
            <div className="text-6xl">📄</div>
            <div className="mt-3 text-white font-semibold text-center px-2">
              {language === "en"
                ? "DataFlow Report"
                : "تقرير DataFlow"}
            </div>
          </button>
        </div>
      </div>

      {selectedFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-6xl w-full h-[90vh] bg-white rounded-xl overflow-hidden">
            <button
              onClick={() => setSelectedFile(null)}
              className="absolute right-3 top-3 z-20 bg-white text-black rounded-full w-10 h-10 text-xl font-bold hover:bg-gray-200"
            >
              ✕
            </button>

            {selectedFile.endsWith(".pdf") ? (
              <iframe
                src={selectedFile}
                className="w-full h-full"
                title="DataFlow Report"
              />
            ) : (
              <Image
                src={selectedFile}
                alt="Certificate Preview"
                width={1200}
                height={900}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}