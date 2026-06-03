import Link from "next/link";

export default function AppointmentCTA() {
  return (
    <section className="bg-[#0F4C81] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold">
          Take The First Step Towards Better Heart Health
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Schedule your consultation today and receive expert cardiac care.
        </p>

        <button
          disabled
          className="cursor-not-allowed mt-8 inline-block rounded-xl bg-[#D62839] px-8 py-4 font-semibold text-white"
        >
          Book Appointment
        </button>
      </div>
    </section>
  );
}
