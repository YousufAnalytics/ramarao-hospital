import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
      {/* Top Bar */}
      <div className="hidden bg-[#0F4C81] text-white md:block">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-2 text-sm">
          <p>Open 24/7 Emergency Care</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-slate-200">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0F4C81] to-[#D62839] text-xl text-white shadow-lg">
              🏥
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                Ramarao Hospital
              </h1>
              <p className="text-xs text-slate-500">
                Advanced Healthcare & Specialists
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-[#0F4C81]"
              >
                {item.label}
              </Link>
            ))}

            <button
              disabled
              className="cursor-not-allowed rounded-md bg-[#D62839] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#B91C2C] text-white"
            >
              Book Appointment
            </button>
          </nav>

          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
