"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Ways to Work Together", href: "/#services-section" },
  { name: "Data Management", href: "/data-management" },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleAnchorClick = (href: string) => {
    const element = document.querySelector(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 h-16 border-b border-border bg-surface/95 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Wordmark */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <img 
              src="/logo-header.png?v=2" 
              alt="Aquilastrat" 
              className="h-8 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item, index) => {
            const isActive = pathname === item.href;
            const isAnchorLink = item.href.startsWith('/#');
            
            if (isAnchorLink) {
              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector(item.href.substring(1));
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                    "hover:underline underline-offset-4"
                  )}
                >
                  {item.name}
                </motion.button>
              );
            }
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isActive
                      ? "text-primary border-b-2 border-accent pb-1"
                      : "text-text hover:underline underline-offset-4"
                  )}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 text-text hover:text-primary transition-colors cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          type="button"
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`absolute top-2 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute top-4 left-0 w-6 h-0.5 bg-current transform origin-center transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/50 backdrop-blur-sm md:hidden z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-16 left-0 right-0 bg-white border-b border-border shadow-lg md:hidden z-50"
        >
          <nav className="px-4 py-6 space-y-4">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              const isAnchorLink = item.href.startsWith('/#');
              
              if (isAnchorLink) {
                return (
                  <button
                    key={item.name}
                    onClick={() => handleAnchorClick(item.href)}
                    className={cn(
                      "block w-full text-left py-3 px-4 text-base font-medium transition-colors hover:text-primary hover:bg-gray-50 rounded-lg",
                      "hover:underline underline-offset-4"
                    )}
                  >
                    {item.name}
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block py-3 px-4 text-base font-medium transition-colors hover:text-primary hover:bg-gray-50 rounded-lg",
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-text hover:underline underline-offset-4"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
