export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-32 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">Visit Our Clinic</h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.4782942851543!2d80.1647773!3d16.0925402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a631529e014e1%3A0xaa6b0c20799c9b2!2sRamarao%20Super%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1780480350826!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <p className="mt-4">📞 +91 XXXXX XXXXX</p>

            <p className="mt-4">📍 Chilakaluripet, Andhra Pradesh 522616</p>

            <p className="mt-4">✉️ ramarao@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
