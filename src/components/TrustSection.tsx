export default function TrustSection() {
  const stats = [
    {
      value: "15+",
      label: "Years Experience",
    },
    {
      value: "10K+",
      label: "Patients Treated",
    },
    {
      value: "24/7",
      label: "Emergency Care",
    },
    {
      value: "4.9★",
      label: "Patient Rating",
    },
  ];

  const features = [
    "Advanced Cardiac Diagnostics",
    "Personalized Treatment Plans",
    "Experienced Heart Specialist",
    "Modern Medical Equipment",
    "Preventive Heart Care",
    "Compassionate Patient Support",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#0F4C81]">
            Why Patients Trust Us
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Dedicated To Exceptional Heart Care
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Providing comprehensive cardiac care with advanced diagnostics,
            personalized treatment, and a commitment to improving heart health.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl font-bold text-[#0F4C81]">
                {stat.value}
              </div>

              <div className="mt-3 text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Area */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Comprehensive Cardiology Services
            </h3>

            <p className="mt-4 text-slate-600">
              We focus on prevention, diagnosis, treatment, and long-term
              management of heart and vascular conditions using evidence-based
              medical care.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-[#D62839]">
                    ✓
                  </div>

                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Visual */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#0F4C81] to-[#1A6FB5] p-10 text-white shadow-2xl">
              <div className="text-6xl">❤️</div>

              <h3 className="mt-6 text-3xl font-bold">
                Your Heart,
                <br />
                Our Priority
              </h3>

              <p className="mt-4 text-blue-100">
                Delivering trusted cardiac care with a focus on patient
                well-being, advanced technology, and clinical excellence.
              </p>

              <div className="mt-8 border-t border-white/20 pt-6">
                <div className="flex items-center justify-between">
                  <span>Heart Health Focus</span>
                  <span className="font-semibold">100%</span>
                </div>

                <div className="mt-3 h-2 rounded-full bg-white/20">
                  <div className="h-2 w-full rounded-full bg-white" />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg lg:absolute lg:-bottom-8 lg:-left-8 lg:mt-0">
              <div className="text-2xl font-bold text-[#D62839]">
                Preventive Care
              </div>

              <div className="mt-2 text-sm text-slate-600">
                Early detection and proactive management of heart conditions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
