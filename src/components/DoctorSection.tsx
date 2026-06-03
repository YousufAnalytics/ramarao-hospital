export default function DoctorSection() {
  return (
    <section id="about" className="scroll-mt-32 bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="h-96 w-80 rounded-3xl bg-slate-100 shadow-xl">
            {/* Doctor Photo */}
          </div>
        </div>

        <div>
          <span className="rounded-full bg-blue-50 px-4 py-2 text-sm text-[#0F4C81]">
            Meet Your Specialist
          </span>

          <h2 className="mt-6 text-4xl font-bold">Dr. Ramarao</h2>

          <p className="mt-2 text-lg text-[#D62839]">Consultant Cardiologist</p>

          <p className="mt-6 text-slate-600">
            With over 15 years of experience in cardiology, Dr. Ramarao provides
            advanced cardiac care focused on prevention, diagnosis, and
            treatment.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="font-bold">15+</div>
              <div>Years Experience</div>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="font-bold">10K+</div>
              <div>Patients Treated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
