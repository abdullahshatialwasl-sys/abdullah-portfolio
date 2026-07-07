import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-8 py-24"
    >

      <div className="text-center mb-14">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Experience
        </p>

        <h2 className="text-4xl font-bold mt-2">
          Professional Experience
        </h2>

      </div>


      <div className="space-y-8">

        {profile.experience.map((job, index) => (

          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
          >

            <div className="flex flex-col lg:flex-row lg:justify-between mb-5">

              <div>

                <h3 className="text-2xl font-bold">
                  {job.position}
                </h3>

                <p className="text-blue-400 text-lg">
                  {job.company}
                </p>

              </div>


              <p className="text-slate-400 mt-3 lg:mt-0">
                {job.period}
              </p>

            </div>


            <p className="text-slate-400 leading-7">
              Professional experience in healthcare operations,
              procurement activities, supplier coordination,
              and business process improvement.
            </p>


          </div>

        ))}

      </div>

    </section>
  );
}