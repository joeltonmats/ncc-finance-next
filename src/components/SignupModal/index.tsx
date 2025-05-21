import { ROUTE_CONSTANTS } from "@/constants";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import validator from "validator";
import AuthModalWrapper from "../AuthModalWrapper";
import AuthModalHeader from "../AuthModalHeader";
import FormField from "../FormField";

export default function SignupModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [emailError, setEmailError] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setForm({ name: "", email: "", password: "" });
      setEmailError(false);
      setAcceptTerms(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && pathname === ROUTE_CONSTANTS.signin) {
      onClose();
    }
  }, [isOpen, pathname, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validator.isEmail(form.email)) {
      setEmailError(true);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        toast.success("Success to create account.");
        router.push(ROUTE_CONSTANTS.signin);
      } else {
        toast.error("Error to create an account");
      }
    } catch {
      toast.error("Error to create an account");
    }
  };

  return (
    <AuthModalWrapper isOpen={isOpen} onClose={onClose}>
      <AuthModalHeader
        illustration="/assets/illustrations/signup.svg"
        alt="Ilustração de cadastro"
        title=" Preencha os campos abaixo para criar sua conta corrente!"
        centerTitle
      />
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <FormField
          label="Nome"
          placeholder="Digite seu nome completo"
          value={form.name}
          onChange={(val) => setForm({ ...form, name: val })}
        />

        <FormField
          label="Email"
          type="email"
          placeholder="Digite seu email"
          value={form.email}
          onChange={(val) => {
            setForm({ ...form, email: val });
            setEmailError(false);
          }}
          hasError={emailError}
          errorMessage="Dado incorreto. Revise e digite novamente."
        />

        <FormField
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={form.password}
          onChange={(val) => setForm({ ...form, password: val })}
        />

        <div className="flex items-start gap-2 pt-2">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            className="text-brand-primary focus:ring-brand-primary mt-1 h-4 w-4 rounded border border-neutral-300 focus:ring-1"
          />
          <p className="text-xs text-neutral-700">
            Li e estou ciente quanto às condições de tratamento dos meus dados
            conforme descrito na
            <span className="font-medium">
              {" "}
              Política de Privacidade do banco
            </span>
            .
          </p>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={
              !(form.name && form.email && form.password && acceptTerms)
            }
            className="flex w-40 items-center justify-center rounded-md bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-red-500"
          >
            Criar conta
          </button>
        </div>
      </form>
    </AuthModalWrapper>
  );
}
