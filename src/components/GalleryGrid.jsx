import { motion } from 'framer-motion'
import { artworks } from '../data/artworks'
import { useLang } from './LanguageContext'

export default function GalleryGrid({ onOpen }) {
  const { lang } = useLang()
  return (
    <section id="works" className="max-w-6xl mx-auto px-6 pb-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {artworks.map((w, i) => (
          <motion.button
            key={w.id}
            onClick={() => onOpen(w.id)}
            className="group relative aspect-square bg-white border border-black/10 overflow-hidden rounded"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10 group-hover:to-black/30 transition" />
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
