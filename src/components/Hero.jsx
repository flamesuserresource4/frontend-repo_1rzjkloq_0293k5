import { motion } from 'framer-motion'
import { useLang } from './LanguageContext'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <motion.h1 initial={{opacity:0, y: 20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-4xl sm:text-6xl font-serif tracking-tight">
          {t.hero.title}
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2, duration:0.6}} className="mt-3 text-black/60">{t.hero.subtitle}</motion.p>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.35, duration:0.6}} className="mt-6 text-xl sm:text-2xl max-w-3xl">{t.hero.tagline}</motion.p>
        <motion.a href="#works" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:0.6}} className="inline-block mt-8 px-5 py-3 rounded-full bg-black text-white hover:bg-black/90 transition">
          {t.hero.cta}
        </motion.a>
      </div>
    </section>
  )
}
