"use client";

import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

export interface AuthModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function AuthModalWrapper({
  isOpen,
  onClose,
  children,
}: AuthModalWrapperProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel className="relative h-screen w-full max-w-md transform overflow-hidden bg-white px-6 py-10 text-left align-middle shadow-xl transition-all sm:max-w-lg md:max-w-xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-xl text-neutral-500 hover:text-neutral-700"
              >
                &times;
              </button>
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
