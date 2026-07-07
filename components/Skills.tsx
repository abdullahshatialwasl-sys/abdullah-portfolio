import {
  FaShoppingCart,
  FaFileExcel,
  FaHospital,
  FaChartLine,
} from "react-icons/fa";

import { profile } from "@/data/profile";


export default function Skills() {

  const categories = [
    {
      icon: <FaShoppingCart size={35} />,
      title: "Procurement",
      skills: [
        "Supplier Management",
        "Negotiation",
        "Purchase Orders",
        "Inventory Control",
      ],
    },

    {
      icon: <FaFileExcel size={35} />,
      title: "Technical Skills",
      skills: [
        "Microsoft Excel",
        "Odoo ERP",
        "Microsoft Office",
        "Reports Preparation",
      ],
    },

    {
      icon: <FaHospital size={35} />,
      title: "Healthcare",
      skills: [
        "Clinical Pharmacy",
        "Medication Counseling",
        "Nutrition",
      ],
    },

    {
      icon: <FaChartLine size={35} />,
      title: "Professional Skills",
      skills: profile.skills,
    },
  ];


  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-8 py-24"
    >

      <div className="text-center mb-12">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Skills
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Professional Skills
        </h2>

      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {categories.map((category, index) => (

          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition"
          >

            <div className="text-blue-400 mb-5">
              {category.icon}
            </div>


            <h3 className="text-2xl font-bold mb-5">
              {category.title}
            </h3>


            <ul className="space-y-3 text-slate-400">

              {category.skills.map((skill, i) => (

                <li key={i}>
                  • {skill}
                </li>

              ))}

            </ul>


          </div>

        ))}

      </div>


    </section>
  );
}