import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { data } from '../../data/resumeData';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primaryLight/50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primaryLight text-primary font-medium text-sm mb-6 shadow-sm border border-primary/10"
          >
            👋 Hello, I'm
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Coco <span className="text-primary block sm:inline">(Kejia)</span> Lu
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-4 max-w-2xl text-balance">
            {data.personal.role}
          </p>
          
          <p className="text-lg text-gray-500 mb-10 max-w-xl text-balance">
            {data.personal.tagline} Based in Auckland, creating clear, human-centred solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button onClick={() => window.location.href = '#contact'} size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-5 w-5" /> Let's Connect
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '#experience'} size="lg" className="w-full sm:w-auto">
              View Experience
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-primary rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-white flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
              <img src="/avatar.jpg" alt="Coco Lu" className="w-full h-full object-cover scale-[1.2]" />
            </div>
            
            {/* Playful Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:bottom-4 md:-right-8 bg-white p-4 rounded-xl shadow-float z-20 border border-gray-100 hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-primaryLight rounded-full flex items-center justify-center text-primary">
                📍
              </div>
              <div className="text-sm font-semibold text-gray-800">
                Auckland, NZ
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 cursor-pointer hover:text-primary transition-colors hidden md:block"
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
