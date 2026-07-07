import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-blue-400 font-semibold uppercase tracking-widest mb-3">
          Contact
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Get In Touch
        </h2>

        <p className="text-slate-400 text-lg leading-8 mb-10">
          I am open to professional opportunities, procurement
          collaborations, and healthcare-related projects.
        </p>


        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6 text-left">

          <div>
            <h3 className="text-blue-400 font-semibold">
              Name
            </h3>
            <p className="text-slate-300">
              {profile.name}
            </p>
          </div>


          <div>
            <h3 className="text-blue-400 font-semibold">
              Email
            </h3>
            <p className="text-slate-300">
              {profile.email}
            </p>
          </div>


          <div>
            <h3 className="text-blue-400 font-semibold">
              Phone
            </h3>
            <p className="text-slate-300">
              {profile.phone}
            </p>
          </div>


          <div>
            <h3 className="text-blue-400 font-semibold">
              Location
            </h3>
            <p className="text-slate-300">
              {profile.location}
            </p>
          </div>


        </div>

      </div>
    </section>
  );
}