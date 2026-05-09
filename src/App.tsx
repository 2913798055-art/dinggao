import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lightbulb, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight,
  Globe,
  Zap,
  Menu,
  X
} from 'lucide-react';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { ProjectsOverview } from './components/ProjectsOverview';
import { projectGroups } from './data/projects';

// Localization
const translations = {
  zh: {
    company: "广州市视励安电子产品有限公司",
    slogan: "引领光的艺术，重塑空间魅力",
    description: "致力于为高端酒吧、Livehouse、KTV提供最前沿的LED视觉产品与整体解决方案。我们以技术为核心，用创意点亮每一个娱乐瞬间。",
    navHome: "首页",
    navProjects: "项目一览",
    navHistory: "发展史",
    navContact: "联系我们",
    address: "广州市番禺区东环街道骏盈大厦2栋319-321",
    phone: "王云：18820206662",
    email: "2913798055@qq.com",
    rights: "© 2024 视励安电子. 保留所有权利。"
  },
  en: {
    company: "Guangzhou Shilian Electronics",
    slogan: "Leading Light Art, Reshaping Space Charm",
    description: "Dedicated to providing cutting-edge LED visual products and turn-key solutions for high-end bars, livehouses, and KTVs. We bridge technology and creativity.",
    navHome: "Home",
    navProjects: "Projects",
    navHistory: "History",
    navContact: "Contact",
    address: "319-321, Building 2, Junying Building, Donghuan Street, Panyu District, Guangzhou",
    phone: "Wang Yun: +86 18820206662",
    email: "2913798055@qq.com",
    rights: "© 2024 Shilian Electronics. All Rights Reserved."
  }
};

export default function App() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = translations[lang];

  const switchLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white relative">
      <BackgroundAnimation />
      {/* Navigation */}
      <nav className="glass-nav px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 144 48" className="h-7 sm:h-8 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="16" width="16" height="16" rx="3" fill="#00E5FF" />
              <rect x="22" y="16" width="16" height="16" rx="3" fill="#00E5FF" />
              <path d="M47 0 C45.3431 0 44 1.34315 44 3V16H53V32H44V45C44 46.6569 45.3431 48 47 48H60V0H47Z" fill="#00E5FF" />
              <path d="M60 0H140C142.209 0 144 1.79086 144 4V44C144 46.2091 142.209 48 140 48H60V0Z" fill="#0066FF" />
            </svg>
            <span className="text-xl font-black tracking-tighter leading-none hidden sm:block">
              {t.company}
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">{t.navHome}</a>
          <a href="#projects" className="hover:text-primary transition-colors">{t.navProjects}</a>
          <a href="#history" className="hover:text-primary transition-colors">{t.navHistory}</a>
          <a href="#contact" className="hover:text-primary transition-colors">{t.navContact}</a>
          <button 
            onClick={switchLang}
            className="flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <Globe size={14} />
            {lang === 'zh' ? 'English' : '中文'}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={switchLang} className="p-2 bg-white/10 rounded-full">
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
            className="fixed inset-x-0 top-[64px] sm:top-[76px] bg-slate-900 border-b border-white/10 z-40 shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.navHome}</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.navProjects}</a>
            <a href="#history" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.navHistory}</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">{t.navContact}</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-300 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Industry Leading LED Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight px-4 sm:px-0">
              {t.slogan}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed px-4">
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
                className="px-8 py-4 bg-white/10 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/20 transition-colors flex items-center justify-center"
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
              { icon: <Zap className="text-amber-500" />, count: "10000+", label: lang === 'zh' ? '交付项目' : 'Projects' },
              { icon: <MapPin className="text-red-500" />, count: "800+", label: lang === 'zh' ? '覆盖城市' : 'Cities' },
              { icon: <Users className="text-blue-500" />, count: lang === 'zh' ? "专业团队" : "Professionals", label: lang === 'zh' ? '服务保障' : 'Service Support' }
            ].map((stat, i) => (
              <div key={i} className={`tech-card p-6 sm:p-10 text-center ${i === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}>
                <div className="inline-flex p-3 bg-white/5 rounded-xl mb-4">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-black mb-1">{stat.count}</div>
                <div className="text-[10px] sm:text-sm text-slate-400 uppercase tracking-wider font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      <ProjectsOverview />

      {/* History Section */}
      <section id="history" className="py-24 relative z-0 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-blue-900/5 mix-blend-color-burn pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
              {lang === 'zh' ? '广州市视励安电子产品有限公司 发展史' : 'Development History'}
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-8" />
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {[
              { year: '2016', title: lang === 'zh' ? '公司成立' : 'Foundation', desc: lang === 'zh' ? '广州市视励安电子产品有限公司正式成立，立足珠三角，开启光电产品及技术探索之路。' : 'Guangzhou Shilian Electronic Products Co., Ltd. was established, focusing on optoelectronic technology.' },
              { year: '2017', title: lang === 'zh' ? '初露锋芒' : 'Emerging Force', desc: lang === 'zh' ? '开始拓展娱乐夜店显示市场，打造首个标杆级夜店LED视觉项目。' : 'Began expanding into the entertainment nightclub display market, creating the first benchmark nightclub LED visual project.' },
              { year: '2018', title: lang === 'zh' ? '核心突破与沉淀' : 'Industry Breakthroughs', desc: lang === 'zh' ? '研发并推出初代高刷LED显示屏系列，成功应用于多个知名酒吧及大型演艺中心。' : 'Launched the first generation of high-refresh LED displays, successfully applied in well-known bars and performance centers.' },
              { year: '2019', title: lang === 'zh' ? '产品矩阵丰富' : 'Product Diversification', desc: lang === 'zh' ? '推出透明屏及定制化异形屏产品，极大丰富酒吧视觉设计元素。' : 'Launched transparent and customized irregular screens, greatly enriching bar visual design elements.' },
              { year: '2020', title: lang === 'zh' ? '深耕特定领域' : 'Deepening Niche Markets', desc: lang === 'zh' ? '针对市场环境变化优化供应链，针对KTV与特定派对空间推出专属高性价比方案。' : 'Optimized the supply chain and launched exclusive cost-effective solutions for KTVs and specific party spaces.' },
              { year: '2021', title: lang === 'zh' ? '全国业务扩展' : 'National Expansion', desc: lang === 'zh' ? '服务网络全面升级，业务逐步拓展至全国80多个城市，覆盖数百家优质娱乐品牌。' : 'Upgraded service network, expanding business to over 80 cities nationwide and covering hundreds of premium entertainment brands.' },
              { year: '2022', title: lang === 'zh' ? '确立领先地位' : 'Establishing Leadership', desc: lang === 'zh' ? '与多家国内顶尖夜店品牌达成深度战略合作，确立在娱乐显示领域的领先地位。' : 'Reached deep strategic partnerships with several top domestic nightclub brands, establishing a leading position.' },
              { year: '2023', title: lang === 'zh' ? '软硬一体化' : 'Hardware-Software Integration', desc: lang === 'zh' ? '引入智能播控系统与专业团队，为客户提供从硬件到软件的整体视觉解决方案。' : 'Introduced intelligent control systems, providing customers with comprehensive hardware and software visual solutions.' },
              { year: '2024', title: lang === 'zh' ? '战略新纪元' : 'New Era Strategy', desc: lang === 'zh' ? '全面实施“视觉艺术+显示硬件”双驱动发展战略，成功将业务推向东南亚等国际舞台。' : 'Implemented the "Visual Art + Display Hardware" dual-drive strategy, stepping onto the international stage.' },
              { year: '2025', title: lang === 'zh' ? '全球化视野' : 'Global Vision', desc: lang === 'zh' ? '深化海外市场布局，参与多场国际专业展会，品牌国际影响力进一步提升。' : 'Deepened overseas market layout and participated in international exhibitions, enhancing global brand influence.' },
              { year: '2026', title: lang === 'zh' ? '十周年跨越' : '10th Anniversary Leap', desc: lang === 'zh' ? '步入十周年里程碑，发布全新一代沉浸式视觉交互体验方案，持续引领行业创新。' : 'Entering the 10th anniversary, released a new generation of immersive visual interactive experience solutions.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xl shadow-primary/20 absolute left-0 md:left-1/2 z-10 mx-0">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-14 md:ml-0 p-6 rounded-2xl bg-slate-900 border border-white/10 shadow-lg hover:border-primary/50 transition-colors z-20">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white mb-1 md:mb-0">{item.title}</h3>
                    <span className="font-black text-2xl text-primary/80">{item.year}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
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
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div className="col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex flex-col text-white">
                  <span className="text-xl font-black tracking-tighter leading-none">
                    {t.company}
                  </span>
                </div>
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
