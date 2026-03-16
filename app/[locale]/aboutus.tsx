"use client";

import React, { useState } from "react";
import CardSwap, { Card } from "@/components/cards";
import { Globe, Brain, UserCheck, Languages } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("about");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleComingSoon = () => {
    setShowComingSoon(true);

    setTimeout(() => {
      setShowComingSoon(false);
    }, 2500);
  };

  return (
    <section className="relative w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 md:py-24 text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-64 h-64 md:w-96 md:h-96 bg-purple-900/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-900/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none"></div>

      {/* Left Side - Text and CTA */}
      <div className="z-10 max-w-xl text-center md:text-left mb-16 md:mb-0 relative">
        <div dir={isArabic ? "rtl" : "ltr"}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            {t("titleLine1")}
            <br />
            <span className="text-blue-400">{t("titleLine2")}</span>
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
            {t("description")}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
          <button
            onClick={handleComingSoon}
            className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-600/20 transform hover:translate-y-[-2px]"
          >
            {t("startLearning")}
          </button>

          <button
            onClick={handleComingSoon}
            className="w-full sm:w-auto px-10 py-4 border border-white/20 hover:bg-white/10 rounded-full text-lg font-semibold transition-all duration-300"
          >
            {t("exploreCourses")}
          </button>
        </div>

        {showComingSoon && (
          <p className="mt-4 text-cyan-300 text-sm font-medium animate-pulse">
            Coming soon — our web platform is not ready yet.
          </p>
        )}
      </div>

      {/* Right Side - Interactive Card Stacks */}
      <div className="relative w-full h-[550px] sm:h-[600px] md:w-1/2 flex items-center justify-center z-10">
        <div className="scale-100 md:scale-100 transition-transform duration-500 w-full flex justify-center">
          <CardSwap
            width={480}
            height={580}
            cardDistance={30}
            verticalDistance={35}
            delay={4000}
            pauseOnHover={true}
            skewAmount={3}
          >
            {/* Card 1 */}
            <Card className="flex flex-col items-center justify-between p-8 md:p-10 text-center shadow-2xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl group w-full">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-blue-500/10 rounded-full mb-6 mx-auto border border-blue-500/20">
                  <Languages className="w-8 h-8 text-blue-400" />
                </div>

                <div dir={isArabic ? "rtl" : "ltr"}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider group-hover:text-purple-300 transition-colors">
                    {t("card1.title")}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed px-2">
                    {t("card1.desc")}
                  </p>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center my-6 relative">
                <div className="w-16 h-16 rounded-full border-2 border-purple-500/30 flex items-center justify-center text-purple-400 backdrop-blur-sm bg-purple-950/20 group-hover:scale-110 group-hover:border-purple-500/60 transition-all duration-500">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <button
                onClick={handleComingSoon}
                className="w-full px-8 py-3.5 border border-white/40 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all"
              >
                {t("card1.button")}
              </button>
            </Card>

            {/* Card 2 */}
            <Card className="flex flex-col items-center justify-between p-8 md:p-10 text-center shadow-2xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl group w-full">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-purple-500/10 rounded-full mb-6 mx-auto border border-purple-500/20">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>

                <div dir={isArabic ? "rtl" : "ltr"}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider group-hover:text-blue-300 transition-colors">
                    {t("card2.title")}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed px-2">
                    {t("card2.desc")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 my-6">
                <div className="flex items-center gap-1.5 text-yellow-400 text-xl font-semibold backdrop-blur-sm bg-black/30 p-2 rounded-lg border border-white/10">
                  <span className="text-white text-lg">4.9</span>
                  {"★".repeat(5)}
                </div>
              </div>

              <button
                onClick={handleComingSoon}
                className="w-full px-8 py-3.5 bg-blue-600 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all"
              >
                {t("card2.button")}
              </button>
            </Card>

            {/* Card 3 */}
            <Card className="flex flex-col items-center justify-between p-8 md:p-10 text-center shadow-2xl bg-black/40 backdrop-blur-md border border-white/10 rounded-3xl group w-full">
              <div>
                <div className="w-16 h-16 flex items-center justify-center bg-green-500/10 rounded-full mb-6 mx-auto border border-green-500/20">
                  <Brain className="w-8 h-8 text-green-400" />
                </div>

                <div dir={isArabic ? "rtl" : "ltr"}>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-wider group-hover:text-green-300 transition-colors">
                    {t("card3.title")}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed px-2">
                    {t("card3.desc")}
                  </p>
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center my-6">
                <div className="w-16 h-16 rounded-full border-2 border-green-500/30 flex items-center justify-center text-green-400 backdrop-blur-sm bg-green-950/20 group-hover:scale-110 group-hover:border-green-500/60 transition-all">
                  <UserCheck className="w-8 h-8" />
                </div>
              </div>

              <button
                onClick={handleComingSoon}
                className="w-full px-8 py-3.5 border border-white/40 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition-all"
              >
                {t("card3.button")}
              </button>
            </Card>
          </CardSwap>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;