import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Phone, Sparkles } from 'lucide-react';
import { MoodBoardConfigurator } from './MoodBoardConfigurator';

const slides = [
  {
    id: 1,
    image: "/slide-14.png",
  },
  {
    id: 2,
    image: "/slide -13.png",
  },
  {
    id: 3,
    image: "/slide-10.png",
  },
  {
    id: 4,
    image: "/slide-11.png",
  },
  {
    id: 5,
    image: "/slide-12.png",
  },
  {
    id: 6,
    image: "/live 3.webp",
  },
  {
    id: 7,
    image: "/live-2.webp",
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-stone-100">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slides[current].image}
              alt={`Slide ${current + 1}`}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Static Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-white font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base opacity-80">
              A Smart Solution for Modern Living
            </p>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight leading-[1.1]">
              Transform Your Home <br className="hidden md:block" />
              <span className="font-medium">with Smart Blinds</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-12 font-light leading-relaxed">
              Premium motorized blinds with remote, app, and voice control. 
              Free in-home consultation for all custom orders in the Greater Kansas City Area.
            </p>
            
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 md:gap-8">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => setIsConfiguratorOpen(true)}
                  className="bg-stone-500/80 backdrop-blur-md text-white px-8 py-5 rounded-full text-lg font-medium hover:bg-stone-600 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Sparkles size={20} className="text-white/80" />
                  Start Your Project
                </button>
                <a 
                  href="#blinds" 
                  className="bg-stone-500/80 backdrop-blur-md text-white px-8 py-5 rounded-full text-lg font-medium hover:bg-stone-600 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center whitespace-nowrap"
                >
                  Explore Our Collections
                </a>
              </div>
              <div className="flex items-center text-white group whitespace-nowrap">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mr-4 border border-white/20 group-hover:bg-stone-500 transition-colors">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/60 uppercase tracking-widest font-bold">Call Us Today</p>
                  <p className="text-xl font-medium whitespace-nowrap">913-207-8875</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <MoodBoardConfigurator 
        isOpen={isConfiguratorOpen} 
        onClose={() => setIsConfiguratorOpen(false)} 
      />

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-30 px-8 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === current ? "bg-stone-500 w-12" : "bg-white/30 w-6 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-stone-500 backdrop-blur-md transition-all border border-white/10"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 text-white hover:bg-stone-500 backdrop-blur-md transition-all border border-white/10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
