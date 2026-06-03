const services = [
  {
    title: "ECG",
    description: "Electrocardiogram for heart rhythm evaluation.",
  },
  {
    title: "2D Echo",
    description: "Detailed imaging of heart structure and function.",
  },
  {
    title: "TMT",
    description: "Stress testing to assess cardiac performance.",
  },
  {
    title: "Preventive Cardiology",
    description: "Risk assessment and heart disease prevention.",
  },
  {
    title: "Hypertension Care",
    description: "Management of high blood pressure.",
  },
  {
    title: "Heart Failure Management",
    description: "Long-term treatment and monitoring.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-32 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm text-red-700">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Comprehensive Cardiology Care
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 text-3xl text-[#D62839]">❤️</div>

              <h3 className="text-xl font-semibold">{service.title}</h3>

              <p className="mt-3 text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
