import { motion } from 'motion/react';

const projects = [
  {
    title: "Modern Living Room",
    location: "Mission Hills",
    image: "/live -1.webp",
    description: "Custom motorized roller blinds integrated with smart home system."
  },
  {
    title: "Luxury Master Suite",
    location: "Prairie Village",
    image: "/recent project -2.JPG",
    description: "Elegant sheer curtains paired with blackout cellular shades."
  },
  {
    title: "Contemporary Office",
    location: "Downtown KCMO",
    image: "/recent project -3.JPG",
    description: "Sleek zebra blinds for perfect light control and privacy."
  },
  {
    title: "Dining Room Elegance",
    location: "Overland Park",
    image: "/recent project -4.JPG.png",
    description: "Beautiful custom drapery adding warmth to the dining space."
  },
  {
    title: "Sunroom Transformation",
    location: "Leawood",
    image: "/recent project -5.JPG.png",
    description: "UV-blocking solar shades protecting furniture while maintaining the view."
  },
  {
    title: "Cozy Nursery",
    location: "Olathe",
    image: "/recent project -6.JPG.png",
    description: "Complete blackout cellular shades for optimal sleep environment."
  },
  {
    title: "Kitchen Bay Window",
    location: "Lee's Summit",
    image: "/recent project -7.JPG.png",
    description: "Moisture-resistant faux wood blinds perfect for the kitchen."
  },
  {
    title: "High-Rise Condo",
    location: "Crossroads Arts District",
    image: "/recent project -8.JPG.png",
    description: "Automated floor-to-ceiling roller shades with panoramic views."
  },
  {
    title: "Patio Enclosure",
    location: "Shawnee",
    image: "/recent project -9.JPG.JPG",
    description: "Heavy-duty outdoor zip blinds for year-round patio enjoyment."
  }
];

export function RecentProjects() {
  return (
    <section id="projects" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight">
              Our Recent Projects
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-stone-500 max-w-md mt-4 md:mt-0"
          >
            Explore our latest installations across the Greater Kansas City Area, 
            showcasing our commitment to style and functionality.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={project.image} 
                alt={`Recent Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
