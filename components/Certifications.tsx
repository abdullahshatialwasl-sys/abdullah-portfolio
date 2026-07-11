import Image from "next/image";

export default function Certifications() {
  const certificates = [
    "certificate01.jpeg",
    "certificate02.jpeg",
    "certificate03.jpeg",
    "certificate04.jpeg",
    "certificate05.jpeg",
    "certificate06.jpeg",
    "certificate07.jpeg",
    "certificate08.jpeg",
    "certificate09.jpeg",
    "certificate10.jpeg",
    "certificate11.jpeg",
    "certificate12.jpeg",
    "certificate13.jpeg",
    "certificate14.jpeg",
    "certificate15.jpeg",
    "certificate16.jpeg",
    "certificate17.jpeg",
  ];

  return (
    <section
      id="certificates"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <div className="text-center mb-12">
        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Certifications
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Professional Certifications
        </h2>

        <p className="text-slate-400 mt-4">
          Training courses and professional certificates.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition"
          >
            <a
              href={`/certificates/${certificate}`}
              target="_blank"
            >
              <Image
                src={`/certificates/${certificate}`}
                alt={`Certificate ${index + 1}`}
                width={500}
                height={350}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}