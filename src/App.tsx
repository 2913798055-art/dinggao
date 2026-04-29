import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  Lightbulb, 
  Music, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Search, 
  ChevronRight,
  Globe,
  Monitor,
  Zap,
  Menu,
  X,
  Play,
  ExternalLink
} from 'lucide-react';
import { projects, Project } from './data/projects';

// Localization
const translations = {
  zh: {
    company: "广州市视励安电子产品有限公司",
    slogan: "引领光的艺术，重塑空间魅力",
    description: "致力于为高端酒吧、Livehouse、KTV提供最前沿的LED视觉产品与整体解决方案。我们以技术为核心，用创意点亮每一个娱乐瞬间。",
    navHome: "首页",
    navProjects: "项目案例",
    navAbout: "关于我们",
    navContact: "联系我们",
    categoryAll: "全部案例",
    categoryBar: "酒吧案例",
    categoryKtv: "KTV案例",
    searchPlaceholder: "搜索项目名称或地区...",
    statProjects: "成功案例",
    statCities: "覆盖城市",
    statService: "专业团队",
    aboutTitle: "为什么选择视励安？",
    aboutDesc: "我们专注于LED光电技术的研发与应用，不仅提供硬件，更提供完整的视觉艺术表达。从概念设计到落地执行，视励安是您最值得信赖的伙伴。",
    contactTitle: "联系我们",
    address: "广州市番禺区XX街道XX大厦",
    phone: "135-xxxx-xxxx",
    email: "contact@shilian.com",
    rights: "© 2024 视励安电子. 保留所有权利。"
  },
  en: {
    company: "Guangzhou Shilian Electronics",
    slogan: "Leading Light Art, Reshaping Space Charm",
    description: "Dedicated to providing cutting-edge LED visual products and turn-key solutions for high-end bars, livehouses, and KTVs. We bridge technology and creativity.",
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About Us",
    navContact: "Contact",
    categoryAll: "All Projects",
    categoryBar: "Bar & Club",
    categoryKtv: "KTV & Party",
    searchPlaceholder: "Search projects or regions...",
    statProjects: "Projects",
    statCities: "Cities",
    statService: "Service Team",
    aboutTitle: "Why Choose Shilian?",
    aboutDesc: "We focus on R&D and application of LED optoelectronic technology, providing not just hardware, but complete visual artistic expression. From conceptual design to execution.",
    contactTitle: "Contact Us",
    address: "XX District, Guangzhou, Guangdong, China",
    phone: "+86 135-xxxx-xxxx",
    email: "contact@shilian.com",
    rights: "© 2024 Shilian Electronics. All Rights Reserved."
  }
};

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [activeTab, setActiveTab] = useState<'all' | 'bar' | 'ktv'>('all');
  const [provinceFilter, setProvinceFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[lang];

  const provinces = useMemo(() => {
    return Array.from(new Set(projects.map(p => p.province).filter(Boolean))).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchCategory = activeTab === 'all' || p.category === activeTab;
      const matchProvince = provinceFilter === 'all' || p.province === provinceFilter;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          (p.region && p.region.toLowerCase().includes(search.toLowerCase()));
      return matchCategory && matchProvince && matchSearch;
    });
  }, [activeTab, provinceFilter, search]);

  const switchLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="glass-nav px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Monitor size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            {t.company}
          </span>
          <span className="text-xl font-bold tracking-tight sm:hidden">
            视励安 | Shilian
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">{t.navHome}</a>
          <a href="#projects" className="hover:text-primary transition-colors">{t.navProjects}</a>
          <a href="#about" className="hover:text-primary transition-colors">{t.navAbout}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t.navContact}</a>
          <button 
            onClick={switchLang}
            className="flex items-center gap-1 px-3 py-1 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
          >
            <Globe size={14} />
            {lang === 'zh' ? 'English' : '中文'}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={switchLang} className="p-2 bg-slate-100 rounded-full">
            <Globe size={18} />
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 bg-white z-40 border-b shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.navHome}</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.navProjects}</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.navAbout}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.navContact}</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/20 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Industry Leading LED Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight px-4 sm:px-0">
              {t.slogan}
            </h1>
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
              <a 
                href="#projects"
                className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-lg shadow-primary/30 hover:-translate-y-1 transition-transform flex items-center justify-center gap-2"
              >
                {t.navProjects} <ChevronRight size={18} />
              </a>
              <a 
                href="#contact"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-colors flex items-center justify-center"
              >
                {t.navContact}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-4"
          >
            {[
              { icon: <Zap className="text-amber-500" />, count: "200+", label: t.statProjects },
              { icon: <MapPin className="text-red-500" />, count: "50+", label: t.statCities },
              { icon: <Users className="text-blue-500" />, count: lang === 'zh' ? "核心专家" : "Experts", label: t.statService }
            ].map((stat, i) => (
              <div key={i} className={`tech-card p-6 sm:p-10 text-center ${i === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}>
                <div className="inline-flex p-3 bg-slate-50 rounded-xl mb-4">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-black mb-1">{stat.count}</div>
                <div className="text-[10px] sm:text-sm text-slate-400 uppercase tracking-wider font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-black mb-4 tracking-tight">{t.navProjects}</h2>
              <div className="flex flex-wrap gap-3">
                <select 
                  value={provinceFilter}
                  onChange={(e) => setProvinceFilter(e.target.value)}
                  className="px-4 py-2 bg-slate-100 border-none rounded-full text-sm font-bold focus:ring-2 focus:ring-primary/20"
                >
                  <option value="all">{lang === 'zh' ? '所有省级地区' : 'All Provinces'}</option>
                  {provinces.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
                {(['all', 'bar', 'ktv'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      activeTab === cat 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat === 'all' ? t.categoryAll : cat === 'bar' ? t.categoryBar : t.categoryKtv}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-primary/30 transition-all hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    {project.videoUrl ? (
                      <video 
                        src={project.videoUrl} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300">
                        <Monitor size={48} opacity={0.2} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                       <span className="text-white text-xs font-bold flex items-center gap-1">
                          <Zap size={12} fill="currentColor" /> {lang === 'zh' ? '经典案例' : 'Classic Case'}
                       </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-1.5 rounded-lg ${project.category === 'bar' ? 'bg-indigo-50 text-indigo-500' : 'bg-pink-50 text-pink-500'}`}>
                        {project.category === 'bar' ? <Music size={14} /> : <BarChart3 size={14} />}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                        {project.category === 'bar' ? 'Bar & Club' : 'KTV Room'}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors leading-tight mb-4 min-h-[2.5rem] text-sm sm:text-base">
                      {project.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      {project.region && (
                        <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                          <MapPin size={10} /> {project.region}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-slate-400">
              No projects found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* Projects Wall / About Section */}
      <section id="about" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">Proven Experience</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              {lang === 'zh' ? '全案工程案例一览' : 'Complete Project Portfolio'}
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8" />
            <p className="text-lg text-slate-500 max-w-3xl mx-auto">
              {lang === 'zh' 
                ? '多年深耕娱乐行业，我们已在全国乃至东南亚落地上百个顶尖工程项目。' 
                : 'With years of expertise in the entertainment industry, we have successfully delivered hundreds of top-tier projects worldwide.'}
            </p>
          </div>

          <div className="relative group">
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-3 opacity-90 group-hover:opacity-100 transition-opacity">
              {projects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.005, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="break-inside-avoid flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-100 text-[11px] md:text-xs font-bold text-slate-600 shadow-xs hover:border-primary/50 hover:text-primary hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default"
                >
                  <div className="w-1 h-1 bg-primary/40 rounded-full" />
                  <span className="truncate">{project.name}</span>
                </motion.div>
              ))}
            </div>
            {/* Visual indicators for wall richness */}
            <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: lang === 'zh' ? '覆盖国家' : 'Countries', value: '5+' },
              { label: lang === 'zh' ? '落地省份' : 'Provinces', value: '20+' },
              { label: lang === 'zh' ? '娱乐品牌' : 'Brands', value: '50+' },
              { label: lang === 'zh' ? '硬件标准' : 'Standard', value: 'ISO/CE' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 text-center shadow-sm">
                <div className="text-2xl font-black text-slate-900 mb-1">{stat.value}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-white py-20 px-6 relative">
        <button 
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-xl hover:-translate-y-1 transition-transform"
        >
          <ChevronRight className="-rotate-90" size={24} />
        </button>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <Monitor className="text-primary" />
                <span className="text-2xl font-black">{lang === 'zh' ? '视励安电子' : 'Shilian Electronics'}</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Professional LED visual solutions for the next generation of entertainment.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Globe size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8">{t.contactTitle}</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-primary shrink-0" size={20} />
                  <span className="text-slate-400">{t.address}</span>
                </div>
                <div className="flex gap-4">
                  <Phone className="text-primary shrink-0" size={20} />
                  <span className="text-slate-400">{t.phone}</span>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-primary shrink-0" size={20} />
                  <span className="text-slate-400">{t.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-8">Certifications</h4>
              <div className="grid grid-cols-2 gap-4">
                {['ISO9001', 'CE Certified', 'FCC Compliant', 'RoHS'].map(cert => (
                  <div key={cert} className="px-4 py-2 border border-slate-800 rounded-lg text-xs font-bold text-slate-500 uppercase tracking-widest text-center">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">{t.rights}</p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
