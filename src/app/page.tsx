"use client";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Products from "@/components/Products";

import Contact from "@/components/Contact";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <Hero />

      <Skills />
      <Products />
      <Contact />

      {/* Footer */}
      <footer className="py-10 text-center border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500">
        © {new Date().getFullYear()} Ssewagudde David
      </footer>
    </main>
  );
}
