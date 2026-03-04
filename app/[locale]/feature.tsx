"use client";

import React from "react";
import { Video, PlayCircle, Languages } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">
            Powerful <span className="text-cyan-400">Learning Features</span>
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Learn live with instructors and never miss a lesson again.
          </p>
        </div>

        {/* Main container */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE — Images */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="/onlineT.jpg"
              className="rounded-2xl h-[220px] object-cover w-full"
              alt="Online class"
            />

            <img
              src="/onlineS.jpg"
              className="rounded-2xl h-[220px] object-cover w-full"
              alt="Student learning"
            />

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="rounded-2xl h-[220px] object-cover w-full"
              alt="Group learning"
            />

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              className="rounded-2xl h-[220px] object-cover w-full"
              alt="Online study"
            />
          </div>

          {/* RIGHT SIDE — TEXT */}
          <div className="space-y-10">

            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Learn live and revisit lessons anytime
            </h3>

            <div className="space-y-8">

              {/* Online classes */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20">
                  <Video className="w-6 h-6 text-blue-300" />
                </div>

                <p className="text-gray-300 text-lg">
                  Join live online classes and learn together with other students in real time.
                </p>
              </div>

              {/* Recorded lessons */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20">
                  <PlayCircle className="w-6 h-6 text-purple-300" />
                </div>

                <p className="text-gray-300 text-lg">
                  Every lesson is automatically recorded so you can rewatch it anytime you want.
                </p>
              </div>

              {/* AI dubbing */}
              <div className="flex gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/20">
                  <Languages className="w-6 h-6 text-cyan-300" />
                </div>

                <p className="text-gray-300 text-lg">
                  AI dubbing removes language barriers so students can understand lessons clearly.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;