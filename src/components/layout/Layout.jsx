import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

export const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8 overflow-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
