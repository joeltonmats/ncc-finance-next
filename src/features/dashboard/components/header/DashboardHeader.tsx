"use client";
import { useState } from "react";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { LINK_CONSTANTS, ROUTE_CONSTANTS } from "@/constants";

export default function DashboardHeader() {
  const { data: session } = useSession();
  const router = useRouter();
  const userName = session?.user?.name || "Convidado";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-brand-primary relative flex h-16 items-center justify-between px-4 text-white sm:px-6 md:px-8 lg:px-10">
      <div className="flex items-center gap-4 md:gap-6">
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="text-brand-accent h-8 w-8" />
          ) : (
            <Bars3Icon className="text-brand-accent h-8 w-8" />
          )}
        </button>

        <div className="text-base font-bold md:text-lg">Bytebank</div>
      </div>

      {/* USer Dropdown */}
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="flex items-center gap-2">
          <span className="hidden text-sm font-medium text-white md:inline">
            {userName}
          </span>
          <UserCircleIcon className="text-brand-accent h-10 w-10" />
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            as="div"
            className="fixed top-16 right-4 z-50 min-w-[180px] rounded-md bg-white py-2 text-sm text-neutral-900 shadow-lg focus:outline-none"
          >
            <div className="px-4 py-2 font-semibold text-black sm:inline md:hidden">
              {userName}
            </div>
            <MenuItem>
              {({ focus }) => (
                <button
                  onClick={() => signOut({ callbackUrl: ROUTE_CONSTANTS.home })}
                  className={`w-full px-4 py-2 text-left ${
                    focus ? "bg-neutral-100" : ""
                  }`}
                >
                  {LINK_CONSTANTS.signout}
                </button>
              )}
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-surface-default absolute top-16 left-0 z-50 w-[220px] text-neutral-900 shadow-md md:hidden">
          <div className="flex flex-col px-4 py-4 text-left text-sm font-medium">
            <button
              className="text-brand-accent border-brand-secondary border-b-2 pb-2 font-semibold"
              onClick={() => {
                setMobileMenuOpen(false);
                router.push(ROUTE_CONSTANTS.dashboard);
              }}
            >
              Início
            </button>

            <button className="border-b border-black py-2">
              Transferências
            </button>
            <button className="border-b border-black py-2">
              Investimentos
            </button>
            <button className="py-2">Outros serviços</button>
          </div>
        </div>
      )}
    </header>
  );
}
