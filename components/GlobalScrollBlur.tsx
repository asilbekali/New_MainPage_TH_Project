"use client";

import { useEffect, useState } from "react";
import GradualBlurMemo from "./bloor";

export default function GlobalScrollBlur() {
  const [showBlur, setShowBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Pastki qismga yaqinlashganda blur chiqadi
      const distanceFromBottom = fullHeight - (scrollTop + windowHeight);

      // 220px qolganda blur ko‘rina boshlaydi
      setShowBlur(distanceFromBottom < 220);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-0 left-0 z-[999] w-full h-[120px] overflow-hidden transition-all duration-500 ${
        showBlur ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <GradualBlurMemo
        target="parent"
        position="bottom"
        height="100%"
        strength={2}
        divCount={6}
        curve="bezier"
        exponential
        opacity={1}
      />
    </div>
  );
}