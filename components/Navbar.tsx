"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabaseClient";
import type { User } from "@supabase/supabase-js";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        TrueTechFinder
      </Link>

      <div className="flex gap-6 text-gray-700 items-center">
        <Link href="/pricing" className="hover:text-blue-600">
          Pricing
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
        <Link href="/blog" className="hover:text-blue-600">
          Blog
        </Link>

        {!user ? (
          <>
            <Link href="/login" className="hover:text-blue-600">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="text-red-500 hover:text-red-700"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
