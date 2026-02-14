'use client';

import { Github, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
              When <span className="text-blue-600">Sachin</span> Explains
            </Link>
            <p className="mt-6 text-slate-500 leading-relaxed max-w-sm">
              Deconstructing complexity in technology, culture, and modern systems. 
              Building a clearer perspective, one explanation at a time.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-6">
              Platform
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="#youtube" className="text-slate-500 hover:text-blue-600 transition-colors">
                  YouTube Channel
                </Link>
              </li>
              <li>
                <Link href="#instagram" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Twitter / X
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-6">
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@sachinexplains.com" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                  Sponsorships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-400">
            © {currentYear} When Sachin Explains. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}