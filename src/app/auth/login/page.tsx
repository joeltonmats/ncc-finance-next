"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", { email, password, callbackUrl: "/dashboard" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
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
        Login
      </button>
    </form>
  );
}

/**
 * snippet: logout
 
 import { signOut } from 'next-auth/react';

<button onClick={() => signOut({ callbackUrl: '/' })}>Logout</button> 
 */
