import { motion } from 'motion/react';
import { Wifi, Smartphone, Mic, Clock } from 'lucide-react';

const features = [
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Remote Controlled",
    description: "Control your blinds from anywhere in the room with an included premium remote control."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile App",
    description: "Full integration with your smartphone. Adjust blinds, set scenes, and monitor from anywhere."
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Voice Command",
    description: "Works with Alexa, Google Home, and Siri. Just say the word and your blinds respond."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Scheduled Automation",
    description: "Set customized schedules so your blinds open and close automatically throughout the day."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-stone-50 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase mb-4"
          >
            Smart Features
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-stone-900 mb-12 tracking-tight"
          >
            The Smart Way to Control Light
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center text-stone-900 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
