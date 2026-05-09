import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { projectGroups } from '../data/projects';

export function ProjectsOverview() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="projects" className="py-32 bg-[#020617] relative z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-slate-950 to-[#020617] pointer-events-none" />
      
      {/* Decorative dot matrix */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '32px 32px' }} pointer-events-none />

      <div className="max-w-[85rem] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 bg-primary/10 rounded-full mb-6 border border-primary/20 backdrop-blur-md"
          >
            <Sparkles size={14} className="mr-2 text-primary" />
            <span className="text-xs font-black tracking-[0.2em] uppercase text-primary">Our Portfolio</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white"
          >
            海量顶尖项目交付一览
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto font-medium"
          >
            上万个顶尖娱乐空间交付经验，以视觉艺术赋能每一场狂欢。
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar / Tabs */}
          <div className="w-full lg:w-1/4 shrink-0 z-20">
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scrollbar sticky top-24">
              {projectGroups.map((group, idx) => {
                const isActive = activeIdx === idx;
                const match = group.title.match(/(.*?)\s*\((.*?)\)$/);
                const titleZh = match ? match[1] : group.title;
                const titleEn = match ? match[2] : '';

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`relative flex flex-col items-start px-6 py-4 rounded-2xl transition-all whitespace-nowrap lg:whitespace-normal group border ${
                      isActive 
                        ? 'bg-primary/10 border-primary/30 shadow-[0_0_15px_rgba(var(--color-primary),0.15)]' 
                        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                    }`}
                  >
                    <span className={`font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {titleZh}
                    </span>
                    {titleEn && (
                      <span className={`text-[10px] font-black uppercase tracking-wider mt-1 transition-colors ${isActive ? 'text-primary' : 'text-slate-500'}`}>
                        {titleEn}
                      </span>
                    )}
                    
                    {/* Active indicator glow */}
                    {isActive && (
                      <motion.div 
                        layoutId="active-nav-glow"
                        className="absolute inset-0 rounded-2xl border border-primary/50 shadow-[inset_0_0_20px_rgba(var(--color-primary),0.2)] pointer-events-none"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-3/4 min-h-[500px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white/[0.02] border border-white/[0.08] rounded-[2rem] p-6 lg:p-12 backdrop-blur-xl relative overflow-hidden shadow-2xl"
                >
                  {/* Internal Glow for Glassmorphism */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                  
                  <div className="mb-10 relative z-10 border-b border-white/[0.08] pb-6">
                    <h3 className="text-3xl lg:text-4xl font-black text-white tracking-wide mb-2">
                       {projectGroups[activeIdx].title.split('(')[0].trim()}
                    </h3>
                    <p className="text-primary font-black tracking-widest text-sm uppercase">
                       {projectGroups[activeIdx].title.match(/\((.*?)\)/)?.[1]}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 relative z-10">
                    {projectGroups[activeIdx].projects.map((project, pIdx) => (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: pIdx * 0.02, duration: 0.4, type: "spring" }}
                        key={pIdx}
                        className="relative group/item cursor-default"
                      >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-primary/30 blur-xl rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                        
                        {/* Card Content */}
                        <div className="relative flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5 group-hover/item:bg-primary/10 group-hover/item:border-primary/50 transition-all duration-300">
                          <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center shrink-0 border border-white/5 group-hover/item:border-primary/30">
                            <Sparkles className="text-primary/50 group-hover/item:text-primary transition-colors duration-300 shrink-0" size={14} />
                          </div>
                          <span className="text-sm md:text-base text-slate-300 group-hover/item:text-white transition-colors duration-300 font-bold tracking-wide">
                            {project}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>
        </div>

        <div className="mt-20 text-center">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-pulse"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              更多项目持续接洽与交付中...
            </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
