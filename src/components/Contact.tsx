'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';
import { ContactInfo } from '@/types';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactProps {
  contact: ContactInfo;
}

export default function Contact({ contact }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
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
            Get In Touch
          </h2>
          <p
            className="text-lg text-foreground-secondary max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Ready to discuss your mission requirements? Contact us today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background-secondary border border-foreground-secondary/20 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-accent text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-foreground mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background-secondary border border-foreground-secondary/20 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-accent text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-foreground mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background-secondary border border-foreground-secondary/20 rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
                {errors.message && (
                  <p className="text-accent text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              {submitSuccess && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-accent text-center"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-semibold text-foreground mb-6"
                style={{ fontFamily: 'var(--font-poppins)' }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 rounded-full p-3">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm mb-1">Phone</p>
                    <a
                      href={`tel:${contact.phoneNumber}`}
                      className="text-foreground text-lg hover:text-accent transition-colors"
                    >
                      {contact.phoneNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 rounded-full p-3">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm mb-1">Email</p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-foreground text-lg hover:text-accent transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 rounded-full p-3">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground-secondary text-sm mb-1">Location</p>
                    <p className="text-foreground text-lg">India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background-secondary border border-accent/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                For Guidance & Support
              </h4>
              <p className="text-foreground-secondary text-sm">
                Need assistance with your assessment or have questions? 
                Contact us at {contact.phoneNumber}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
