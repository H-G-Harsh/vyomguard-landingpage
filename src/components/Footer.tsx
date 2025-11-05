import React from 'react';
import Container from './ui/Container';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground-secondary/20 py-10 md:py-12 rounded-2xl px-6 md:px-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold text-foreground mb-1"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              VyomGarud
            </h3>
            <p className="text-foreground-secondary text-sm">
              Precision Autonomy for Mission-Critical Operations
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background-secondary border border-foreground-secondary/20 rounded-full p-3 hover:border-accent hover:bg-accent/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground-secondary hover:text-accent" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background-secondary border border-foreground-secondary/20 rounded-full p-3 hover:border-accent hover:bg-accent/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground-secondary hover:text-accent" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-background-secondary border border-foreground-secondary/20 rounded-full p-3 hover:border-accent hover:bg-accent/10 transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground-secondary hover:text-accent" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-foreground-secondary/20 text-center">
          <p className="text-foreground-secondary text-sm">
            © {currentYear} VyomGarud. All rights reserved. Built for mission excellence.
          </p>
        </div>
      </Container>
    </footer>
  );
}
