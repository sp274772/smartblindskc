import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, Check, Sun, Moon, Cloud, Smartphone, Hand, Home, Layers, Layout, Palette, Zap } from 'lucide-react';

interface MoodBoardConfiguratorProps {
  isOpen: boolean;
  onClose: () => void;
}

const steps = [
  {
    id: 'product',
    title: 'Select Your Perfect Treatment',
    subtitle: 'Choose the product that best fits your vision.',
    options: [
      { id: 'zebra', label: 'Zebra Blinds', image: '/zebra blinds.png' },
      { id: 'roller', label: 'Roller Shades', image: '/roller-blinds.webp' },
      { id: 'vertical', label: 'Vertical Blinds', image: '/vertical-blinds.jpg' },
      { id: 'shangrila', label: 'Shangrila Blinds', image: '/shangrila blinds.png' },
      { id: 'outdoor', label: 'Outdoor Zip Blinds', image: '/outdoor-zip-blinds.webp' },
      { id: 'sheer', label: 'Sheer Curtains', image: '/sheer-curtains.webp' },
    ]
  },
  {
    id: 'light',
    title: 'Light Control Preference',
    subtitle: 'How much light do you want to block?',
    options: [
      { id: 'sheer', label: 'Sheer', description: 'Soft filtered light, maintains view', icon: Sun },
      { id: 'semi', label: 'Semi-Blockout', description: 'Privacy with gentle light', icon: Cloud },
      { id: 'blackout', label: 'Full Blackout', description: 'Complete darkness, ideal for sleep', icon: Moon },
    ]
  },
  {
    id: 'operation',
    title: 'Operation Style',
    subtitle: 'Choose how you want to control your blinds.',
    options: [
      { id: 'manual', label: 'Manual', description: 'Traditional cord or wand control', icon: Hand },
      { id: 'motorized', label: 'Motorized', description: 'Manual and remote control', icon: Zap },
      { id: 'smart', label: 'Smart', description: 'Remote, app, and voice control', icon: Smartphone },
    ]
  },
  {
    id: 'scale',
    title: 'Project Scale',
    subtitle: 'How many windows are we looking at?',
    options: [
      { id: '1-6', label: '1 - 6 Windows', description: 'Small project or single room' },
      { id: '7-15', label: '7 - 15 Windows', description: 'Medium project or multiple rooms' },
      { id: '16+', label: '16+ Windows', description: 'Large project or whole home' },
    ]
  }
];

export function MoodBoardConfigurator({ isOpen, onClose }: MoodBoardConfiguratorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (optionId: string) => {
    setSelections(prev => ({ ...prev, [steps[currentStep].id]: optionId }));
    if (currentStep < steps.length - 1) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send the selections + contact info to your backend
  };

  const progress = ((currentStep + 1) / (steps.length + 1)) * 100;

  const getProductLabel = (id: string) => {
    const option = steps[0].options.find(o => o.id === id);
    return option ? option.label : id;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-10">
              <div>
                <h2 className="text-2xl font-light text-stone-900">Project Configurator</h2>
                <p className="text-sm text-stone-500">Step {currentStep + 1} of {steps.length + 1}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <X size={24} className="text-stone-400" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="h-1 w-full bg-stone-100">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-stone-500"
              />
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              {!isSubmitted ? (
                <AnimatePresence mode="wait">
                  {currentStep < steps.length ? (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-3xl font-light text-stone-900 mb-2">{steps[currentStep].title}</h3>
                        <p className="text-stone-500">{steps[currentStep].subtitle}</p>
                      </div>

                      <div className={`grid gap-6 ${steps[currentStep].id === 'product' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-3'}`}>
                        {steps[currentStep].options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleSelect(option.id)}
                            className={`relative group flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-300 ${
                              selections[steps[currentStep].id] === option.id 
                                ? 'border-stone-900 bg-stone-50' 
                                : 'border-stone-100 hover:border-stone-300 bg-white'
                            }`}
                          >
                            {option.image ? (
                              <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 bg-stone-50">
                                <img 
                                  src={option.image} 
                                  alt={option.label} 
                                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                            ) : (
                              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                                selections[steps[currentStep].id] === option.id ? 'bg-stone-900 text-white' : 'bg-stone-50 text-stone-400 group-hover:bg-stone-100'
                              }`}>
                                {option.icon && <option.icon size={32} strokeWidth={1.5} />}
                              </div>
                            )}
                            
                            <h4 className="text-lg font-medium text-stone-900">{option.label}</h4>
                            {'description' in option && (
                              <p className="text-sm text-stone-500 text-center mt-2">{option.description}</p>
                            )}
                            
                            {selections[steps[currentStep].id] === option.id && (
                              <div className="absolute top-4 right-4 w-6 h-6 bg-stone-900 text-white rounded-full flex items-center justify-center">
                                <Check size={14} />
                              </div>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="contact"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="max-w-md mx-auto space-y-8"
                    >
                      <div className="text-center">
                        <h3 className="text-3xl font-light text-stone-900 mb-2">Almost There!</h3>
                        <p className="text-stone-500">Enter your details to receive your personalized recommendation and book a measure.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                          <input required type="text" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                          <input required type="email" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                          <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all" placeholder="(913) 000-0000" />
                        </div>
                        <button 
                          type="submit"
                          className="w-full bg-stone-900 text-white py-4 rounded-xl font-medium hover:bg-stone-800 transition-all shadow-lg mt-4"
                        >
                          Send My Configuration
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Check size={40} />
                  </div>
                  <h3 className="text-3xl font-light text-stone-900">Thank You!</h3>
                  <p className="text-stone-600 max-w-md">
                    We've received your configuration for <span className="font-medium">{getProductLabel(selections.product)}</span> with <span className="font-medium">{selections.light}</span> control. 
                    Our experts will contact you shortly to schedule your free in-home consultation.
                  </p>
                  <button 
                    onClick={onClose}
                    className="bg-stone-900 text-white px-8 py-3 rounded-full font-medium hover:bg-stone-800 transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {!isSubmitted && (
              <div className="p-6 border-t border-stone-100 bg-stone-50 flex justify-between items-center">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`flex items-center text-stone-500 hover:text-stone-900 transition-colors ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                >
                  <ChevronLeft size={20} className="mr-1" />
                  Back
                </button>
                
                {currentStep < steps.length && selections[steps[currentStep].id] && (
                  <button
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="flex items-center text-stone-900 font-medium hover:text-stone-700 transition-colors"
                  >
                    Next Step
                    <ChevronRight size={20} className="ml-1" />
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
