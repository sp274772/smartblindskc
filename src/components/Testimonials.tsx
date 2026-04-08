import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Overland Park, KS",
    text: "The motorized blinds have completely transformed our living room. Being able to control them with Alexa is a game changer. The installation was quick and professional!",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Leawood, KS",
    text: "Excellent service from start to finish. They helped us choose the perfect blackout shades for our nursery. Highly recommend SmartBlindsKC for their attention to detail.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    location: "Kansas City, MO",
    text: "I love my new zebra blinds! They look so modern and elegant. The free consultation was very helpful in deciding which style would work best for our large windows.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold tracking-[0.2em] text-stone-500 uppercase mb-4">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
              What Our Customers Say
            </h2>
            <div className="w-20 h-1 bg-stone-300 mx-auto rounded-full" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 relative"
            >
              <Quote className="absolute top-6 right-8 text-stone-100 w-12 h-12 -z-0" />
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-stone-600 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="text-stone-900 font-semibold">{testimonial.name}</h4>
                  <p className="text-stone-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
