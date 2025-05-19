"use client";

import { ROUTE_CONSTANTS } from "@/constants";
import { Dialog, DialogPanel, Transition } from "@headlessui/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import validator from "validator";

export default function SigninModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setEmailError(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (pathname === ROUTE_CONSTANTS.dashboard) {
      onClose();
    }
  }, [pathname, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validator.isEmail(email)) {
      setEmailError(true);
      return;
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: ROUTE_CONSTANTS.dashboard,
    });

    if (res?.ok) {
      router.push(ROUTE_CONSTANTS.dashboard);
    } else {
      toast.error("Nome/email incorretos");
    }
  };

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
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/illustrations/signin.svg"
                  alt="Ilustração de login"
                  width={200}
                  height={160}
                  priority
                />
                <h2 className="mt-4 text-lg font-semibold">Login</h2>
              </div>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    className={`mt-1 w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:ring-2 focus:outline-none ${
                      emailError
                        ? "border-red-500 ring-red-200"
                        : "focus:ring-brand-primary border-neutral-300"
                    }`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(false);
                    }}
                  />
                  {emailError && (
                    <p className="mt-1 text-xs text-red-500">
                      Dado incorreto. Revise e digite novamente.
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Senha
                  </label>
                  <input
                    type="password"
                    placeholder="Digite sua senha"
                    className="focus:ring-brand-primary mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm shadow-sm focus:ring-2 focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <a
                    href="#"
                    className="text-brand-primary mt-1 inline-block text-xs hover:underline"
                  >
                    Esqueci a senha!
                  </a>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={!email || !password}
                    className="bg-button-primary flex w-40 items-center justify-center rounded-md py-2 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-50"
                  >
                    Acessar
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
