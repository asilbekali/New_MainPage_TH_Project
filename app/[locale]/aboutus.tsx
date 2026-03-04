"use client";

import React from "react";
import CardSwap, { Card } from "@/components/cards";
import { Languages, Globe, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-900 text-white overflow-hidden">
      
      {/* Left Side */}
      <div className="z-10 max-w-xl text-center md:text-left mb-12 md:mb-0">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Learn Without Language Barriers
        </h2>
        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          Ta’limHub uses AI-powered dubbing technology to make education 
          accessible in your native language. Discover global knowledge 
          without limits.
        </p>
        <button className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300">
          Start Learning
        </button>
      </div>

      {/* Right Side */}
      <div className="relative w-full h-125 md:w-1/2 flex items-center justify-center mr-12">

        <CardSwap
          width={350}
          height={450}
          cardDistance={40}
          verticalDistance={50}
          delay={2700}
          pauseOnHover={true}
          skewAmount={4}
        >

          {/* Card 1 */}
          <Card className="flex flex-col items-center justify-center p-8 text-center shadow-2xl bg-black">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-500/20 rounded-full mb-6">
              <Languages className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              AI Powered Dubbing
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Learn any course in your native language. Our AI translates 
              and voices lessons naturally.
            </p>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col items-center justify-center p-8 text-center shadow-2xl bg-black">
            <div className="w-16 h-16 flex items-center justify-center bg-purple-500/20 rounded-full mb-6">
              <Globe className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Borderless Learning
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Access global educators without language barriers. 
              One platform. Unlimited knowledge.
            </p>
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col items-center justify-center p-8 text-center shadow-2xl bg-black">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500/20 rounded-full mb-6">
              <Brain className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Smart Education Ecosystem
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Personalized learning paths, progress tracking, and 
              intelligent recommendations powered by AI.
            </p>
          </Card>

        </CardSwap>
      </div>
    </section>
  );
};

export default AboutSection;