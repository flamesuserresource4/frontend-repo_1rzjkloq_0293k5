import { useLang } from './LanguageContext'
import { Instagram, Linkedin, Mail, Phone, Globe } from 'lucide-react'

export default function Layout({ children, onChangeLang }) {
  const { lang, setLang, t } = useLang()
  return (
    <div className="min-h-screen bg-[#f8f6f3] text-[#1a1a1a] selection:bg-black selection:text-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-[#f8f6f3]/80 border-b border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl sm:text-2xl font-serif tracking-tight">{t.hero.title}</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#works" className="hover:opacity-70 transition">{t.nav.works}</a>
            <a href="#about" className="hover:opacity-70 transition">{t.nav.about}</a>
            <a href="#contact" className="hover:opacity-70 transition">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              aria-label="toggle language"
              onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
              className="text-xs uppercase tracking-widest px-3 py-1 border border-black/10 rounded-full hover:bg-black hover:text-white transition"
            >
              {lang === 'en' ? 'FR' : 'EN'}
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer id="contact" className="mt-24 border-t border-black/5">
        <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-serif mb-2">{t.contact.title}</h3>
            <p className="text-sm text-black/70 mb-4">{t.contact.intro}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://instagram.com/yassineradhouani" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition"><Instagram size={16}/> {t.contact.instagram}</a>
              <a href="https://linkedin.com/in/yassine-radhouani" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition"><Linkedin size={16}/> {t.contact.linkedin}</a>
              <a href="https://wa.me/21650000000" target="_blank" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition"><Phone size={16}/> {t.contact.whatsapp}</a>
              <a href="mailto:hello@yassine.dev" className="inline-flex items-center gap-2 px-3 py-2 rounded-full border border-black/10 hover:bg-black hover:text-white transition"><Mail size={16}/> {t.contact.email}</a>
            </div>
          </div>
          <div className="sm:text-right">
            <p className="text-sm text-black/60">{t.hero.location}</p>
            <p className="text-sm mt-1 text-black/60">© {new Date().getFullYear()} {t.hero.title}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
