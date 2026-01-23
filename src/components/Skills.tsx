import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: "Expert" },
  { name: "React", level: "Expert" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "WordPress / Headless WP", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Figma (UI/UX Design)", level: "Advanced" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Technical Expertise
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-4  md:p-6 rounded-xl text-center md:text-left border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
          >
            <h3 className="font-semibold text-md md:text-lg">{skill.name}</h3>
            <p className="text-sm text-primary">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
