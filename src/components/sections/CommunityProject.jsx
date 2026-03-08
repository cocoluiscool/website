import { motion } from 'framer-motion';
import { Users, TrendingUp, ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { data } from '../../data/resumeData';

const StatCard = ({ label, value, suffix, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-soft"
  >
    <div className="text-3xl lg:text-4xl font-extrabold text-primary mb-1 tracking-tight">
      {value}
    </div>
    <div className="text-sm font-medium text-gray-800 mb-1">{label}</div>
    {suffix && <div className="text-xs text-gray-500 uppercase tracking-wider">{suffix}</div>}
  </motion.div>
);

const HighlightCard = ({ item, index }) => {
  const icons = [Target, ShieldCheck, TrendingUp, Users];
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
      className="flex-shrink-0 w-48 sm:w-56 bg-white/60 backdrop-blur-sm border border-white/80 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
        <Icon size={20} />
      </div>
      <h4 className="font-semibold text-gray-900">{item}</h4>
    </motion.div>
  );
};

const CommunityProject = () => {
  return (
    <section id="community" className="py-24">
      <div className="bg-primaryLight/30 rounded-[2.5rem] overflow-hidden relative">
        {/* Subtle pattern / texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pattern-dots -z-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

        <div className="p-8 sm:p-12 lg:p-16">
          <SectionHeader 
            title={data.community.title} 
            subtitle="Building a vibrant ecosystem for insurance professionals to learn, share, and grow together."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="prose prose-lg text-gray-700 mb-8 leading-relaxed">
                  {data.community.story}
                </div>
                
                <button className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group">
                  Learn more about our community
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-10">
                {data.community.stats.map((stat, idx) => (
                  <StatCard key={idx} {...stat} index={idx} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 pt-12 border-t border-primary/10">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Users className="text-primary" size={20} /> Weekly Value Delivery
            </h4>

            {/* Horizontal Scroll / Carousel */}
            <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 hide-scrollbar cursor-grab active:cursor-grabbing">
              {data.community.highlights.map((item, idx) => (
                <HighlightCard key={idx} item={item} index={idx} />
              ))}
            </div>
            {/* Visual indicator for scrollability */}
            <div className="h-1 w-24 bg-gray-200 rounded-full mx-auto mt-2 overflow-hidden sm:hidden">
              <div className="h-full bg-primary/40 w-1/3 rounded-full animate-[slide_3s_ease-in-out_infinite_alternate]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityProject;
