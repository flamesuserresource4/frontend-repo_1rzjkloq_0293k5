import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { artworks } from '../data/artworks'
import { useLang } from './LanguageContext'

export default function WorkModal({ openId, onClose }) {
  const { lang, t } = useLang()
  const work = artworks.find(a => a.id === openId)

  useEffect(() => {
    if (openId) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => (document.body.style.overflow = '')
  }, [openId])

  return (
    <AnimatePresence>
      {openId && work && (
        <motion.div className="fixed inset-0 z-50" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 18 }} className="absolute inset-4 sm:inset-8 bg-[#f8f6f3] rounded-xl overflow-y-auto shadow-2xl">
            <div className="max-w-5xl mx-auto px-6 py-8">
              <button onClick={onClose} className="mb-4 text-sm underline opacity-60 hover:opacity-100">{t.gallery.back}</button>
              <h2 className="text-2xl sm:text-3xl font-serif">{work.title[lang]}</h2>
              <p className="mt-2 text-black/70 max-w-3xl">{work.description[lang]}</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {work.images.slice(1).map((img, idx) => (
                  <motion.div key={img} initial={{opacity:0, y: 12}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5, delay: idx*0.05}} className="aspect-[4/3] rounded bg-white border border-black/10"/>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
