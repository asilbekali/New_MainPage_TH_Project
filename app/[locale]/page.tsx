"use client";

import Hero from "@/components/hero";
import AboutSection from "./aboutus";
import WhatSection from "./whatth";
import FeaturesSection from "./features";
import Footer from "./footer";


export default function Home() {
  return (
    <main>
      <section className="mb-25" id="hero">
        <Hero />
      </section>
      
      <section id="aboutus">
        <AboutSection />
      </section>
      
      <section id="whatth">
        <WhatSection />
      </section>
      
      <section id="features">
        <FeaturesSection />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </main>
  );
}