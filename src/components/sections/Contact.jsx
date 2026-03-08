import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';
import { data } from '../../data/resumeData';

const ContactItem = ({ icon: Icon, title, value, href, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
  >
    <div className="w-12 h-12 rounded-full bg-primaryLight text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
      <Icon size={20} />
    </div>
    <div className="overflow-hidden">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{title}</p>
      <p className="text-sm font-medium text-gray-800 truncate group-hover:text-primary transition-colors">{value}</p>
    </div>
    <ExternalLink size={16} className="ml-auto text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.a>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gray-900 rounded-[3rem] overflow-hidden relative shadow-2xl"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkiLz48L3N2Zz4=')] opacity-50"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10 p-8 sm:p-12 lg:p-16 gap-12 lg:gap-8 items-center">
          
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-xl mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex px-4 py-1.5 rounded-full bg-white/10 text-white font-medium text-sm mb-6 border border-white/10 backdrop-blur-sm"
            >
              Let's build something great
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to create human-centred solutions?
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 text-balance">
              Currently open to new opportunities in insurance, operations, or client support roles across New Zealand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                onClick={() => window.location.href = `mailto:${data.personal.email}`}
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4"
              >
                <Mail className="mr-2" size={20} /> Email Me
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open(`https://${data.personal.linkedin}`, '_blank')}
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-4 bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/30 hover:text-white"
              >
                <Linkedin className="mr-2" size={20} /> View LinkedIn
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {data.personal.workEligibility}
            </div>
          </div>

          <div className="lg:pl-8 xl:pl-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <ContactItem icon={Mail} title="Email" value={data.personal.email} href={`mailto:${data.personal.email}`} delay={0.2} />
              <ContactItem icon={Phone} title="Phone" value={data.personal.phone} href={`tel:${data.personal.phone.replace(/\s+/g, '')}`} delay={0.3} />
              <ContactItem icon={MapPin} title="Location" value={data.personal.location} href={`https://maps.google.com/?q=${data.personal.location}`} delay={0.4} />
              <ContactItem icon={Linkedin} title="LinkedIn" value={data.personal.linkedin.replace('www.', '')} href={`https://${data.personal.linkedin}`} delay={0.5} />
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
