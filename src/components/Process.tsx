import { motion } from 'motion/react';
import { Calendar, Ruler, Factory, Truck, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "Schedule your free in-home consultation. We'll assess your space and discuss your needs.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Measurement & Design",
    description: "Our experts take precise measurements and help you select the perfect blinds for each window.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Custom Manufacturing",
    description: "Your blinds are custom-manufactured to exact specifications with premium materials.",
    icon: Factory,
  },
  {
    number: "04",
    title: "Professional Installation",
    description: "Our certified team installs your smart blinds and configures automation to your preferences.",
    icon: Truck,
  }
];

export function Process() {
  return (
    <section id="our-process" className="py-24 bg-white border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight mb-6"
          >
            The SmartBlindsKC <span className="font-medium">Experience</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-600 font-light"
          >
            From initial consultation to final installation, we ensure a seamless and professional journey for every client.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[1px] bg-stone-100 group-hover:bg-stone-200 transition-colors" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-8 shadow-sm group-hover:bg-stone-900 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                  <step.icon size={32} strokeWidth={1.5} />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-400 border border-white shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-medium text-stone-900 mb-4">{step.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm px-4">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-24 p-8 rounded-3xl bg-stone-50 border border-stone-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <CheckCircle2 size={32} />
            </div>
            <div>
              <h4 className="text-xl font-medium text-stone-900">Ready to start your project?</h4>
              <p className="text-stone-500">Book your free in-home consultation today.</p>
            </div>
          </div>
          <a 
            href="#contact" 
            className="bg-stone-900 text-white px-10 py-4 rounded-full font-medium hover:bg-stone-800 transition-all shadow-lg hover:scale-105"
          >
            Get Started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
