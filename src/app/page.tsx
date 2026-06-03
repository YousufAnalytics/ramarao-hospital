import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorSection from "@/components/DoctorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentCTA from "@/components/AppointmentCTA";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <DoctorSection />
        <TestimonialsSection />
        <AppointmentCTA />
        <ContactSection />
      </main>
    </>
  );
}
