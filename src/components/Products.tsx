const products = [
  {
    title: "JESA Uganda",
    desc: "A corporate website showcasing JESA’s wide range of dairy products, company heritage, and commitment to quality, turning a family-owned business into a flagship East African brand.",
    tech: ["WordPress"],
    link: "https://jesa.co.ug/",
  },
  {
    title: "Emrich Agro",
    desc: "A platform highlighting sustainable agricultural practices and community-driven projects, designed to engage Ugandan farmers and promote eco-friendly farming methods.",
    tech: ["WordPress"],
    link: "https://emrichagro.com/",
  },
  {
    title: "Poppi",
    desc: "A modern marketing website telling the story of Poppi’s innovative, prebiotic soda, its national expansion, and brand identity, connecting with consumers through engaging visuals and content.",
    tech: ["WordPress"],
    link: "https://drinkpoppi.com/",
  },
  {
    title: "Edge Foods Uganda",
    desc: "A website representing a leading food company, focused on product presentation, distribution information, and positioning the brand as a reliable supplier in a competitive market.",
    tech: ["WordPress"],
    link: "https://edgefoodsuganda.com/",
  },
  {
    title: "Schools Uganda",
    desc: "An educational directory platform helping users discover and explore schools across Uganda, providing structured information to support informed decision-making for parents and students.",
    tech: ["WordPress"],
    link: "https://schoolsuganda.com/",
  },
  {
    title: "All Events Uganda",
    desc: "A central hub for discovering, promoting, and sharing events nationwide, helping organizers reach audiences while connecting people with Uganda’s vibrant entertainment and lifestyle scene.",
    tech: ["WordPress"],
    link: "https://allevents.ug/",
  },
  {
    title: "JK Events 256",
    desc: "A professional events website showcasing JK Events 256’s expertise in weddings, corporate events, and parties, highlighting photography, videography, and premium services.",
    tech: ["WordPress"],
    link: "https://jkevents256.com/",
  },
  {
    title: "Into Africa Safaris",
    desc: "A tourism website presenting personalized safari experiences across East Africa, featuring cultural tours, wildlife expeditions, and expert-guided adventures for international and local tourists.",
    tech: ["WordPress"],
    link: "https://intoafricasafaris.net/",
  },
];

export default function Products() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-center font-bold mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-2xl"
            >
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-primary hover:underline"
                >
                  View Case Study →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
