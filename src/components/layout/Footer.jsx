import { data } from '../../data/resumeData';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="font-bold text-xl tracking-tight text-gray-800 mb-2">
            Coco<span className="text-primary">.</span>Lu
          </div>
          <p className="text-sm text-gray-500 max-w-sm">
            {data.personal.tagline}
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {data.personal.name}. All rights reserved.</p>
          <p className="text-xs">{data.personal.workEligibility}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
