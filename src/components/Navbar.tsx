import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logonav from '../media/img/logoNavbar.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logonav} alt="Zuleima Arzuza" className="h-8 w-auto" />
              <span className="font-mono font-bold text-xl">Zuleima Arzuza</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-mono">
            <Link to="/" className="text-gray-700 hover:text-primary-500 transition-colors">
              Galeria
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-500 transition-colors">
              Sobre Mi
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary-500 transition-colors">
              Contacto
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden font-mono">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}