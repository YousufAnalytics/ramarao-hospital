export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-32 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">Visit Our Clinic</h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-100 p-8">Google Maps Here</div>

          <div>
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <p className="mt-4">📞 +91 XXXXX XXXXX</p>

            <p className="mt-4">📍 Vijayawada, Andhra Pradesh</p>

            <p className="mt-4">✉️ clinic@email.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
