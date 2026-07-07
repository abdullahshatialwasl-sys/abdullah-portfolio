"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-24 gap-12">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center lg:text-left"
      >

        <p className="text-blue-400 text-lg font-medium mb-3">
          Hello, I'm
        </p>

        <h1 className="text-5xl lg:text-7xl font-extrabold mb-4">
          Abdullah Jaber
        </h1>

        <h2 className="text-2xl lg:text-3xl text-slate-300 mb-6">
          Clinical Pharmacist
          <br />
          Procurement Specialist
        </h2>

        <p className="text-slate-400 text-lg leading-8 mb-8">
          Clinical Pharmacist and Procurement Specialist with experience in
          purchasing, supplier management, inventory analysis, and healthcare
          operations.
        </p>


        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

          <a
            href="/cv/Abdullah-Jaber-CV.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
          >
            Download CV
          </a>


          <a
            href="#contact"
            className="border border-slate-600 hover:bg-slate-800 transition px-6 py-3 rounded-xl font-semibold"
          >
            Contact Me
          </a>

        </div>

      </motion.div>


      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >

        <Image
          src="/profile.jpeg"
          alt="Abdullah Jaber"
          width={420}
          height={420}
          priority
          className="rounded-full border-4 border-blue-500 shadow-2xl object-cover"
        />

      </motion.div>


    </section>
  );
}