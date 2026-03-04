"use client";

import TiltedCard from "@/components/TiltedCard";

const WhatSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-gray-900 text-white flex flex-col items-center">
      
      {/* Header */}
      <div className="max-w-4xl text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Two Sides. <span className="text-blue-400">One Intelligent Platform.</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Ta’limHub connects educators and students in one AI-powered ecosystem.
          Teach globally. Learn without language barriers. Everything in one place.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl justify-items-center">

        {/* For Educators */}
        <TiltedCard
          imageSrc="./onlineT.jpg"
          altText="For Educators"
          captionText="Instructor Dashboard"
          containerHeight="420px"
          containerWidth="100%"
          imageHeight="420px"
          imageWidth="100%"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
          displayOverlayContent
          overlayContent={
            <div className="flex flex-col items-center justify-center h-full bg-black/50 rounded-3xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-6 uppercase tracking-wide">
                For Educators
              </h3>
              <p className="text-gray-300 mb-6">
                Create courses, manage students, and expand globally with AI dubbing.
              </p>
              <button className="px-8 py-3 border border-white/50 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Start Teaching
              </button>
            </div>
          }
        />

        {/* For Students */}
        <TiltedCard
          imageSrc="./onlineS.jpg"
          altText="For Students"
          captionText="Student Learning"
          containerHeight="420px"
          containerWidth="100%"
          imageHeight="420px"
          imageWidth="100%"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
          displayOverlayContent
          overlayContent={
            <div className="flex flex-col items-center justify-center h-full bg-black/50 rounded-3xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-6 uppercase tracking-wide">
                For Students
              </h3>
              <p className="text-gray-300 mb-6">
                Access global courses in your native language powered by AI dubbing.
              </p>
              <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full transition-all duration-300">
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