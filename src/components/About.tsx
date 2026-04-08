import { motion } from 'motion/react';
import { Ruler, ShieldCheck, Truck, Wrench, Leaf, Tag } from 'lucide-react';

const reasons = [
  {
    title: "Custom for Every Window",
    icon: Ruler,
  },
  {
    title: "3-5 Years Warranty",
    icon: ShieldCheck,
  },
  {
    title: "On-time Delivery",
    icon: Truck,
  },
  {
    title: "Free Installation",
    icon: Wrench,
  },
  {
    title: "ECO Sustainable Material",
    icon: Leaf,
  },
  {
    title: "Competitive Pricing",
    icon: Tag,
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase mb-4"
          >
            The Smart Choice
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight"
          >
            Why Choose SmartBlindsKC?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 font-light"
          >
            We combine premium quality with local expertise to deliver window treatments that perfectly fit your home and lifestyle.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center text-stone-500 shadow-sm border border-stone-100 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                <reason.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h4 className="text-stone-900 font-medium text-sm sm:text-base">{reason.title}</h4>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-16 border-t border-stone-100">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-light text-stone-900 mb-6 tracking-tight">
              Elevating Homes in Kansas City
            </h3>
            <div className="space-y-4 text-lg text-stone-600 font-light leading-relaxed">
              <p>
                At SmartBlindsKC, we believe window treatments should be more than just functional—they should seamlessly integrate into your modern lifestyle.
              </p>
              <p>
                Our mission is to bring the showroom directly to your living room. With expert consultation, precise measurement, and professional installation, we ensure a flawless experience from start to finish.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-stone-50">
              <img 
                src="/About us-1.png" 
                alt="Modern living room with smart blinds" 
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
