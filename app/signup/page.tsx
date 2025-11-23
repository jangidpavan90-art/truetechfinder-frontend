"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabaseClient";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [method, setMethod] = useState("password");
  const [message, setMessage] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    if (method === "magic") {
      const { error } = await supabase.auth.signInWithOtp({ email });
      setMessage(
        error ? error.message : "Check your email for the login link!"
      );
      return;
    }

    if (!password) {
      setMessage("Please enter a password.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setMessage(error ? error.message : "Signup successful! Check your email.");
  }

  return (
    <div className="min-h-screen px-6 py-20">
      <h1 className="text-4xl font-bold text-center">Create Your Account</h1>

      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-xl shadow">
        <div className="flex justify-center gap-4 mb-6">
          <button
            type="button"
            className={`px-4 py-2 rounded ${
              method === "password"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setMethod("password")}
          >
            Email + Password
          </button>

          <button
            type="button"
            className={`px-4 py-2 rounded ${
              method === "magic"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setMethod("magic")}
          >
            Magic Link
          </button>
        </div>

        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded mb-4 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {method === "password" && (
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded mb-4 text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        {message && (
          <p className="text-center text-sm text-gray-700 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}
