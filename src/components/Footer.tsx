import { Instagram, Twitter, Mail, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-200 text-gray-700 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-mono font-bold text-lg mb-4">Contacto</h3>
            <p className="font-mono">zulearna22@gmail.com</p>
            <p className="font-mono">+57 (300) 4558349</p>
            <p className="font-mono">Instagram: @_zu_arte_</p>
          </div>

          <div className="text-center">
            <h3 className="font-mono font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2 font-mono">
              <Link to="/" className="hover:text-primary-500 transition-colors">Galería</Link>
              <Link to="/about" className="hover:text-primary-500 transition-colors">Acerca de</Link>
              <Link to="/contact" className="hover:text-primary-500 transition-colors">Contacto</Link>
            </nav>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-mono font-bold text-lg mb-4">Sígueme</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-primary-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:zulearna22@gmail.com"
                className="hover:text-primary-500 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="hover:text-primary-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-300 mt-8 pt-8 text-center font-mono text-sm">
          <p>&copy; {new Date().getFullYear()} Zuleima Arzuza. Todos los derechos reservados.</p>
        </div>
        <div className="mt-4 text-center font-mono text-sm">
          <p>Desarrollado por Nicolas Torres. 🚀👨‍💻</p>
        </div>
      </div>
    </footer>
  );
}
