"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Loader2,
  Mail,
  Phone,
  User,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
        }),
      });

      if (response.ok) {
        setStatus("success");
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <footer className="relative w-full px-6 pb-10 pt-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left Content */}
            <div className="relative p-8 sm:p-10 lg:p-14">
              <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
                    <img
                      src="/logo.svg"
                      alt="Ta'limHub logo"
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <div className="h-10 w-px bg-white/10" />

                  <div>
                    <h2 className="text-2xl font-semibold tracking-wide sm:text-3xl">
                      Ta&apos;limHub
                    </h2>
                    <p className="mt-1 text-sm text-slate-300 italic">
                      No limits to learning
                    </p>
                  </div>
                </div>

                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300">
                  <Sparkles className="h-4 w-4" />
                  Student-focused learning platform
                </div>

                <h3 className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
                  Start your future
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                    {" "}
                    stronger today
                  </span>
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  Ta&apos;limHub creates a modern, simple, and effective
                  educational experience for students. Courses, mentorship, 
                  practical direction, and smart learning all in one place.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm font-medium text-white">
                      Quick Contact
                    </p>
                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      Our team will contact you to provide information about the 
                      platform and opportunities.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-sm font-medium text-white">
                      Student-centric Approach
                    </p>
                    <p className="mt-1 text-xs leading-6 text-slate-400">
                      User-friendly UX, clear direction, and a highly beneficial 
                      learning flow for every student.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Form */}
            <div className="border-t border-white/10 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
              >
                <div className="mb-6">
                  <h4 className="text-2xl font-semibold">Contact Us</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Leave your name, phone number, and email address. 
                    We will get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 focus-within:border-cyan-400/40 focus-within:bg-white/[0.07]">
                    <User className="h-4 w-4 text-slate-400 transition-colors group-focus-within:text-cyan-300" />
                    <input
                      required
                      name="name"
                      placeholder="Full Name"
                      className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
                    />
                  </div>

                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 focus-within:border-cyan-400/40 focus-within:bg-white/[0.07]">
                    <Phone className="h-4 w-4 text-slate-400 transition-colors group-focus-within:text-cyan-300" />
                    <input
                      required
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
                    />
                  </div>

                  <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-300 focus-within:border-cyan-400/40 focus-within:bg-white/[0.07]">
                    <Mail className="h-4 w-4 text-slate-400 transition-colors group-focus-within:text-cyan-300" />
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(34,211,238,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Join Ta&apos;limHub
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>

                  <div className="min-h-[20px] pt-1 text-center">
                    {status === "success" && (
                      <p className="text-xs text-cyan-300">
                        Success! We will contact you shortly.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-xs text-rose-300">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </div>

                  <p className="text-center text-[11px] leading-5 text-slate-500">
                    By clicking the button, you agree to be contacted by Ta&apos;limHub.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom area */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a href="#" className="transition-colors hover:text-white">
              About
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Courses
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Careers
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms & Conditions
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Send className="h-3.5 w-3.5" />
            <span>© {new Date().getFullYear()} Ta&apos;limHub Technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;