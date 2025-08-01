import React from 'react';
import { Mail, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Cnek00', label: 'GitHub', color: 'hover:text-slate-300' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/cenk-belit-7815b02ab/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: Mail, href: 'mailto:cenkbelit@gmail.com', label: 'Email', color: 'hover:text-purple-400' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Technologies', href: '#technologies' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative py-16 px-4 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-orbitron mb-3">
                <span className="bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent">
                  CNEK00
                </span>
              </h3>
              <p className="text-slate-300 leading-relaxed">
                3+ years experienced Full Stack Developer specializing in Python, JavaScript, TypeScript, 
                Node.js, and Java. Passionate about creating innovative solutions and learning new technologies.
              </p>
            </div>

            {/* Contact info */}
            <div className="glass-panel p-4">
              <h4 className="text-lg font-semibold text-slate-200 mb-3 font-orbitron">
                Let's Connect
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:cenkbelit@gmail.com"
                  className="flex items-center text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-3" />
                  cenkbelit@gmail.com
                </a>
                <a
                  href="tel:+905457214902"
                  className="flex items-center text-slate-300 hover:text-green-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-3" />
                  +90 545 721 49 02
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-slate-200 font-orbitron">
              Quick Links
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-slate-300 hover:text-blue-400 transition-colors hover:translate-x-2 duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Specializations
              </h5>
              {['Python Development', 'Web Scraping', 'REST API Design', 'Desktop Applications'].map((service) => (
                <div key={service} className="text-slate-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Social links and newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-slate-200 font-orbitron">
              Stay Connected
            </h4>
            
            {/* Social media links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`chrome-button p-3 text-slate-400 ${social.color} hover:scale-110 transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Newsletter signup */}
            <div className="glass-panel p-4">
              <h5 className="text-sm font-semibold text-slate-200 mb-3">
                Get Updates
              </h5>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-200 placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
                />
                <button className="w-full chrome-button py-2 text-sm font-semibold text-white hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Cenk Belit (CNEK00). All rights reserved. Built with passion and modern technologies.
            </div>
            
            {/* Tech stack */}
            <div className="flex items-center space-x-4 text-xs text-slate-500">
              <span>GitHub: 20+ Projects</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-slate-800/50 rounded">Python</span>
                <span className="px-2 py-1 bg-slate-800/50 rounded">JavaScript</span>
                <span className="px-2 py-1 bg-slate-800/50 rounded">Java</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;