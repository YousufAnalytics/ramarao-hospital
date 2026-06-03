import Link from "next/link";

export default function MobileEmergencyCall() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200  p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <Link
        href="tel:+919876543210"
        className="flex h-12 items-center justify-center rounded-xl bg-[#D62839] font-semibold text-white"
      >
        📞 Emergency Call
      </Link>
    </div>
  );
}
