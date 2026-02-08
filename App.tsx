import React, { useState, useEffect } from 'react';
import { Language, GalleryItem } from './types';
import { content } from './constants';
import { 
  Menu, X, Globe, ChevronRight, ChevronLeft, 
  Fan, Zap, Droplets, Flame, ThermometerSun, Cpu,
  CheckCircle, MapPin, Phone, Mail, Instagram, Linkedin, Twitter, Facebook,
  Play, MessageCircle
} from 'lucide-react';

// --- Sub-components ---

// 1. Navigation Bar
const Navbar = ({ lang, setLang, isMenuOpen, setIsMenuOpen }: { 
  lang: Language; 
  setLang: (l: Language) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (o: boolean) => void;
}) => {
  const t = content[lang].nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-white/10 ${scrolled ? 'bg-[#020617]/95 backdrop-blur-lg shadow-2xl py-2 md:py-3' : 'bg-[#020617]/60 backdrop-blur-md shadow-lg py-3 md:py-4'}`}>
      <div className="max-w-[95%] mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Update */}
        <div className="flex items-center gap-2 relative">
          <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full animate-pulse"></div>
          <img 
            src="https://i.postimg.cc/fWvwHnNT/logo-ELALAMYA-png.png" 
            alt="EL ALAMYA" 
            className="h-10 md:h-14 w-auto object-contain relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] hover:drop-shadow-[0_0_25px_rgba(59,130,246,1)] transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {t.links.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest hover:underline decoration-blue-500 underline-offset-8">
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500 transition-all text-sm font-mono"
          >
            <Globe size={16} />
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white hover:text-blue-500 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#020617] border-b border-blue-900 mt-0 p-6 flex flex-col gap-4 md:hidden shadow-2xl">
            {t.links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-200 hover:text-blue-500 py-2 border-b border-blue-900/20 font-bold uppercase"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => {
                setLang(lang === 'en' ? 'ar' : 'en');
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 py-2 text-blue-500 font-bold border border-blue-900/50 justify-center bg-blue-950/20"
            >
              <Globe size={16} />
              {lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

// 2. Hero Section
const Hero = ({ lang }: { lang: Language }) => {
  const t = content[lang].hero;
  return (
    <section id="home" className="pt-16 md:pt-24 pb-16 md:pb-32 px-4 md:px-6 min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-600/10 transform skew-x-12 pointer-events-none border-l border-blue-500/10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-600/10 transform -skew-x-12 pointer-events-none rounded-full blur-3xl"></div>
      
      <div className="max-w-[95%] mx-auto w-full relative z-10 text-center md:text-start">
        <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${lang === 'ar' ? 'md:flex-row-reverse' : ''}`}>
          <div className="flex-1 space-y-4 md:space-y-8">
            {/* Logo above title */}
            <div className="flex justify-center md:justify-start mb-6 reveal">
              <img 
                src="https://i.postimg.cc/fWvwHnNT/logo-ELALAMYA-png.png" 
                alt="EL ALAMYA" 
                className="h-32 md:h-40 lg:h-48 w-auto object-contain"
              />
            </div>
            
            <div className="inline-block px-3 py-1 bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-[0.2em] uppercase mb-2 reveal">
              Industrial Engineering
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-normal tracking-tight uppercase reveal delay-100">
              <span className="text-white">
                {t.title.split(' ')[0]}
              </span>
              {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
                {t.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl font-light border-l-4 border-blue-600 pl-4 md:pl-6 reveal delay-200">
              {t.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-0 justify-center md:justify-start reveal delay-300">
              <a href="#contact" className="px-6 md:px-10 py-4 md:py-5 bg-blue-700 hover:bg-blue-600 text-white font-bold uppercase tracking-wider transition-all border border-blue-500 hover:border-white shadow-lg shadow-blue-900/50 text-sm md:text-base">
                {t.ctaPrimary}
              </a>
              <a href="#services" className="px-6 md:px-10 py-4 md:py-5 bg-transparent hover:bg-white/5 border border-white/20 hover:border-red-500 text-white font-bold uppercase tracking-wider transition-all text-sm md:text-base">
                {t.ctaSecondary}
              </a>
            </div>
            
            <div className="flex gap-4 md:gap-8 pt-8 md:pt-12 border-t border-white/10 reveal delay-400 justify-center md:justify-start">
              {t.stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-start">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-blue-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 w-full flex justify-center reveal delay-300">
             {/* Abstract Industrial Graphic */}
             <div className="relative w-full max-w-md aspect-square p-4 border border-blue-900/30 bg-black/20">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-600"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-red-600"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-600"></div>

                <div className="w-full h-full relative overflow-hidden bg-blue-950/20 grayscale transition-all duration-700 group">
                   <img 
                    src="https://picsum.photos/800/800?random=1" 
                    alt="Industrial" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                   
                   {/* HUD Elements */}
                   <div className="absolute top-4 right-4 text-xs font-mono text-blue-400 flex flex-col items-end gap-1">
                      <span>SYS.01.ACTIVE</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-blue-600"></div>
                        <div className="w-1 h-3 bg-blue-600/50"></div>
                        <div className="w-1 h-5 bg-blue-600/80"></div>
                      </div>
                   </div>

                   <div className="absolute bottom-6 left-6 text-blue-100 font-mono text-xs border-l-2 border-blue-600 pl-3">
                      STATUS: OPTIMAL<br/>
                      LOAD: 98%<br/>
                      TEMP: 45°C
                   </div>
                </div>
                
                {/* Logo overlay on hero image - outside grayscale div */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <img 
                    src="https://i.postimg.cc/fWvwHnNT/logo-ELALAMYA-png.png" 
                    alt="EL ALAMYA Logo" 
                    className="w-32 md:w-48 lg:w-64 h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. About & Vision Section
const About = ({ lang }: { lang: Language }) => {
  const t = content[lang];
  return (
    <section id="about" className="py-12 md:py-24 px-4 md:px-6 relative bg-black/20 border-t border-white/5">
      <div className="max-w-[95%] mx-auto space-y-12 md:space-y-20">
        
        {/* Intro */}
        <div className="glass-card p-6 md:p-10 border-l-4 border-l-blue-600 reveal">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-xl md:text-4xl font-black mb-4 md:mb-6 text-white uppercase tracking-tighter">
                {t.about.title} <span className="text-blue-500">.</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 font-light text-sm md:text-lg">
                {t.about.description}
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {t.about.specializations.map((spec, i) => (
                  <span key={i} className="px-3 md:px-4 py-2 bg-blue-950/40 border border-blue-800/50 text-xs md:text-sm text-blue-100 font-mono uppercase">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3 md:space-y-4">
              <div className="p-6 md:p-8 bg-black/40 border border-blue-900/30 hover:border-blue-500 transition-colors relative group reveal delay-100">
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[15px] md:border-t-[20px] border-r-[15px] md:border-r-[20px] border-t-blue-600 border-r-transparent group-hover:border-t-red-500 transition-colors"></div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white uppercase tracking-wider">{t.visionMission.visionTitle}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{t.visionMission.visionText}</p>
              </div>
              <div className="p-6 md:p-8 bg-black/40 border border-red-900/30 hover:border-red-500 transition-colors relative group reveal delay-200">
                 <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[15px] md:border-b-[20px] border-l-[15px] md:border-l-[20px] border-b-red-600 border-l-transparent group-hover:border-b-blue-500 transition-colors"></div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white uppercase tracking-wider">{t.visionMission.missionTitle}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{t.visionMission.missionText}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values & Team */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
           <div className="glass-card p-6 md:p-10 reveal">
              <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 text-white uppercase">{t.about.valuesTitle}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {t.about.values.map((val, i) => (
                  <li key={i} className={`flex items-center gap-2 md:gap-3 group border border-white/5 p-3 md:p-4 hover:bg-blue-950/20 hover:border-blue-500/50 transition-all`}>
                    <CheckCircle className="text-blue-500 group-hover:text-white transition-colors flex-shrink-0" size={18} />
                    <span className="font-bold text-gray-300 group-hover:text-white uppercase text-xs md:text-sm">{val}</span>
                  </li>
                ))}
              </ul>
           </div>
           <div className="glass-card p-6 md:p-10 relative overflow-hidden group reveal delay-200">
              <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-bl from-blue-600/20 to-transparent -rotate-45 transform origin-top-right"></div>
              <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 text-white uppercase">{t.about.teamTitle}</h3>
              <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">{t.about.teamText}</p>
              <div className="flex -space-x-0 rtl:space-x-reverse gap-1">
                 {[1,2,3,4].map((n) => (
                   <div key={n} className="w-14 h-14 bg-gray-800 border border-white/10 hover:border-blue-500 transition-all overflow-hidden relative">
                      <img src={`https://picsum.photos/100/100?random=${n+10}`} alt="Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
                   </div>
                 ))}
                 <div className="w-14 h-14 bg-blue-900/80 flex items-center justify-center text-sm font-bold border border-blue-600 text-white">
                   +40
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

// 4. Services Section (Skewed)
const Services = ({ lang }: { lang: Language }) => {
  const t = content[lang].services;
  const [activeService, setActiveService] = useState<string | null>(null);

  const getIcon = (name: string) => {
    const iconSize = 24; // Smaller icon size for mobile-friendly display
    switch(name) {
      case 'Fan': return <Fan size={iconSize} />;
      case 'Zap': return <Zap size={iconSize} />;
      case 'Droplets': return <Droplets size={iconSize} />;
      case 'Flame': return <Flame size={iconSize} />;
      case 'ThermometerSun': return <ThermometerSun size={iconSize} />;
      case 'Cpu': return <Cpu size={iconSize} />;
      default: return <Fan size={iconSize} />;
    }
  };

  return (
    <div className="relative py-8 md:py-12 overflow-hidden">
      {/* Skewed Background Wrapper - Semi-transparent to show body gradient */}
      <div className="absolute inset-0 transform -skew-y-3 bg-black/40 border-y border-white/5 z-0 scale-110 backdrop-blur-sm"></div>

      <section id="services" className="relative z-10 py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-[95%] mx-auto">
          <div className="text-center mb-12 md:mb-20 reveal">
            <span className="text-blue-500 font-mono text-xs md:text-sm tracking-widest uppercase mb-2 block">Our Capabilities</span>
            <h2 className="text-xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
              {t.title}
            </h2>
            <div className="w-16 md:w-24 h-2 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {t.items.map((service, index) => (
              <div key={service.id} className={`relative group reveal delay-${Math.min(index * 100, 500)}`}>
                <div className={`glass-card p-5 md:p-8 h-full flex flex-col justify-between border border-white/5 hover:border-blue-500/50 transition-all duration-300 bg-black/40 ${activeService === service.id ? 'border-blue-500 bg-blue-950/30' : ''}`}>
                  <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-900/20 border border-blue-500/30 text-blue-500 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-none">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white uppercase tracking-wide group-hover:text-blue-400 transition-colors">{service.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 border-l-2 border-white/10 pl-3 md:pl-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                    className="w-full py-3 md:py-4 bg-transparent border border-white/10 hover:bg-blue-600 hover:border-blue-600 hover:text-white text-gray-300 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-between px-4 md:px-6"
                  >
                    {activeService === service.id ? t.close : t.learnMore}
                    {activeService === service.id ? (lang === 'ar' ? <ChevronLeft size={16}/> : <ChevronRight size={16}/>) : (lang === 'ar' ? <ChevronLeft size={16}/> : <ChevronRight size={16}/>)}
                  </button>
                </div>

                {/* Sharp Detail Panel */}
                {activeService === service.id && (
                  <div className="absolute inset-0 z-20 bg-[#020617] p-6 flex flex-col border-2 border-blue-600 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex justify-between items-center mb-4 border-b border-blue-900/30 pb-2">
                        <span className="text-blue-500 font-mono text-xs uppercase">Details_View</span>
                        <button 
                          onClick={() => setActiveService(null)}
                          className="p-1 hover:bg-blue-900/50 text-blue-500 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>
                      
                      <div className="overflow-y-auto pr-2 custom-scrollbar">
                        <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider bg-blue-900/20 p-2 border-l-2 border-blue-600">Solutions</h4>
                        <ul className="space-y-2 mb-6">
                          {service.solutions.map((s, idx) => (
                            <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                              <div className="w-1 h-1 bg-blue-600"></div>
                              {s}
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="text-white font-bold mb-3 uppercase text-xs tracking-wider bg-red-900/20 p-2 border-l-2 border-red-600">Sectors</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.sectors.map((s, idx) => (
                            <span key={idx} className="text-[10px] uppercase font-bold bg-black border border-white/20 text-gray-300 px-3 py-1 hover:bg-white/10 cursor-default">{s}</span>
                          ))}
                        </div>
                      </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// 5. Gallery Section (New)
const Gallery = ({ lang }: { lang: Language }) => {
  const t = content[lang].gallery;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThumbnailClick = (idx: number) => {
    if (idx === selectedIdx) return;
    setIsAnimating(true);
    setTimeout(() => {
        setSelectedIdx(idx);
        setIsAnimating(false);
    }, 200); // Wait for fade out
  };

  const currentItem = t.items[selectedIdx];

  return (
    <section id="gallery" className="py-12 md:py-24 px-4 md:px-6 bg-black/40">
        <div className="max-w-[95%] mx-auto">
            <div className="mb-8 md:mb-12 flex flex-col md:flex-row justify-between items-end gap-4 border-b border-white/10 pb-4 md:pb-6 reveal">
                <div>
                    <h2 className="text-xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">{t.title}</h2>
                    <p className="text-gray-400 font-light text-sm md:text-base">{t.description}</p>
                </div>
                <div className="text-blue-500 font-mono text-xs md:text-sm">
                    0{selectedIdx + 1} / 0{t.items.length}
                </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 md:gap-6 h-auto lg:h-[600px] reveal delay-200">
                {/* Main Large Image */}
                <div className="w-full h-[300px] md:h-[450px] lg:h-full lg:col-span-9 relative group overflow-hidden border border-white/10 bg-black">
                    <div className={`w-full h-full transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                        <img 
                            src={currentItem.src} 
                            alt={currentItem.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                             <div className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase mb-2">
                                {currentItem.category}
                             </div>
                             <h3 className="text-3xl font-bold text-white uppercase mb-2 animate-in slide-in-from-bottom-4 duration-500">
                                {currentItem.title}
                             </h3>
                        </div>
                    </div>
                    
                    {/* Decorative Grid Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-20" 
                         style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
                    </div>
                </div>

                {/* Thumbnails Sidebar/Bottombar */}
                <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:h-full lg:col-span-3 pb-2 lg:pb-0 custom-scrollbar">
                    {t.items.map((item, idx) => (
                        <button 
                            key={item.id}
                            onClick={() => handleThumbnailClick(idx)}
                            className={`relative w-32 md:w-48 lg:w-full h-24 lg:h-28 flex-shrink-0 border transition-all duration-300 group text-left overflow-hidden
                                ${selectedIdx === idx 
                                    ? 'border-blue-500 opacity-100' 
                                    : 'border-white/10 opacity-50 hover:opacity-80 hover:border-white/30'}`}
                        >
                            <img src={item.src} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                            <div className={`absolute inset-0 transition-colors duration-300 ${selectedIdx === idx ? 'bg-blue-900/20' : 'bg-black/60 group-hover:bg-black/40'}`}></div>
                            
                            {/* Active Indicator */}
                            {selectedIdx === idx && (
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 hidden lg:block"></div>
                            )}
                            {selectedIdx === idx && (
                                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 block lg:hidden"></div>
                            )}
                            
                            <div className="absolute bottom-2 left-3 right-2">
                                <p className="text-xs text-gray-300 truncate font-bold uppercase shadow-black drop-shadow-md">{item.title}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};


// 6. Projects & Partners
const Projects = ({ lang }: { lang: Language }) => {
  const t = content[lang];
  return (
    <section id="projects" className="py-12 md:py-24 px-4 md:px-6 relative bg-transparent">
      <div className="max-w-[95%] mx-auto space-y-12 md:space-y-24">
        
        {/* Projects Grid */}
        <div>
           <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 border-b border-white/10 pb-4 md:pb-6 gap-4 md:gap-6 reveal">
              <div>
                <h2 className="text-xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">{t.projects.title}</h2>
                <p className="text-blue-500 font-mono text-xs md:text-sm">Featured Works & Case Studies</p>
              </div>
              <div className="flex gap-2">
                 {/* Decorative squares */}
                 <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-600"></div>
                 <div className="w-2 h-2 md:w-3 md:h-3 bg-red-600"></div>
                 <div className="w-2 h-2 md:w-3 md:h-3 bg-white/20"></div>
              </div>
           </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {t.projects.categories.map((cat, i) => (
              <div key={i} className={`group cursor-pointer reveal delay-${Math.min(i * 100, 300)}`}>
                <div className="h-48 md:h-64 mb-4 md:mb-6 overflow-hidden relative border border-white/10">
                   <div className="absolute inset-0 bg-blue-900/20 z-10 group-hover:bg-transparent transition-all duration-500"></div>
                   <img 
                    src={`https://picsum.photos/400/300?random=${i+20}`} 
                    alt={cat.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-transform duration-700" 
                   />
                   
                   {/* Overlay Badge */}
                   <div className="absolute bottom-0 left-0 bg-black/90 p-3 md:p-4 border-t border-r border-blue-600 z-20">
                     <span className="font-bold text-white uppercase tracking-wider text-sm md:text-lg">{cat.title}</span>
                   </div>
                </div>
                <ul className="space-y-2 md:space-y-3 pl-3 md:pl-4 border-l border-blue-900/30 group-hover:border-blue-600 transition-colors">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-gray-400 font-mono flex items-center gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 bg-blue-600"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Banner */}
        <div className="glass-panel p-8 md:p-12 text-center border-y border-white/10 bg-blue-950/20 shadow-[0_0_50px_rgba(59,130,246,0.1)] relative overflow-hidden reveal">
          {/* Background Stripes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(45deg, #3b82f6 0, #3b82f6 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px'}}></div>
          
          <h3 className="text-lg md:text-xl font-bold mb-2 uppercase tracking-[0.2em] text-white">{t.partners.title}</h3>
          <p className="text-gray-500 mb-6 md:mb-10 max-w-2xl mx-auto text-xs md:text-sm">{t.partners.description}</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text Logos */}
             {[1,2,3,4,5].map((n) => (
               <div key={n} className="h-8 md:h-12 flex items-center justify-center border-2 border-white/20 px-4 md:px-6 font-black text-lg md:text-2xl text-white/60 hover:text-white hover:border-blue-500 transition-all uppercase select-none cursor-default shadow-lg shadow-black/20">
                 PARTNER {n}
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// 7. Why Us (Skewed)
const WhyUs = ({ lang }: { lang: Language }) => {
  const t = content[lang].whyUs;
  return (
    <div className="relative py-8 md:py-12 overflow-hidden">
       {/* Skewed Background Wrapper - Semi-transparent */}
       <div className="absolute inset-0 transform skew-y-2 bg-black/40 border-y-4 border-blue-900 z-0 scale-110 backdrop-blur-sm"></div>
    
      <section id="why-us" className="relative z-10 py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-[95%] mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-4 reveal text-center md:text-left">
              <h2 className="text-2xl md:text-5xl font-black text-white uppercase leading-none mb-4 md:mb-6">
                Why <br/> <span className="text-blue-600">Choose Us?</span>
              </h2>
              <p className="text-gray-400 mb-6 md:mb-8 text-sm md:text-base">We deliver precision, reliability, and innovation in every project.</p>
              <div className="h-1 w-16 md:w-20 bg-gradient-to-r from-blue-600 to-red-600 mx-auto md:mx-0"></div>
            </div>
            
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {t.features.map((feat, i) => (
                <div key={i} className={`glass-card p-5 md:p-6 bg-black/40 hover:bg-blue-950/20 border border-white/10 hover:border-blue-500 transition-all group reveal delay-${Math.min(i * 100, 400)}`}>
                  <div className="text-3xl md:text-5xl mb-3 md:mb-4 font-black text-transparent bg-clip-text bg-gradient-to-t from-blue-900/50 to-transparent group-hover:text-blue-700/50 transition-colors">0{i+1}</div>
                  <h3 className="font-bold text-white mb-2 text-xs md:text-sm uppercase tracking-wider group-hover:text-blue-400">{feat.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed border-t border-white/5 pt-2 mt-2">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// 8. Contact
const Contact = ({ lang }: { lang: Language }) => {
  const t = content[lang].contact;
  
  return (
    <section id="contact" className="py-12 md:py-24 px-6 bg-black/60">
      <div className="max-w-[95%] mx-auto">
        <div className="max-w-4xl mx-auto">
          
          {/* Info Side */}
          <div className="space-y-8 md:space-y-10 reveal">
            <div>
              <h2 className="text-2xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">{t.title}</h2>
              <div className="w-full h-[2px] bg-gradient-to-r from-blue-600 to-red-600"></div>
            </div>

            {/* Locations Section - Centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-3xl">
                {t.info.addresses.map((address: string, index: number) => {
                  const locationImages = [
                    'https://i.pinimg.com/1200x/bd/8a/34/bd8a342fec53d262024b4c55f36bcdb9.jpg', // Egypt
                    'https://i.pinimg.com/736x/09/b5/b6/09b5b62ece305e10396ecedac3b364f7.jpg'  // UAE
                  ];
                  
                  return (
                    <div key={index} className="flex flex-col gap-4 group">
                      {/* Image with location info overlay */}
                      <div className="relative overflow-hidden border-2 border-blue-600 group-hover:border-red-600 transition-all h-48 shadow-[4px_4px_0px_0px_rgba(37,99,235,0.5)] group-hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,0.5)]">
                        <img 
                          src={locationImages[index]} 
                          alt={address}
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <MapPin size={20} className="text-blue-500 group-hover:text-red-500 transition-colors" />
                            <h4 className="font-bold text-white text-sm uppercase">{index === 0 ? 'Egypt' : 'UAE'}</h4>
                          </div>
                          <p className="text-gray-300 text-xs font-light">{address}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Methods Section - Centered */}
            <div className="flex flex-col items-center gap-6 md:gap-8">
              {/* Phone and WhatsApp Row */}
              <div className="flex gap-6 md:gap-8 justify-center">
                <div className="flex flex-col items-center gap-4 group">
                  <div className="p-3 md:p-4 bg-black border border-blue-600 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(37,99,235,0.5)]">
                    <Phone size={20} />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-white text-sm md:text-lg uppercase mb-1 whitespace-nowrap">Phone</h4>
                    <a href={`tel:${t.info.phone}`} className="text-gray-400 hover:text-white font-light font-mono text-xs md:text-sm transition-colors block whitespace-nowrap" dir="ltr">{t.info.phone}</a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 group">
                  <div className="p-3 md:p-4 bg-black border border-green-600 text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(34,197,94,0.5)]">
                    <MessageCircle size={20} />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-white text-sm md:text-lg uppercase mb-1 whitespace-nowrap">WhatsApp</h4>
                    <a href={`https://wa.me/${t.info.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-light font-mono text-xs md:text-sm transition-colors block whitespace-nowrap" dir="ltr">{t.info.phone}</a>
                  </div>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-4 group">
                  <div className="p-3 md:p-4 bg-black border border-red-600 text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(220,38,38,0.5)]">
                    <Mail size={20} />
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold text-white text-sm md:text-lg uppercase mb-1 whitespace-nowrap">Email</h4>
                    <p className="text-gray-400 font-light text-xs md:text-sm whitespace-nowrap">{t.info.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-3 md:gap-4 pt-4 justify-center">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2 md:p-3 bg-black border border-white/20 hover:border-blue-500 text-gray-400 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
      
      {/* Footer Strip */}
      <div className="mt-12 md:mt-20 border-t border-white/10 pt-6 md:pt-8 reveal">
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          {/* Footer Logo */}
          <img 
            src="https://i.postimg.cc/fWvwHnNT/logo-ELALAMYA-png.png" 
            alt="EL ALAMYA" 
            className="h-12 md:h-20 w-auto opacity-70 hover:opacity-100 transition-all duration-500"
          />
          <p className="text-gray-600 text-xs font-mono uppercase px-4">{content[lang].footer.rights}</p>
        </div>
      </div>
    </section>
  );
};

// --- Loading Screen Component ---
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-[#020617] via-[#172554] to-[#450a0a] flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="https://i.postimg.cc/fWvwHnNT/logo-ELALAMYA-png.png" 
            alt="EL ALAMYA" 
            className="h-40 md:h-56 w-auto object-contain mx-auto"
          />
        </div>
        
        {/* Loading spinner */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Loading screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  // Set page direction based on language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Font family is set globally in index.html CSS
  }, [lang]);

  // Setup Scroll Reveal Observer
  useEffect(() => {
    // Skip if still loading
    if (loading) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: "0px 0px 200px 0px" // Trigger earlier - 200px before element enters viewport
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [lang, loading]); // Re-run if lang changes or loading state changes

  // Show loading screen
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen text-white overflow-x-hidden ${lang === 'ar' ? 'text-right' : 'text-left'} bg-transparent`}>
      <Navbar lang={lang} setLang={setLang} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      <Gallery lang={lang} />
      <Projects lang={lang} />
      <WhyUs lang={lang} />
      <Contact lang={lang} />
    </div>
  );
};

export default App;