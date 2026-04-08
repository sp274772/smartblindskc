import { motion } from 'motion/react';
import { Smartphone, Mic, Home, Wifi, Zap, Settings } from 'lucide-react';

const integrations = [
  {
    name: "Amazon Alexa",
    description: "Control your blinds with simple voice commands like 'Alexa, open the blinds'.",
    icon: Mic,
  },
  {
    name: "Google Home",
    description: "Seamlessly integrate with your Google Assistant ecosystem for hands-free control.",
    icon: Home,
  },
  {
    name: "Apple HomeKit",
    description: "Manage your window treatments directly from your iPhone, iPad, or Apple Watch.",
    icon: Smartphone,
  },
  {
    name: "Smart App Control",
    description: "Set schedules, create scenes, and control your blinds from anywhere in the world.",
    icon: Wifi,
  },
  {
    name: "Automated Scenes",
    description: "Sync your blinds with sunrise and sunset or create custom morning and evening routines.",
    icon: Zap,
  },
  {
    name: "Precise Calibration",
    description: "Fine-tune the exact position of your blinds for the perfect balance of light and privacy.",
    icon: Settings,
  }
];

export function SmartIntegration() {
  return (
    <section id="smart-integration" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-stone-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm">
              Future-Proof Your Home
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight leading-tight">
              Seamless <span className="font-medium text-white">Smart Home</span> Integration
            </h2>
            <p className="text-lg text-stone-400 font-light mb-12 leading-relaxed">
              Our motorized window treatments are designed to work with the technology you already use. 
              Experience the ultimate convenience of automated living with voice control, mobile apps, and intelligent scheduling.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {integrations.slice(0, 4).map((item, index) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-stone-800 flex items-center justify-center text-stone-400">
                    <item.icon size={20} />
                  </div>
                  <h4 className="font-medium text-white">{item.name}</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              <img 
                src="/live 3.webp" 
                alt="Smart home control interface" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-stone-500 flex items-center justify-center text-white animate-pulse">
                    <Wifi size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-stone-400">System Status</p>
                    <p className="text-lg font-medium text-white">Connected & Optimized</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-stone-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-stone-500/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
