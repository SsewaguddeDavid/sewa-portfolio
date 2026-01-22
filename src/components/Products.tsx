const products = [
  {
    title: "JESA Uganda",
    desc: "A professional corporate website designed to showcase engineering services, projects, and company profile.",
    tech: ["WordPress"],
    link: "https://jesa.co.ug/",
  },
  {
    title: "Hariss International",
    desc: "A large-scale corporate website built to represent a multinational brand and its diverse business divisions.",
    tech: ["WordPress"],
    link: "https://www.harissint.com/home",
  },
  {
    title: "Emrich Agro",
    desc: "An agribusiness website focused on promoting agricultural products, operations, and company values.",
    tech: ["WordPress"],
    link: "https://emrichagro.com/",
  },
  {
    title: "Poppi",
    desc: "A modern, product-driven marketing website highlighting brand identity, product benefits, and customer engagement.",
    tech: ["WordPress"],
    link: "https://drinkpoppi.com/",
  },
  {
    title: "Edge Foods Uganda",
    desc: "A brand-focused food company website designed to present products, distribution, and company information.",
    tech: ["WordPress"],
    link: "https://edgefoodsuganda.com/",
  },
  {
    title: "Sadja Web Solutions",
    desc: "An agency portfolio website showcasing services, past projects, and digital solutions expertise.",
    tech: ["WordPress"],
    link: "https://sadjawebsolutions.com",
  },
  {
    title: "Schools Uganda",
    desc: "An education directory platform built to help users discover and explore schools across Uganda.",
    tech: ["WordPress"],
    link: "https://schoolsuganda.com/",
  },
  {
    title: "All Events Uganda",
    desc: "An events listing platform designed to promote, discover, and share events happening across the country.",
    tech: ["WordPress"],
    link: "https://allevents.ug/",
  },
  {
    title: "JK Events 256",
    desc: "An entertainment and events website built to highlight shows, promotions, and upcoming experiences.",
    tech: ["WordPress"],
    link: "https://jkevents256.com/",
  },
  {
    title: "Into Africa Safaris",
    desc: "A tourism website designed to showcase safari packages, destinations, and travel experiences in Africa.",
    tech: ["WordPress"],
    link: "https://intoafricasafaris.net/",
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-black/20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl text-center font-bold mb-12">
          Featured Products
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
