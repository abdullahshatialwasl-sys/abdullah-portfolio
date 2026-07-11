export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side */}
        <div>
          <p className="text-blue-400 text-lg font-semibold mb-3 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Clinical Pharmacist &
            <br />
            Procurement Specialist
          </h2>

          <p className="text-slate-400 text-lg leading-8 mb-6">
            I am a Clinical Pharmacist and Procurement Specialist with
            experience in pharmacy operations, healthcare, purchasing,
            supplier management, inventory control, and procurement activities.
          </p>

          <p className="text-slate-400 text-lg leading-8">
            I focus on improving procurement processes, analyzing inventory,
            managing supplier relationships, and supporting business growth
            through efficient purchasing strategies and operational excellence.
          </p>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <h3 className="text-4xl font-bold text-blue-400">4+</h3>
            <p className="text-slate-400 mt-2">
              Years Experience in Pharmacies
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <h3 className="text-4xl font-bold text-blue-400">2+</h3>
            <p className="text-slate-400 mt-2">
              Years Experience in Procurement
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <h3 className="text-4xl font-bold text-blue-400">15+</h3>
            <p className="text-slate-400 mt-2">
              Branches Supported
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500 transition">
            <h3 className="text-4xl font-bold text-blue-400">100%</h3>
            <p className="text-slate-400 mt-2">
              Commitment & Professionalism
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}