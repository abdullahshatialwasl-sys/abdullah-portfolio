const education = [
  {
    title: "Bachelor of Clinical Pharmacy",
    place: "Bachelor Degree",
    description:
      "Clinical pharmacy education including pharmacotherapy, patient care, medication management, and healthcare practice.",
  },
  {
    title: "Diploma in Community Nutrition",
    place: "Professional Diploma",
    description:
      "Knowledge of nutrition principles, dietary guidance, and health improvement strategies.",
  },
  {
    title: "Diploma in Pharmaceutical Marketing",
    place: "Professional Diploma",
    description:
      "Understanding pharmaceutical markets, product promotion, and healthcare business concepts.",
  },
  {
    title: "Microsoft Office Diploma",
    place: "Professional Training",
    description:
      "Advanced skills in Excel, Word, PowerPoint, and business reporting.",
  },
  {
    title: "English Diploma",
    place: "Professional Training",
    description:
      "Professional English communication and workplace skills.",
  },
];


export default function Education() {

  return (

    <section
      id="education"
      className="max-w-7xl mx-auto px-8 py-24"
    >

      <div className="text-center mb-12">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Education
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Education & Training
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