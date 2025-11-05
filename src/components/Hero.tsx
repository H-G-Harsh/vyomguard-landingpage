'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { HeroContent } from '@/types';

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const handleCTAClick = () => {
    const element = document.querySelector(content.ctaLink);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background-secondary opacity-90" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 123, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 123, 0, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 sm:px-12 lg:px-16 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          style={{ fontFamily: 'var(--font-poppins)' }}
        >
          {content.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl md:text-2xl text-foreground-secondary mb-10 max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {content.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleCTAClick}
          >
            {content.ctaText}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
