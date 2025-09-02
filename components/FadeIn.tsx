'use client';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  variant?: 'fade' | 'slide' | 'scale' | 'slide-up';
  duration?: number;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  variant = 'fade',
  duration = 0.8 
}: FadeInProps) {
  const variants = {
    fade: {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, ease: 'easeOut', delay }
    },
    slide: {
      initial: { opacity: 0, x: -24 },
      animate: { opacity: 1, x: 0 },
      transition: { duration, ease: 'easeOut', delay }
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration, ease: 'easeOut', delay }
    },
    'slide-up': {
      initial: { opacity: 0, y: 48 },
      animate: { opacity: 1, y: 0 },
      transition: { duration, ease: 'easeOut', delay }
    }
  };

  return (
    <motion.div 
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      transition={variants[variant].transition}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}
