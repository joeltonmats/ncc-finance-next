"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SigninModal from "@/components/SigninModal";
import SignupModal from "@/components/SignupModal";
import { HEADER_CONSTANTS, ROUTE_CONSTANTS } from "@/constants";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { animateScroll as scroll } from "react-scroll";

export default function HomeHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isSignin = pathname === ROUTE_CONSTANTS.signin;
  const isSignup = pathname === ROUTE_CONSTANTS.signup;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 bg-black shadow-sm">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative h-5 w-6">
              <Image
                src="/assets/home/logo-verde.svg"
                alt="Bytebank"
                width="27"
                height="27"
              />
            </div>
            <div
              className="text-brand-secondary cursor-pointer text-xl font-bold italic"
              onClick={() =>
                scroll.scrollToTop({ smooth: true, duration: 500 })
              }
            >
              Bytebank
            </div>
          </div>

          <div className="hidden gap-2 md:flex">
            <button
              className="bg-brand-secondary rounded-md px-4 py-1 text-sm text-white"
              onClick={() => router.push(ROUTE_CONSTANTS.signup)}
            >
              {HEADER_CONSTANTS.openAccount}
            </button>
            <button
              className="border-brand-secondary text-brand-secondary rounded-md border px-4 py-1 text-sm"
              onClick={() => router.push(ROUTE_CONSTANTS.signin)}
            >
              {HEADER_CONSTANTS.account}
            </button>
          </div>

          <button
            className="text-brand-secondary md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 px-6 py-8 text-center text-white">
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            <div className="mt-20 flex flex-col items-center gap-4">
              <button
                className="bg-brand-secondary w-full rounded-md px-4 py-2 text-sm text-white"
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push(ROUTE_CONSTANTS.signup);
                }}
              >
                {HEADER_CONSTANTS.openAccount}
              </button>
              <button
                className="border-brand-secondary text-brand-secondary w-full rounded-md border px-4 py-2 text-sm"
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push(ROUTE_CONSTANTS.signin);
                }}
              >
                {HEADER_CONSTANTS.account}
              </button>
            </div>
          </div>
        )}
      </header>

      <SigninModal isOpen={isSignin} onClose={() => router.push("/")} />
      <SignupModal isOpen={isSignup} onClose={() => router.push("/")} />
    </>
  );
}
