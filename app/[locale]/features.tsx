"use client";

import React from "react";
import { Video, PlayCircle, Languages } from "lucide-react";
import ChromaGrid, { ChromaItem } from "@/components/animeCard";
import { useTranslations, useLocale } from "next-intl";

const FeaturesSection = () => {
  const t = useTranslations("feature");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const items: ChromaItem[] = [
    {
      image: "/onlineT.jpg",
      title: t("grid.card1.title"),
      subtitle: t("grid.card1.subtitle"),
      handle: t("grid.card1.handle"),
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "#",
    },
    {
      image: "/onlineS.jpg",
      title: t("grid.card2.title"),
      subtitle: t("grid.card2.subtitle"),
      handle: t("grid.card2.handle"),
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      title: t("grid.card3.title"),
      subtitle: t("grid.card3.subtitle"),
      handle: t("grid.card3.handle"),
      borderColor: "#A855F7",
      gradient: "linear-gradient(160deg, #A855F7, #000)",
      url: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
      title: t("grid.card4.title"),
      subtitle: t("grid.card4.subtitle"),
      handle: t("grid.card4.handle"),
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "#",
    },
  ];

  return (
    <section className="w-full py-20 md:py-28 px-4 md:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16" dir={isArabic ? "rtl" : "ltr"}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t("titleLine1")} <span className="text-cyan-400">{t("titleHighlight")}</span>
          </h2>
          <p className="text-gray-300 mt-4 text-base md:text-lg max-w-3xl mx-auto">
            {t("description")}
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
          <div className="space-y-8 md:space-y-10 pt-10" dir={isArabic ? "rtl" : "ltr"}>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              {t("rightTitleLine1")}{" "}
              <span className="text-cyan-400">{t("rightTitleHighlight")}</span>
            </h3>

            <p className="text-gray-300 text-base md:text-lg">
              {t("rightDescription")}
            </p>

            <div className="space-y-6 md:space-y-8">
              {/* Live online classes */}
              <div className="flex gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-blue-500/20 shrink-0">
                  <Video className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base md:text-lg">
                    {t("points.live.title")}
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    {t("points.live.desc")}
                  </p>
                </div>
              </div>

              {/* Replay live group lessons */}
              <div className="flex gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-green-500/20 shrink-0">
                  <PlayCircle className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base md:text-lg">
                    {t("points.replayGroup.title")}
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    {t("points.replayGroup.desc")}
                  </p>
                </div>
              </div>

              {/* Auto-record & replay */}
              <div className="flex gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-purple-500/20 shrink-0">
                  <PlayCircle className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base md:text-lg">
                    {t("points.autoRecord.title")}
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    {t("points.autoRecord.desc")}
                  </p>
                </div>
              </div>

              {/* AI dubbing */}
              <div className="flex gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-cyan-500/20 shrink-0">
                  <Languages className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base md:text-lg">
                    {t("points.aiDubbing.title")}
                  </p>
                  <p className="text-gray-300 text-sm md:text-base mt-1">
                    {t("points.aiDubbing.desc")}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm">
              {t("bottomNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;