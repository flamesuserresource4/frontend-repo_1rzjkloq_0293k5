import { useLang } from './LanguageContext'
import { motion } from 'framer-motion'

export default function About() {
  const { t } = useLang()
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-2xl sm:text-3xl font-serif mb-6">{t.about.title}</motion.h2>
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-lg mb-2">{t.about.biographyTitle}</h3>
          <p className="text-black/70 leading-relaxed">{t.about.biography}</p>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-serif text-lg mb-2">{t.about.educationTitle}</h3>
            <p className="text-black/70">{t.about.education}</p>
          </div>
          <div>
            <h3 className="font-serif text-lg mb-2">{t.about.philosophyTitle}</h3>
            <p className="text-black/70">{t.about.philosophy}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
