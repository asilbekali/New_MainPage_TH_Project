"use client";

import React from "react";
import CardSwap, { Card } from "@/components/cards";
import { Globe, Brain, UserCheck, Languages } from "lucide-react";

// The universityLogos array has been removed to get rid of university logos.

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-[#16213b] text-white overflow-hidden">
      
      {/* Background glow effects - Retained */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>

      {/* Left Side - Matn va CTA (English text applied) */}
      <div className="z-10 max-w-xl text-center md:text-left mb-12 md:mb-0 relative">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Learn from Anywhere,<br />
          <span className="text-blue-400">Understand Everything.</span>
        </h2>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
          Ta’limHub makes global education accessible in your native language. 
          Unlock knowledge from world-class educators, instantly translated 
          and dubbed by AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <button className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 transform hover:translate-y-[-2px]">
              Start Learning for Free
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-white/20 hover:bg-white/10 rounded-full text-lg font-semibold transition-all duration-300">
              Explore Courses
            </button>
        </div>
      </div>

      {/* Right Side - Interactive 3D Card Stacks (3 cards, English text, no logos) */}
      <div className="relative w-full h-125 md:w-1/2 flex items-center justify-center mr-12 relative z-10 group">

        <CardSwap
          width={380} // Optimal width for 3 cards
          height={480} // Optimal height for 3 cards
          cardDistance={35} // Reduced distance between stacks
          verticalDistance={40}
          delay={4000} // Slow swap speed for readability
          pauseOnHover={true}
          skewAmount={3} // Slight skew for depth
        >

          {/* --- Card 1 (Top): AI Dubbing and Global Knowledge --- */}
          <Card className="flex flex-col items-center justify-between p-10 text-center shadow-2xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl group">
             {/* Upper part - Title and Description (English text) */}
            <div>
              <div className="w-16 h-16 flex items-center justify-center bg-blue-500/10 rounded-full mb-6 mx-auto border border-blue-500/20">
                <Languages className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider group-hover:text-purple-300 transition-colors">
                 AI-Powered Dubbing
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                Unlock global knowledge. Access top courses from Ivy League and world-class universities, 
                instantly voiced in your native language by advanced AI.
              </p>
            </div>

            {/* Central interactive element - Gamification */}
            <div className="flex-1 flex items-center justify-center my-6 relative">
                <div className="w-16 h-16 rounded-full border-2 border-purple-500/30 flex items-center justify-center text-purple-400 backdrop-blur-sm bg-purple-950/20 group-hover:scale-110 group-hover:border-purple-500/60 transition-all duration-500 shadow-lg shadow-purple-500/20">
                   <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                 {/* Glowing background simulated */}
                <div className="absolute inset-0 w-32 h-32 bg-purple-900/10 rounded-full blur-[32px] pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity mx-auto"></div>
            </div>

            {/* Bottom CTA Button */}
            <button className="w-full px-8 py-3.5 border border-white/40 rounded-full text-base font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform group-hover:translate-y-[-2px]">
              Find your Language
            </button>
          </Card>

          {/* --- Card 2 (Middle): Borderless Knowledge (English text, no logos) --- */}
          <Card className="flex flex-col items-center justify-between p-10 text-center shadow-2xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl group">
            {/* Upper part - Title and Description (English text) */}
            <div>
              <div className="w-16 h-16 flex items-center justify-center bg-purple-500/10 rounded-full mb-6 mx-auto border border-purple-500/20">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider group-hover:text-blue-300 transition-colors">
                Borderless Knowledge
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                 Don't just watch, fully engage. Access over 50+ languages with native-level AI voiceover.
                 Learn without limits from the very best, anywhere.
              </p>
            </div>

            {/* Social Proof - Rating only (University logos removed) */}
            <div className="flex flex-col items-center justify-center gap-4 my-6">
                {/* Rating */}
                <div className="flex items-center gap-1.5 text-yellow-400 text-xl font-semibold backdrop-blur-sm bg-black/30 p-2 rounded-lg border border-white/10">
                  <span className="text-white">4.9</span>
                  {"★".repeat(5)}
                  <span className="text-gray-300 text-sm ml-1.5">(Rating)</span>
                </div>
                {/* University logos sections has been removed here. */}
            </div>

            {/* Bottom CTA Button (Yorqinroq) */}
            <button className="w-full px-8 py-3.5 bg-blue-600 rounded-full text-base font-semibold hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all duration-300 transform group-hover:translate-y-[-2px]">
              Start Learning
            </button>
          </Card>

          {/* --- Card 3 (Bottom): Smart Ecosystem, Personalization (English text) --- */}
          <Card className="flex flex-col items-center justify-between p-10 text-center shadow-2xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl group">
             {/* Upper part - Title and Description (English text applied) */}
            <div>
              <div className="w-16 h-16 flex items-center justify-center bg-green-500/10 rounded-full mb-6 mx-auto border border-green-500/20">
                <Brain className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wider group-hover:text-green-300 transition-colors">
                 Smart Learning Paths
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                 Your education, personalized. Real-time progress tracking, AI-powered course recommendations,
                 and personal development paths integrated with your goals.
              </p>
            </div>

            {/* Central interactive element - Profile Checkmark */}
            <div className="flex-1 flex items-center justify-center my-6 relative">
                 {/* Profile/Checkmark interaction simulated vizual */}
                <div className="w-16 h-16 rounded-full border-2 border-green-500/30 flex items-center justify-center text-green-400 backdrop-blur-sm bg-green-950/20 group-hover:scale-110 group-hover:border-green-500/60 transition-all duration-500 shadow-lg shadow-green-500/20">
                   <UserCheck className="w-8 h-8" />
                </div>
                 {/* Glowing background simulated */}
                <div className="absolute inset-0 w-32 h-32 bg-green-900/10 rounded-full blur-[32px] pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity mx-auto"></div>
            </div>

            {/* Bottom CTA Button */}
            <button className="w-full px-8 py-3.5 border border-white/40 rounded-full text-base font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-300 transform group-hover:translate-y-[-2px]">
              Track Progress
            </button>
          </Card>

        </CardSwap>
      </div>
    </section>
  );
};

export default AboutSection;