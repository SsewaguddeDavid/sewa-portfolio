"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Copy, Check, Loader2 } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const email = "dsewagude10@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    // ✅ Web3Forms required fields
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY as string,
    );
    formData.append("subject", "New Portfolio Inquiry");
    formData.append("from_name", "Portfolio Website");

    console.log(process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Left Side: Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Let's build something{" "}
              <span className="text-primary">remarkable.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Whether you need a high-end Next.js application, a custom
              WordPress ecosystem, or a complete design overhaul—I'm ready to
              help.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative group overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Mail size={24} />
                </div>
                <span className="font-semibold">Email Me</span>
              </div>
              <div className="flex items-center justify-between bg-white dark:bg-black p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                <code className="text-sm md:text-base">{email}</code>
                <button
                  onClick={copyEmail}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check size={18} className="text-secondary" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6">
              <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                  Available Mon - Fri
                </p>
                <p className="font-semibold">(+256) 701311907</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 🛡️ Honeypot (anti-spam) */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Your Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">
                  Email Address
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">
                What service are you looking for?
              </label>
              <select
                name="service"
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
              >
                <option>Next.js Web Application</option>
                <option>Custom WordPress Development</option>
                <option>UI/UX Product Design</option>
                <option>Full-Stack Project</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">
                Project Details
              </label>
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Tell me about your project goals..."
                className="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="w-full py-5 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-3 hover:bg-primary/90 transition-all disabled:opacity-70"
            >
              {status === "success" ? (
                <>
                  Success! I'll be in touch <Check />
                </>
              ) : status === "sending" ? (
                <>
                  Sending... <Loader2 className="animate-spin" size={18} />
                </>
              ) : status === "error" ? (
                "Something went wrong. Try again."
              ) : (
                <>
                  Send Inquiry <Send size={18} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
