"use client";

import { useState } from "react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  navItems: NavItem[];
};

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="rounded-md p-2 text-slate-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {open && (
        <nav
          className="fixed inset-x-0 top-20 z-50 bg-white border-t shadow-lg"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b py-3 text-slate-700 border-gray-300"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/appointment"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-md bg-[#D62839] px-4 py-3 text-center font-medium text-white"
            >
              Book Appointment
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
