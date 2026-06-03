export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Patient",
      review: "Excellent care and professional treatment.",
    },
    {
      name: "Patient",
      review: "Very patient-friendly and knowledgeable doctor.",
    },
    {
      name: "Patient",
      review: "Highly recommended for cardiac consultations.",
    },
  ];

  return (
    <section id="testimonials" className="scroll-mt-32 bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">What Patients Say</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-yellow-500">★★★★★</div>

              <p className="mt-4 text-slate-600">{review.review}</p>

              <p className="mt-6 font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
