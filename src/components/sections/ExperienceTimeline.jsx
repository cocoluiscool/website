import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin, ChevronDown, CheckCircle2, Music, Shield, Book, LineChart } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { data } from '../../data/resumeData';
import { cn } from '../ui/utils';

const iconMap = {
  music: Music,
  shield: Shield,
  book: Book,
  chart: LineChart
};

const TimelineCard = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[item.iconType] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Line (Mobile) */}
      <div className="md:hidden absolute left-0 top-0 bottom-[-32px] w-0.5 bg-gray-200"></div>
      
      {/* Timeline Node (Mobile) */}
      <div className="md:hidden absolute left-[-8px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm z-10"></div>

      <div className={cn(
        "group bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-soft hover:-translate-y-1 mb-6 cursor-pointer relative overflow-hidden",
        isExpanded ? "ring-2 ring-primary/20 border-primary/30" : "hover:border-primary/30"
      )}
      onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Subtle decorative accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>

        <div className="flex flex-col md:flex-row gap-6 md:items-start relative z-10">
          <div className="hidden md:flex flex-shrink-0 w-14 h-14 bg-primaryLight text-primary rounded-xl items-center justify-center -ml-2 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-primary/10 group-hover:border-transparent group-hover:shadow-md">
            <Icon size={26} strokeWidth={1.5} />
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-3">
                <div className="md:hidden w-10 h-10 bg-primaryLight text-primary rounded-lg flex items-center justify-center">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {item.role}
                </h3>
              </div>
              <div className="inline-flex items-center space-x-1 text-sm bg-gray-50 text-gray-600 px-3 py-1 rounded-full whitespace-nowrap md:self-start">
                <Calendar size={14} />
                <span className="font-medium">{item.dates}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-5">
              <span className="flex items-center gap-1.5 font-medium">
                <Building2 size={16} className="text-gray-400" />
                {item.organization}
              </span>
              <span className="hidden sm:inline text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-gray-400" />
                {item.location}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.skills.map((skill, i) => (
                <span key={i} className="text-xs font-semibold px-2.5 py-1 bg-gray-50 text-gray-600 border border-gray-100 rounded-md">
                  {skill}
                </span>
              ))}
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <ul className="space-y-3 mb-5">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-teal-50/50 rounded-xl p-4 border border-teal-100/50">
                      <p className="text-sm text-teal-900 flex items-start gap-2">
                        <span className="font-bold flex-shrink-0 mt-0.5">💡 Key Takeaway:</span>
                        <span className="opacity-90 leading-relaxed">{item.learnings}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button */}
            <div className="mt-4 flex items-center justify-center md:justify-start">
              <button className="text-gray-400 hover:text-primary transition-colors flex items-center gap-1 text-sm font-medium group/btn">
                {isExpanded ? 'Show less' : 'View achievements & details'}
                <ChevronDown size={16} className={cn("transition-transform duration-300", isExpanded && "rotate-180")} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const categories = ["All", ...new Set(data.experience.map(item => item.category))];

const ExperienceTimeline = () => {
  const [filter, setFilter] = useState("All");

  const filteredExperience = filter === "All" 
    ? data.experience 
    : data.experience.filter(item => item.category === filter);

  return (
    <section id="experience" className="py-20">
      <SectionHeader 
        title="Professional Experience" 
        subtitle="A track record of driving results through cross-functional operations and deep client advising."
      />
      
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              filter === cat 
                ? "bg-gray-900 text-white shadow-md"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-900 hover:text-gray-900"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto md:mx-0">
        {/* Desktop Timeline Line */}
        <div className="hidden md:block absolute left-[27px] top-6 bottom-[-32px] w-0.5 bg-gray-100"></div>

        <motion.div layout className="space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredExperience.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
