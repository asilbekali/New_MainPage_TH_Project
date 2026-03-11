"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  MapPin,
  Send,
  Sparkles,
  Globe,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "+998",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "+998",
          email: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10  text-white">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-120px] top-[-120px] h-[260px] w-[260px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-100px] top-[80px] h-[220px] w-[220px] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[30%] h-[260px] w-[260px] rounded-full bg-blue-600/20 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md"
              >
                <Sparkles className="h-4 w-4" />
                Future of Learning Starts Here
              </motion.div>

              <h2 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl">
                Build the next chapter of
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {" "}
                  education
                </span>{" "}
                with Ta&apos;limHub
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Ta&apos;limHub is an education ecosystem that helps learners,
                teachers, and modern institutions connect through scalable
                digital learning experiences, smart tools, and AI-powered
                solutions.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: <Globe className="h-5 w-5" />,
                    title: "Global Learning",
                    text: "Access education without borders",
                  },
                  {
                    icon: <BadgeCheck className="h-5 w-5" />,
                    title: "Trusted Platform",
                    text: "Built for serious growth",
                  },
                  {
                    icon: <Sparkles className="h-5 w-5" />,
                    title: "AI Features",
                    text: "Smarter and faster learning",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                  >
                    <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/10 p-2 text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <motion.div
                whileHover={{ x: 6 }}
                className="flex items-center gap-3 text-slate-300 transition"
              >
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                </div>
                <span>Tashkent, Uzbekistan</span>
              </motion.div>

              <motion.a
                whileHover={{ x: 6 }}
                href="mailto:talimhub1@gmail.com"
                className="flex items-center gap-3 text-slate-300 transition"
              >
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <Mail className="h-5 w-5 text-cyan-300" />
                </div>
                <span>talimhub1@gmail.com</span>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-cyan-500/40 via-blue-500/30 to-violet-500/40 blur-sm" />
            <div className="relative rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Let&apos;s get in touch
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
                    Leave your information and our team will contact you with
                    the right guidance for your learning journey.
                  </p>
                </div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="hidden rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300 sm:block"
                >
                  <Send className="h-5 w-5" />
                </motion.div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="group relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within:text-cyan-300" />
                    <input
                      required
                      type="text"
                      placeholder="First Name"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>

                  <div className="group relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within:text-cyan-300" />
                    <input
                      required
                      type="text"
                      placeholder="Last Name"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="group relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within:text-cyan-300" />
                  <input
                    required
                    type="tel"
                    placeholder="+998901234567"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="group relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within:text-cyan-300" />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400/50 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.015, y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  disabled={loading}
                  className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl py-4 font-bold tracking-wide text-white transition-all duration-300 ${
                    loading
                      ? "cursor-not-allowed bg-slate-600"
                      : "bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                  }`}
                >
                  <span className="absolute inset-0 translate-y-full bg-white/10 transition duration-500 group-hover:translate-y-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? "Sending..." : "Send Request"}
                    {!loading && (
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </span>
                </motion.button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-center text-sm text-emerald-300"
                  >
                    Your request has been sent successfully ✅
                  </motion.p>
                )}

                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-center text-sm text-red-300"
                  >
                    Something went wrong. Please try again ❌
                  </motion.p>
                )}
              </form>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { number: "AI", label: "Powered" },
                  { number: "24/7", label: "Access" },
                  { number: "Smart", label: "Learning" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition"
                  >
                    <div className="text-lg font-extrabold text-white">
                      {item.number}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-400 md:flex-row"
        >
          <p>© 2026 Ta&apos;limHub. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Designed for the future of education</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}