'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import { Highlight } from '@/types';
import { Shield, Target, Cpu } from 'lucide-react';

interface HighlightsProps {
  highlights: Highlight[];
}

const iconMap: Record<string, React.ComponentType<any>> = {
  shield: Shield,
  target: Target,
  cpu: Cpu,
};

export default function Highlights({ highlights }: HighlightsProps) {
  return (
    <section className="py-12 md:py-16 lg:py-20 rounded-2xl px-6 md:px-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {highlights.map((highlight, index) => {
            const IconComponent = iconMap[highlight.icon] || Shield;
            
            return (
              <motion.div
                key={highlight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-accent/10 rounded-full p-6">
                    <IconComponent className="w-12 h-12 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold text-foreground mb-2"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  {highlight.title}
                </h3>
                <p
                  className="text-foreground-secondary"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
