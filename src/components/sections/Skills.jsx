import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { data } from '../../data/resumeData';

const SkillPill = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2.5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-primary/40 hover:text-primary transition-all duration-300 text-sm font-medium text-gray-700 cursor-default select-none text-center"
    >
      {skill}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50/50 rounded-[3rem] px-6 sm:px-12 my-10 relative overflow-hidden">
      {/* Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondaryLight/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 z-0"></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <SectionHeader 
          title="Skills & Capabilities" 
          subtitle="My toolkit for solving complex operational challenges and building lasting client relationships."
          className="mx-auto text-center flex flex-col items-center mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {data.skills.map((category, catIdx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 font-bold text-primary flex-shrink-0">
                  {catIdx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, imgIdx) => (
                  <SkillPill 
                    key={skill} 
                    skill={skill} 
                    index={catIdx * 3 + imgIdx} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
