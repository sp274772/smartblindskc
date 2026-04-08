import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: number | string;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
          {question}
        </span>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <Minus size={20} className="text-stone-400" />
          ) : (
            <Plus size={20} className="text-stone-400" />
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-stone-600 leading-relaxed max-w-3xl">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What areas of Kansas City do you serve?",
      answer: "SmartBlindsKC proudly serves the entire Greater Kansas City metropolitan area, including communities in both Kansas and Missouri. We bring our mobile showroom directly to your home for a free consultation."
    },
    {
      question: "How long does a typical project take from start to finish?",
      answer: "Our standard production timeline is currently 1-2 weeks after your order is finalized. Once your custom window treatments arrive, we schedule a professional installation at your convenience, which usually takes just a few hours."
    },
    {
      question: "What is included in the free in-home consultation?",
      answer: "During your consultation, our experts will bring product samples to your home so you can see how they look in your actual lighting. We provide professional laser measurements, style advice, smart home integration demos, and a detailed quote valid for 15 days."
    },
    {
      question: "What kind of warranty do you offer?",
      answer: "We provide a comprehensive 3-5 year parts and labor warranty on all professionally installed products. This covers manufacturing defects and installation workmanship to ensure your smart blinds perform perfectly for years to come."
    },
    {
      question: "Can your blinds be integrated with my existing smart home system?",
      answer: "Yes! Our automated solutions are designed to work seamlessly with major smart home platforms including Amazon Alexa, Google Home, and Apple HomeKit. We'll help you set up the integration during your installation."
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "Because our products are custom-manufactured to your exact specifications, we offer a 2-business-day grace period for a full refund of your deposit. After 48 hours, production typically begins and orders become final."
    },
    {
      question: "Do I need to remove my old blinds before you arrive?",
      answer: "We ask that you clear the area around your windows and remove existing treatments prior to our arrival. However, if you need assistance with removal, please let us know during your consultation so we can include that service in your project plan."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, secure digital payments, and local checks. A deposit is required to move your project into the manufacturing phase, with the final balance due upon successful installation."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4 tracking-tight">
              Frequently Asked <span className="font-medium">Questions</span>
            </h1>
            <p className="text-stone-500 text-lg">
              Everything you need to know about our custom smart window solutions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-stone-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          <div className="mt-16 bg-stone-900 rounded-3xl p-10 text-center text-white">
            <h3 className="text-2xl font-medium mb-4">Still have questions?</h3>
            <p className="text-stone-400 mb-8 max-w-xl mx-auto">
              Our team is here to help you find the perfect solution for your home. Give us a call or send us an email.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:9132078875" className="text-xl font-medium hover:text-stone-300 transition-colors">
                913-207-8875
              </a>
              <span className="hidden sm:block text-stone-700">|</span>
              <a href="mailto:info@smartblindskc.com" className="text-xl font-medium hover:text-stone-300 transition-colors">
                info@smartblindskc.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
