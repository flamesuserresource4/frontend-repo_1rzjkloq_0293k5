import { motion } from 'framer-motion'
import { artworks } from '../data/artworks'
import { useLang } from './LanguageContext'
import ImgWithFallback from './ImgWithFallback'

export default function GalleryGrid({ onOpen }) {
  const { lang } = useLang()
  return (
    <section id="works" className="max-w-6xl mx-auto px-6 pb-12">
      <div className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2">
        {artworks.map((w, i) => (
          <motion.button
            key={w.id}
            onClick={() => onOpen(w.id)}
            className="group relative w-[280px] sm:w-[320px] aspect-[4/5] bg-white border border-black/10 overflow-hidden rounded snap-start shrink-0"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            viewport={{ once: true }}
          >
            <ImgWithFallback
              srcs={[`/work/${w.id}/main.jpg`, `/work/${w.id}/main.jpeg`, `/work/${w.id}/main.png`, `/work/${w.id}/main.webp`, `/work/${w.id}/main.svg`]}
              alt={w.title[lang]}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/25 group-hover:to-black/45 transition" />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-left">
              <p className="text-xs text-white/80">{String(i+1).padStart(2,'0')}</p>
              <h3 className="text-white text-sm sm:text-base font-serif">{w.title[lang]}</h3>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  )
}
