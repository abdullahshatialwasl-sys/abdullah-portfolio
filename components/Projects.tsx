const projects = [
  {
    title: "Inventory Analysis Dashboard",
    description:
      "Created inventory reports to monitor stock movement, slow-moving products, and purchasing decisions using Microsoft Excel.",
  },

  {
    title: "Promotion Pricing Calculator",
    description:
      "Prepared promotional pricing tools to calculate discounts, offers, and updated selling prices.",
  },

  {
    title: "Supplier Return Management",
    description:
      "Managed supplier return processes, credit note follow-up, and coordination between inventory teams and suppliers.",
  },

  {
    title: "Odoo Procurement Reports",
    description:
      "Prepared purchase reports, shortage reports, and inventory analysis using Odoo ERP.",
  },

  {
    title: "Product Data Management",
    description:
      "Managed product information including names, barcodes, categories, and data organization.",
  },

  {
    title: "Supplier Coordination Workflow",
    description:
      "Improved communication processes with suppliers for purchase orders and order tracking.",
  },
];


export default function Projects() {

  return (

    <section
      id="projects"
      className="max-w-7xl mx-auto px-8 py-24"
    >

      <div className="text-center mb-12">

        <p className="text-blue-400 font-semibold uppercase tracking-widest">
          Projects
        </p>


        <h2 className="text-4xl font-bold mt-2">
          Professional Projects
        </h2>


        <p className="text-slate-400 mt-4">
          Practical projects and achievements from my professional experience.
        </p>

      </div>



      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300"
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