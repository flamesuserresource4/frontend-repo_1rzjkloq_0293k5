import { useState } from 'react'
import { LanguageProvider } from './components/LanguageContext'
import Layout from './components/Layout'
import Hero from './components/Hero'
import GalleryGrid from './components/GalleryGrid'
import WorkModal from './components/WorkModal'
import About from './components/About'

function App() {
  const [openId, setOpenId] = useState(null)

  return (
    <LanguageProvider>
      <Layout>
        <Hero />
        <GalleryGrid onOpen={setOpenId} />
        <About />
        <WorkModal openId={openId} onClose={() => setOpenId(null)} />
      </Layout>
    </LanguageProvider>
  )
}

export default App
