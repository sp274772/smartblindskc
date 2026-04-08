import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const blinds = products.filter(p => p.category === 'blinds');
const curtains = products.filter(p => p.category === 'curtains');

function ProductCard({ item, index }: { item: any; index: number; key?: string }) {
  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group cursor-pointer h-full flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-stone-100">
        <img
          src={item.images[0]}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-medium text-stone-900 mb-2">{item.name}</h3>
      <p className="text-stone-600 mb-4 line-clamp-2 flex-grow">{item.description}</p>
      <div className="flex items-center text-stone-900 font-medium group-hover:text-stone-500 transition-colors">
        <span>View Details</span>
        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );

  return (
    <Link to={`/product/${item.id}`}>
      {CardContent}
    </Link>
  );
}

export function Products() {
  return (
    <div className="bg-white">
      {/* Main Section Heading */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase mb-4"
        >
          Our Collections
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight"
        >
          Exquisite Window Treatments
        </motion.h2>
      </div>

      {/* Blinds & Shades Section */}
      <section id="blinds" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-stone-900 mb-6 tracking-tight"
          >
            Blinds & Shades
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-600"
          >
            Discover our premium collection of window treatments designed to elevate your space with perfect light control and privacy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blinds.map((item, index) => (
            <ProductCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Curtains Section */}
      <section id="curtains" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-stone-100">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-light text-stone-900 mb-6 tracking-tight"
          >
            Curtains & Drapes
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-600"
          >
            Add softness, texture, and elegance to your windows with our custom-tailored drapery collections.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {curtains.map((item, index) => (
            <ProductCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
