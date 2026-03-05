"use client";

import React from "react";
import { Video, PlayCircle, Languages, Sparkles } from "lucide-react";
import ChromaGrid, { ChromaItem } from "@/components/animeCard";

const items: ChromaItem[] = [
  {
    image: "/onlineT.jpg",
    title: "Live Interactive Classes",
    subtitle: "Join real-time sessions with instructors and learn by doing.",
    handle: "Realtime",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "#",
  },
  {
    image: "/onlineS.jpg",
    title: "Personalized Progress",
    subtitle: "Smart tracking + recommendations tailored to your goals.",
    handle: "Personalized",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    title: "Community & Mentors",
    subtitle: "Get feedback and grow faster together.",
    handle: "Support",
    borderColor: "#A855F7",
    gradient: "linear-gradient(160deg, #A855F7, #000)",
    url: "#",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
    title: "AI Dubbing",
    subtitle: "Understand lessons in your own language — no barriers.",
    handle: "Multilang",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #000)",
    url: "#",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-20 md:py-28 px-4 md:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Built for <span className="text-cyan-400">Real Learning</span>
          </h2>
          <p className="text-gray-300 mt-4 text-base md:text-lg max-w-3xl mx-auto">
            Ta&apos;limHub blends live education, replays, and AI language technology to help you learn faster and
            remember longer.
          </p>
        </div>

        {/* Main container */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* LEFT — ChromaGrid */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6">
              <ChromaGrid
                items={items}
                radius={260}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>

          {/* RIGHT — Text */}
          <div className="space-y-8 md:space-y-10 pt-10">
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              Learn live. Replay anytime. <span className="text-cyan-400">Understand in any language.</span>
            </h3>

            <p className="text-gray-300 text-base md:text-lg">
              Every feature is designed to move you from “watching” to “skills”. Less confusion, more progress.
            </p>

            <div className="space-y-6 md:space-y-8">
              {/* Live online classes */}
              <div className="flex gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-blue-500/20">
                  <Video className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base md:text-lg">
                    Live online classes
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    Ask questions instantly, practice together, and learn with structure.
                  </p>
                </div>
              </div>

              {/* ✅ NEW: Replay group lessons */}
              <div className="flex gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-green-500/20">
                  <PlayCircle className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base md:text-lg">
                    Replay live group lessons
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    Every group class is recorded, so you can rewatch it anytime and never miss key details.
                  </p>
                </div>
              </div>

              {/* Auto-record & replay */}
              <div className="flex gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-purple-500/20">
                  <PlayCircle className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base md:text-lg">
                    Auto-record & replay
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    Rewatch lessons whenever you need — perfect for revision and note-taking.
                  </p>
                </div>
              </div>

              {/* AI dubbing */}
              <div className="flex gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-cyan-500/20">
                  <Languages className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base md:text-lg">
                    AI dubbing (multi-language)
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    Language is no longer a blocker — focus on the meaning, not translation.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              Goal: help every student understand clearly, practice consistently, and turn learning into real skill.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;