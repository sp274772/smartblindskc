import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Check, Star, ShoppingCart, BookOpen, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '../data/products';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const pdfOptions = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
};

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [numPages, setNumPages] = useState<number>();
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [isPdfLoading, setIsPdfLoading] = useState(true);
  
  const product = products.find(p => p.id === slug);

  useEffect(() => {
    setActiveImage(0);
    setPdfError(null);
    setIsPdfLoading(true);
  }, [slug]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const fabrics = [
    {
      id: "82032A",
      name: "White Floral",
      image: "https://picsum.photos/seed/fabric1/400/400",
      description: "Elegant white floral pattern on premium blackout fabric."
    },
    {
      id: "82032B",
      name: "Cream Floral",
      image: "https://picsum.photos/seed/fabric2/400/400",
      description: "Warm cream tones with a sophisticated floral texture."
    },
    {
      id: "82032D",
      name: "Off-white Leaf",
      image: "https://picsum.photos/seed/fabric3/400/400",
      description: "Subtle leaf pattern in a clean off-white finish."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to={`/#${product.category}`} className="inline-flex items-center text-stone-600 hover:text-stone-500 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm border border-stone-100">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 cursor-pointer relative group"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white/90 text-stone-900 px-4 py-2 rounded-full text-sm font-medium transition-opacity shadow-sm">
                  Click to enlarge
                </span>
              </div>
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveImage(i)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 border-2 cursor-pointer transition-all ${activeImage === i ? 'border-stone-900' : 'border-transparent hover:border-stone-300'}`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} detail ${i + 1}`} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm text-stone-500">(48 Reviews)</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-light text-stone-900 mb-4 tracking-tight">
              {product.name}
            </h1>
            
            <p className="text-2xl font-medium text-stone-500 mb-6">
              {product.price}
            </p>
            
            <p className="text-lg text-stone-600 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="text-stone-900 font-medium uppercase text-sm tracking-wider">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-stone-600 text-sm">
                    <Check size={16} className="text-stone-500 mr-2 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setIsQuoteOpen(true)}
                className="flex-1 bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-colors flex items-center justify-center"
              >
                <ShoppingCart size={20} className="mr-2" />
                Request a Quote
              </button>
              <button 
                onClick={() => setIsCatalogueOpen(true)}
                className="flex-1 bg-stone-500 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-600 transition-colors flex items-center justify-center"
              >
                <BookOpen size={20} className="mr-2" />
                Fabric Catalogue
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-light text-stone-900 border-b border-stone-200 pb-4">Product Overview</h2>
            <div className="prose prose-stone max-w-none text-stone-600 font-light leading-relaxed">
              <p>{product.longDescription}</p>
              <h3 className="text-stone-900 font-medium mt-8 mb-4">Why Choose {product.name}?</h3>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.slice(0, 4).map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-2xl font-light text-stone-900 border-b border-stone-200 pb-4">Specifications</h2>
            <div className="space-y-4">
              {product.specifications.map((spec, i) => (
                <div key={i} className="flex justify-between text-sm py-2 border-b border-stone-100">
                  <span className="text-stone-500">{spec.label}</span>
                  <span className="text-stone-900 font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fabric Catalogue Modal */}
      <AnimatePresence>
        {isCatalogueOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCatalogueOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden h-[90vh] flex flex-col"
            >
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <div>
                  <h2 className="text-2xl font-light text-stone-900">Fabric Collection</h2>
                  <p className="text-sm text-stone-500">Premium {product.name} Fabrics</p>
                </div>
                <button 
                  onClick={() => setIsCatalogueOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-stone-400" />
                </button>
              </div>

              <div className="p-0 overflow-y-auto flex-1 bg-stone-100 min-h-[60vh] flex flex-col items-center relative">
                {product.catalogPdf ? (
                  <div className="w-full max-w-4xl mx-auto py-8 px-4 flex flex-col items-center">
                    {isPdfLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-stone-100 z-10">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 border-4 border-stone-300 border-t-stone-900 rounded-full animate-spin mb-4"></div>
                          <p className="text-stone-500 font-light">Loading catalogue...</p>
                        </div>
                      </div>
                    )}
                    
                    {pdfError && (
                      <div className="absolute inset-0 flex items-center justify-center bg-stone-100 z-10 px-6 text-center">
                        <div className="max-w-md">
                          <p className="text-red-500 mb-4">Failed to load catalogue. Please try again later.</p>
                          <a 
                            href={product.catalogPdf} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-stone-900 font-medium hover:underline"
                          >
                            <Download size={18} className="mr-2" />
                            Download PDF instead
                          </a>
                        </div>
                      </div>
                    )}

                    <Document
                      file={product.catalogPdf}
                      options={pdfOptions}
                      onLoadSuccess={({ numPages }) => {
                        setNumPages(numPages);
                        setIsPdfLoading(false);
                      }}
                      onLoadError={(error) => {
                        console.error('PDF Load Error:', error);
                        setPdfError(error.message);
                        setIsPdfLoading(false);
                      }}
                      loading={null}
                      className="flex flex-col items-center gap-6"
                    >
                      {Array.from(new Array(numPages), (el, index) => (
                        <div key={`page_${index + 1}`} className="shadow-xl bg-white">
                          <Page 
                            pageNumber={index + 1} 
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            width={Math.min(window.innerWidth - 64, 800)}
                          />
                        </div>
                      ))}
                    </Document>
                  </div>
                ) : (
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {fabrics.map((fabric) => (
                        <div key={fabric.id} className="group">
                          <div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 mb-4 border border-stone-100">
                            <img 
                              src={fabric.image} 
                              alt={fabric.name} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between items-center">
                              <h3 className="font-medium text-stone-900">{fabric.name}</h3>
                              <span className="text-xs font-mono text-stone-400">{fabric.id}</span>
                            </div>
                            <p className="text-sm text-stone-500 font-light leading-snug">
                              {fabric.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 p-6 bg-stone-50 rounded-2xl border border-stone-100">
                      <h4 className="text-sm font-medium text-stone-900 mb-4 uppercase tracking-wider">Technical Specifications</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {product.specifications.slice(0, 4).map((spec, i) => (
                          <div key={i}>
                            <p className="text-xs text-stone-400 mb-1">{spec.label}</p>
                            <p className="text-sm text-stone-700">{spec.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-stone-100 bg-stone-50 flex justify-end">
                <button 
                  onClick={() => setIsCatalogueOpen(false)}
                  className="bg-stone-900 text-white px-8 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors"
                >
                  Close Catalogue
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="absolute inset-0 bg-stone-900/90 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center pointer-events-none"
            >
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-0 right-0 -mt-12 md:-mr-12 p-2 text-white/70 hover:text-white transition-colors pointer-events-auto"
              >
                <X size={32} />
              </button>
              
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
                    }}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-16 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors pointer-events-auto"
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-16 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors pointer-events-auto"
                  >
                    <ChevronRight size={40} />
                  </button>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Quote Modal */}
      <AnimatePresence>
        {isQuoteOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQuoteOpen(false)}
              className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <div>
                  <h2 className="text-2xl font-light text-stone-900">Request a Quote</h2>
                  <p className="text-sm text-stone-500">For {product.name}</p>
                </div>
                <button 
                  onClick={() => setIsQuoteOpen(false)}
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-stone-400" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[70vh]">
                <form className="space-y-4" onSubmit={(e) => { 
                  e.preventDefault(); 
                  alert('Message sent successfully!'); 
                  setIsQuoteOpen(false); 
                }}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                    <input type="text" id="name" required className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                    <input type="email" id="email" required className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent" />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-stone-700 mb-1">Tell us about your project</label>
                    <textarea id="project" rows={4} required className="w-full px-4 py-2 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent resize-none"></textarea>
                  </div>
                  <div className="pt-4">
                    <button type="submit" className="w-full bg-stone-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-stone-800 transition-colors">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
