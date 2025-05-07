"use client";

import { BUTTON_CONSTANTS, ROUTE_CONSTANTS } from "@/constants";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAttempt = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: ROUTE_CONSTANTS.dashboard,
    });
  };

  return (
    <form onSubmit={loginAttempt} className="space-y-4 p-6">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <button type="submit" className="btn btn-primary">
        {BUTTON_CONSTANTS.login}
      </button>
    </form>
  );
}
