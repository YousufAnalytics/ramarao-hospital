import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-x-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-16 lg:px-8 lg:pt-10 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
              Trusted Cardiology Care
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Expert Cardiac Care
              <span className="mt-2 block text-[#D62839]">
                For A Healthier Heart
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Comprehensive diagnosis, treatment, and preventive care for heart
              and vascular conditions using advanced technology and
              patient-centered healthcare.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                disabled
                className="cursor-not-allowed rounded-lg bg-[#D62839] px-6 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#B91C2C]"
              >
                Book Appointment
              </button>

              <button
                disabled
                className="cursor-not-allowed rounded-lg border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Call Now
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl font-bold text-[#0F4C81] md:text-3xl">
                  15+
                </p>
                <p className="text-sm text-slate-600">Years Experience</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#0F4C81] md:text-3xl">
                  10K+
                </p>
                <p className="text-sm text-slate-600">Patients Treated</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#0F4C81] md:text-3xl">
                  24/7
                </p>
                <p className="text-sm text-slate-600">Emergency Care</p>
              </div>
            </div>
          </div>

          {/* Right Side Visual */}
          <div className="relative flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute h-72 w-72 rounded-full bg-[#D62839]/10 blur-3xl md:h-96 md:w-96" />

            <div className="relative w-full max-w-lg">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl md:p-8">
                {/* Heart Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0F4C81] to-[#D62839] text-4xl text-white shadow-lg md:h-24 md:w-24 md:text-5xl">
                    ❤️
                  </div>
                </div>

                {/* ECG */}
                <div className="mb-8 overflow-hidden">
                  <svg
                    viewBox="0 0 500 100"
                    className="h-16 w-full md:h-20"
                    fill="none"
                  >
                    <path
                      d="M0 50 H80 L110 50 L130 15 L160 85 L190 50 H250 L280 50 L300 25 L330 75 L360 50 H500"
                      stroke="#D62839"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Dashboard Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-bold text-[#0F4C81] md:text-3xl">
                      10K+
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Patients Treated
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-bold text-[#0F4C81] md:text-3xl">
                      15+
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Years Experience
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-bold text-[#0F4C81] md:text-3xl">
                      24/7
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Emergency Care
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-bold text-[#0F4C81] md:text-3xl">
                      4.9★
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Patient Rating
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute left-2 top-4 rounded-2xl bg-white px-4 py-3 shadow-xl md:-left-8 md:top-12">
                <p className="text-sm font-semibold text-[#D62839]">
                  ❤️ Heart Health
                </p>
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-2 rounded-2xl bg-white px-4 py-3 shadow-xl md:-right-6 md:bottom-10">
                <p className="text-sm font-semibold text-[#0F4C81]">
                  ECG • Echo • TMT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
