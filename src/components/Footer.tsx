import { Logo } from './Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Logo className="text-white mb-6" />
            <p className="text-stone-400 text-sm leading-relaxed">
              Premium blinds, shades, and curtains for your home. We bring the showroom to you with our free in-home consultation.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#blinds" className="hover:text-white transition-colors">Zebra Blinds</a></li>
              <li><a href="#blinds" className="hover:text-white transition-colors">Roller Shades</a></li>
              <li><a href="#blinds" className="hover:text-white transition-colors">Cellular Shades</a></li>
              <li><a href="#blinds" className="hover:text-white transition-colors">Roman Shades</a></li>
              <li><a href="#curtains" className="hover:text-white transition-colors">Custom Curtains</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-sm text-stone-400">
              Email: contact@smartblindsKC.com<br />
              Phone: 913-207-8875
            </p>
          </div>
        </div>
        
        <div className="border-t border-stone-800 mt-12 pt-8 text-sm text-stone-500 text-center flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} SmartBlindsKC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for beautiful living spaces.</p>
        </div>
      </div>
    </footer>
  );
}
