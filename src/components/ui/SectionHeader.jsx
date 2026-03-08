import { motion } from 'framer-motion';
import { cn } from './utils';

export const SectionHeader = ({ title, subtitle, className }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn("mb-12 md:mb-16", className)}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl text-balance">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-1.5 bg-primary rounded-full mt-6"></div>
    </motion.div>
  );
};
