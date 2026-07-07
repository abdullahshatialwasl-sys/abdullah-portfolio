"use client";

import Image from "next/image";
import { useState } from "react";
import { translations } from "@/data/translations";

export default function Hero() {

  const [language, setLanguage] = useState<"en" | "ar">("en");

  const t = translations[language];


  return (

    <section
      className={`max-w-7xl mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 py-24 gap-12 ${
        language === "ar" ? "text-right" : "text-left"
      }`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >


      <div className="max-w-2xl">


        <p className="text-blue-400 text-lg mb-3">
          {t.hello}
        </p>


        <h1 className="text-5xl lg:text-7xl font-bold mb-4">
          {t.name}
        </h1>


        <h2 className="text-2xl text-slate-300 mb-6">

          {t.title1}
          <br />
          {t.title2}

        </h2>


        <p className="text-slate-400 leading-8 mb-8">

          {language === "en"
            ? "Passionate about Procurement, Clinical Pharmacy, Inventory Management and Healthcare Operations."
            : "مهتم بالمشتريات والصيدلة السريرية وإدارة المخزون والعمليات الصحية."
          }

        </p>



        <div className="flex gap-4">


          <a
            href="/cv/Abdullah-Jaber-CV.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white"
          >
            {t.download}
          </a>



          <a
            href="#contact"
            className="border border-slate-600 hover:bg-slate-800 px-6 py-3 rounded-xl"
          >
            {t.contactMe}
          </a>


        </div>


      </div>



      <div>

        <Image
          src="/profile.jpeg"
          alt="Abdullah Jaber"
          width={420}
          height={420}
          priority
          className="rounded-full border-4 border-blue-500"
        />

      </div>


    </section>

  );
}