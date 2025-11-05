'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Card from './ui/Card';
import { Capability } from '@/types';
import { Navigation, Eye, Package, ShieldCheck } from 'lucide-react';

interface CapabilitiesProps {
  capabilities: Capability[];
}

const iconMap: Record<string, React.ComponentType<any>> = {
  navigation: Navigation,
  eye: Eye,
  package: Package,
  'shield-check': ShieldCheck,
};

export default function Capabilities({ capabilities }: CapabilitiesProps) {
  return (
    <section id="capabilities" className="py-12 md:py-16 lg:py-20 rounded-2xl px-6 md:px-8">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Our Capabilities
          </h2>
          <p
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Advanced UAV systems engineered for mission success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {capabilities.map((capability, index) => {
            const IconComponent = iconMap[capability.icon] || Navigation;
            
            return (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hoverable className="h-full flex flex-col">
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-xl font-semibold text-foreground mb-3"
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {capability.title}
                  </h3>
                  <p
                    className="text-foreground-secondary text-sm leading-relaxed grow"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {capability.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
