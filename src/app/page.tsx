"use client";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Products from "@/components/Products";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Web Designer & <span className="text-primary">Developer.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Specializing in high-performance **Next.js** applications and
            bespoke **WordPress** experiences that scale.
          </motion.p>
          <div className="flex justify-center gap-4">
            <button className="bg-primary hover:bg-blue-600 text-white px-4 py-1.5 md:px-8 md:py-3 rounded-full font-medium transition-all">
              View Products
            </button>
            <button className="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3 rounded-full font-medium transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

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
