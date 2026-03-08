import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { cn } from '../ui/utils';

const tabs = [
  { id: 'professional', label: 'Professional', emoji: '💼' },
  { id: 'community', label: 'Community', emoji: '🤝' },
  { id: 'fun', label: 'Fun', emoji: '✨' }
];

const content = {
  professional: "With a background spanning client advisory, sales, and operations, I specialize in bridging front-and-back-office workflows. I've consistently driven business results—like achieving CNY ¥650K+ in annual premium sales—by adopting a consultative approach, rigorous follow-up discipline, and a genuine care for client outcomes.",
  community: "I believe in the power of shared knowledge. By co-creating the Insurance Apex Circle—a 900+ member professional community—I've helped deliver ongoing sales enablement and peer learning, showing my dedication to elevating industry standards and supporting fellow practitioners.",
  fun: "Outside of tracking policies and optimizing operations, you'll find me adapting to fast-paced environments like local music schools, sharpening my problem-solving skills, and fully embracing the vibrant lifestyle and diverse culture of Auckland, NZ. Native in Mandarin and professionally fluent in English!"
};

const About = () => {
  const [activeTab, setActiveTab] = useState('professional');

  return (
    <section id="about" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader 
            title="About Me" 
            subtitle="I naturally thrive at the intersection of client relationship management and operational execution."
            className="mb-8"
          />
          
          <div className="prose prose-lg text-gray-600 mb-8 text-balance">
            <p className="mb-4">
              I am an adaptable insurance professional with robust experience across sales, client advisory, and operations support in brokerage and service-driven environments.
            </p>
            <p>
              I pride myself on a hands-on approach to client onboarding, scheduling, and internal coordination, ensuring that nothing falls through the cracks and every stakeholder feels supported.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="bg-primaryLight text-primary px-4 py-2 rounded-full font-medium text-sm flex items-center border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span> Native Mandarin
            </div>
            <div className="bg-primaryLight text-primary px-4 py-2 rounded-full font-medium text-sm flex items-center border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary mr-2"></span> Proficient English
            </div>
            <div className="bg-secondaryLight text-secondary px-4 py-2 rounded-full font-medium text-sm flex items-center border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span> Process Optimisation
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 flex flex-col h-full relative overflow-hidden"
        >
          {/* Decorative background blob */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-teal-50 rounded-full blur-[40px] z-0"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              Get to know me
            </h3>
            
            <div className="flex bg-gray-50 p-1.5 rounded-xl mb-6 self-start max-w-max">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                    activeTab === tab.id 
                      ? "bg-white text-primary shadow-sm" 
                      : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  <span className="hidden sm:inline">{tab.emoji}</span> {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 min-h-[180px] flex items-center border border-gray-100 relative">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 leading-relaxed text-balance"
                >
                  {content[activeTab]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
