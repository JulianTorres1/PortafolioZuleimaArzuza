import React from 'react';
import { motion } from 'framer-motion';
import Ritos from '../components/exposComponets/ritos';


export default function Expos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Exposiciones
      </motion.h1>

        <Ritos />
    </div>
  );
}
