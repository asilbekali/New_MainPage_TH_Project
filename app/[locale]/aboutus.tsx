import CardSwap, { Card } from '@/components/cards';
import React from 'react';

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-900 text-white overflow-hidden">
      
      {/* Left Side: Content */}
      <div className="z-10 max-w-xl">
        <h2 className="text-5xl font-bold mb-6">Our Creative Journey</h2>
        <p className="text-lg text-gray-400 mb-8">
          We believe in pushing the boundaries of digital interaction. 
          Our team blends code and aesthetics to create experiences that 
          don't just work—they feel alive.
        </p>
        <button className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all">
          Learn More
        </button>
      </div>

      {/* Right Side: The Card Swap Animation */}
      <div className="relative w-full h-125 md:w-1/2 flex items-center justify-center mr-12">
        <CardSwap
          width={350}
          height={450}
          cardDistance={40}
          verticalDistance={50}
          delay={2500}
          pauseOnHover={true}
        >
          {/* Card 1 */}
          <Card className="flex flex-col items-center justify-center p-6 text-center shadow-2xl">
             <div className="w-16 h-16 bg-blue-500 rounded-full mb-4"></div>
             <h3 className="text-xl font-semibold">Innovation</h3>
             <p className="text-sm text-gray-400 mt-2">Always staying ahead of the curve with the latest tech.</p>
          </Card>

          {/* Card 2 */}
          <Card className="flex flex-col items-center justify-center p-6 text-center shadow-2xl">
             <div className="w-16 h-16 bg-purple-500 rounded-full mb-4"></div>
             <h3 className="text-xl font-semibold">Design</h3>
             <p className="text-sm text-gray-400 mt-2">Crafting pixel-perfect interfaces for every screen.</p>
          </Card>

          {/* Card 3 */}
          <Card className="flex flex-col items-center justify-center p-6 text-center shadow-2xl">
             <div className="w-16 h-16 bg-green-500 rounded-full mb-4"></div>
             <h3 className="text-xl font-semibold">Stability</h3>
             <p className="text-sm text-gray-400 mt-2">Building robust systems that stand the test of time.</p>
          </Card>
        </CardSwap>
      </div>
    </section>
  );
};
 
export default AboutSection;