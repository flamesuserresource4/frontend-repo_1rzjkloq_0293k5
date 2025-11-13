import { motion } from 'framer-motion'
import { useLang } from './LanguageContext'
import ImgWithFallback from './ImgWithFallback'

export default function Hero() {
  const { t } = useLang()
  const bgCandidates = ['/work/portrait.jpg', '/work/portrait.jpeg', '/work/portrait.png']
  return (
    <section className="relative overflow-hidden min-h-[70vh] sm:min_h-[80vh]">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f] to-[#2b2b2b]" />

      {/* Portrait image layer with graceful fallback */}
      <div className="absolute inset-0">
        <ImgWithFallback
          srcs={bgCandidates}
          alt="Yassine Radhouani portrait"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Vignette overlay to keep face visible and text legible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/0" />

      <div className="relative max-w-6xl mx-auto px-6 py-10 sm:py-16 h-full flex items-end">
        <div className="pb-6 sm:pb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white/90 text-sm sm:text-base tracking-wide uppercase"
          >
            Architect & Artist • Architecte & Artiste
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-serif tracking-tight text-white drop-shadow-md"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 max-w-2xl text-white/90 text-lg sm:text-xl"
          >
            {t.hero.tagline}
          </motion.p>
          <motion.a
            href="#works"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="inline-block mt-8 px-5 py-3 rounded-full bg-white/95 text-black hover:bg-white transition"
          >
            {t.hero.cta}
          </motion.a>
        </div>
      </div>
    </section>
  )
}
