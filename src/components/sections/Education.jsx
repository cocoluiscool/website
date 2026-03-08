import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { data } from '../../data/resumeData';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <SectionHeader 
        title="Education" 
        subtitle="A strong academic foundation backing up my operational and analytical skills."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-[40px] left-[50%] right-[calc(50%-200px)] h-0.5 bg-gray-100 -z-10"></div>
        <div className="hidden md:block absolute top-[40px] left-[calc(50%-200px)] right-[50%] h-0.5 bg-gray-100 -z-10"></div>
        
        {data.education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-soft transition-shadow duration-300 relative group"
          >
            {/* Center dot for visual timeline effect */}
            <div className="hidden md:block absolute top-10 w-4 h-4 rounded-full bg-white border-2 border-primary shadow-sm -z-0"
              style={{ [idx === 0 ? 'right' : 'left']: '-8px' }}
            ></div>

            <div className="w-14 h-14 rounded-2xl bg-primaryLight text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {idx === 0 ? <Award size={28} /> : <GraduationCap size={28} />}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
              {edu.degree}
            </h3>

            <div className="flex flex-col sm:flex-row gap-2 sm:items-center text-sm font-medium text-gray-500 mb-6">
              <span className="text-primary">{edu.university}</span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="flex items-center gap-1.5 opacity-80">
                <Calendar size={14} /> {edu.dates}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-balance border-t border-gray-50 pt-6">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
