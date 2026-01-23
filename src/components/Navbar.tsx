"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* <span className=""> */}
        <a
          href="#home"
          className="hover:text-primary text-xl font-bold tracking-tighter transition-colors"
        >
          {" "}
          SSEWAGUDDE DAVID
        </a>
        {/* </span> */}

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Featured Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-white dark:bg-slate-950 p-6 border-b md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a href="#skills" onClick={() => setIsOpen(false)}>
                Skills
              </a>
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Featured Projects
              </a>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
