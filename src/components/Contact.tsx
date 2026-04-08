import { motion } from 'motion/react';
import { Phone, Mail, Globe, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to connect to the server. Please check your connection.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (status === 'error') setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 bg-stone-50 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
                Get in Touch
              </h2>
              <p className="text-lg text-stone-600 font-light leading-relaxed max-w-md">
                Have questions about our products, need help with measurements, or want to book a free in-home consultation? We're here to help.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-center text-stone-700">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-200 mr-4 text-stone-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-1">Call Us</p>
                  <p className="font-medium text-lg">913-207-8875</p>
                </div>
              </div>

              <div className="flex items-center text-stone-700">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-200 mr-4 text-stone-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-1">Email</p>
                  <p className="font-medium text-lg">contact@smartblindsKC.com</p>
                </div>
              </div>

              <div className="flex items-center text-stone-700">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-200 mr-4 text-stone-500">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-1">Website</p>
                  <p className="font-medium text-lg">www.smartblindsKC.com</p>
                </div>
              </div>

              <div className="flex items-center text-stone-700">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-200 mr-4 text-stone-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-500 mb-1">Service Area</p>
                  <p className="font-medium text-lg">Serving the Greater Kansas City Area</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-100 border border-stone-200 p-6 rounded-2xl max-w-md">
              <p className="text-stone-800 font-medium text-lg leading-relaxed">
                Schedule your smart consultation now. We bring the showroom to your home.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-stone-200"
          >
            <h3 className="text-2xl font-medium text-stone-900 mb-8">Send us a message</h3>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-medium text-stone-900 mb-2">Message Sent!</h4>
                <p className="text-stone-600 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-stone-500 hover:text-stone-900 font-medium underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500/20 focus:border-stone-500 transition-colors bg-stone-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500/20 focus:border-stone-500 transition-colors bg-stone-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500/20 focus:border-stone-500 transition-colors bg-stone-50 focus:bg-white"
                      placeholder="(913) 207-8875"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Tell us about your project</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-500/20 focus:border-stone-500 transition-colors bg-stone-50 focus:bg-white resize-none"
                    placeholder="I'm looking for motorized zebra blinds for my living room..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                )}
                
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-stone-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10 flex items-center justify-center disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

