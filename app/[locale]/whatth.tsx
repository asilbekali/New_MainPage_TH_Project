"use client";

import TiltedCard from "@/components/TiltedCard";

const WhatSection = () => {
  return (
    <section className="w-full py-24 px-6 text-white flex flex-col items-center overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/10 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-4xl text-center mb-16 md:mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
          Two Sides. <span className="text-blue-400">One Intelligent Platform.</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
          Ta’limHub connects educators and students in one AI-powered ecosystem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-6xl justify-items-center relative z-10">
        
        {/* FOR EDUCATORS CARD */}
        <TiltedCard
          imageSrc="/onlineT.jpg" 
          altText="For Educators"
          containerHeight="420px" // Mobil uchun balandlik
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={10} 
          scaleOnHover={1.02}
          showTooltip={false}
          displayOverlayContent
          overlayContent={
            // p-6 mobil uchun, md:p-10 desktop uchun
            <div className="flex flex-col h-full w-full justify-between rounded-2xl p-6 md:p-10 border border-white/10 group transform-style-3d z-10 relative">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 uppercase tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                  For Educators
                </h3>
                <p className="text-gray-200 mb-4 text-base md:text-lg leading-relaxed">
                  Teach Globally, Dub Automatically. Expand your reach with AI dubbing technology.
                </p>
              </div>

              <div className="flex flex-col items-center gap-5 mb-6 text-center flex-1 justify-center relative">
                <div className="flex items-center gap-1.5 text-yellow-400 text-lg md:text-xl font-medium transform-[translateZ(30px)] shadow-lg shadow-black/20 p-2 rounded-lg backdrop-blur-sm bg-black/30">
                  <span className="text-white">4.9</span>
                  {"★".repeat(5)}
                  <span className="text-gray-300 text-sm ml-1.5">(Rating)</span>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center text-purple-400 backdrop-blur-sm bg-purple-950/20 group-hover:scale-110 group-hover:border-purple-500/60 transition-all duration-300 transform-[translateZ(50px)]">
                  <svg className="w-7 h-7 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>

              <button className="w-full px-6 py-3.5 md:px-8 md:py-4 border border-white/40 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform group-hover:-translate-y-1">
                Start Teaching
              </button>
            </div>
          }
        />

        {/* FOR STUDENTS CARD */}
        <TiltedCard
          imageSrc="/onlineS.jpg" 
          altText="For Students"
          containerHeight="420px"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={10}
          scaleOnHover={1.02}
          showTooltip={false}
          displayOverlayContent
          overlayContent={
            <div className="flex flex-col h-full w-full justify-between rounded-2xl p-6 md:p-10 border border-white/10 group transform-style-3d z-10 relative">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 uppercase tracking-wide group-hover:text-blue-300 transition-colors duration-300">
                  For Students
                </h3>
                <p className="text-gray-200 mb-4 text-base md:text-lg leading-relaxed">
                  Global Courses, Local Sound. Access world-class education in your native language.
                </p>
              </div>

              <div className="flex flex-col items-center gap-5 mb-6 text-center flex-1 justify-center relative">
                <div className="flex items-center gap-1.5 text-yellow-400 text-lg md:text-xl font-medium transform-[translateZ(30px)] shadow-lg shadow-black/20 p-2 rounded-lg backdrop-blur-sm bg-black/30">
                  <span className="text-white">4.9</span>
                  {"★".repeat(5)}
                  <span className="text-gray-300 text-sm ml-1.5">by 10k+ Students</span>
                </div>
              </div>

              <button className="w-full px-6 py-3.5 md:px-8 md:py-4 bg-blue-600 rounded-full text-base md:text-lg font-semibold hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all duration-300 transform group-hover:-translate-y-1">
                Start Learning
              </button>
            </div>
          }
        />
      </div>
    </section>
  );
};

export default WhatSection;