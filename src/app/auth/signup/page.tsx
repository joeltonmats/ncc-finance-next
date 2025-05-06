"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/auth/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="input"
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="input"
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="input"
      />
      <button type="submit" className="btn btn-primary">
        Create Account
      </button>
    </form>
  );
}
