import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Logo className="text-stone-800" />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/#blinds" className="text-stone-600 hover:text-stone-900 transition-colors">Blinds & Shades</Link>
            <Link to="/#curtains" className="text-stone-600 hover:text-stone-900 transition-colors">Curtains</Link>
            <Link to="/#smart-integration" className="text-stone-600 hover:text-stone-900 transition-colors">Smart Home</Link>
            <Link to="/#our-process" className="text-stone-600 hover:text-stone-900 transition-colors">Process</Link>
            <Link to="/#about" className="text-stone-600 hover:text-stone-900 transition-colors">About</Link>
          </div>

          <div className="hidden md:flex">
            <Link to="/#contact" className="bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-stone-800 transition-colors font-medium">
              Book Free Consultation
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 hover:text-stone-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <Link to="/#blinds" onClick={() => setIsOpen(false)} className="block py-3 text-stone-600 hover:text-stone-900 border-b border-stone-50">Blinds & Shades</Link>
            <Link to="/#curtains" onClick={() => setIsOpen(false)} className="block py-3 text-stone-600 hover:text-stone-900 border-b border-stone-50">Curtains</Link>
            <Link to="/#smart-integration" onClick={() => setIsOpen(false)} className="block py-3 text-stone-600 hover:text-stone-900 border-b border-stone-50">Smart Home</Link>
            <Link to="/#our-process" onClick={() => setIsOpen(false)} className="block py-3 text-stone-600 hover:text-stone-900 border-b border-stone-50">Process</Link>
            <Link to="/#about" onClick={() => setIsOpen(false)} className="block py-3 text-stone-600 hover:text-stone-900 border-b border-stone-50">About</Link>
            <Link to="/#contact" onClick={() => setIsOpen(false)} className="block text-center w-full mt-4 bg-stone-900 text-white px-6 py-3 rounded-full font-medium">Book Free Consultation</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
