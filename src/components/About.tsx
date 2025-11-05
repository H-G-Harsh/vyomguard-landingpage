'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import { AboutContent } from '@/types';
import { Crosshair } from 'lucide-react';

interface AboutProps {
  content: AboutContent;
}

export default function About({ content }: AboutProps) {
  return (
    <section className="py-16 md:py-24 bg-background-secondary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              {content.title}
            </h2>
            <p
              className="text-base md:text-lg text-foreground-secondary leading-relaxed"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {content.description}
            </p>
          </div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Animated rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border-2 border-accent/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 border-2 border-accent/20 rounded-full"
              />
              
              {/* Center icon */}
              <div className="relative z-10 bg-background-secondary border-2 border-accent rounded-full p-8">
                <Crosshair className="w-24 h-24 text-accent" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
