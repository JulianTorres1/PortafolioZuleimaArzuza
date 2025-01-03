import { Menu, X, Home, User, Mail, Image, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                <Home className="mr-2" />
                Galeria
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/about" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                <User className="mr-2" />
                Sobre Mi
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/contact" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                <Mail className="mr-2" />
                Contacto
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/exposiciones" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                <Image className="mr-2" />
                Exposiciones
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/cultura" className="flex items-center text-gray-700 hover:text-primary-500 transition-colors">
                <BookOpen className="mr-2" />
                Cultura
              </Link>
            </motion.div>
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
              <Home className="inline-block mr-2" />
              Galeria
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              <User className="inline-block mr-2" />
              Sobre Mi
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="inline-block mr-2" />
              Contacto
            </Link>
            <Link
              to="/exposiciones"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              <Image className="inline-block mr-2" />
              Exposiciones
            </Link>
            <Link
              to="/cultura"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-primary-50"
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="inline-block mr-2" />
              Cultura
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}