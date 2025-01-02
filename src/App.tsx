import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';

const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Expos = lazy(() => import('./pages/expos'));
const Culture = lazy(() => import('./pages/culture'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-primary-50">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div>Cargando Por favor espere ...</div>}>
            <Routes>
              <Route path="/" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/exposiciones" element={<Expos />} />
              <Route path="/cultura" element={<Culture />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;