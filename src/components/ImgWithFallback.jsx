import { useState, useMemo } from 'react'

// Simple inline SVG placeholder (beige gradient) as data URL
const placeholderDataUrl = (() => {
  const svg = encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#f3efe7'/><stop offset='100%' stop-color='#e7e1d6'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><rect x='40' y='40' width='1120' height='820' fill='none' stroke='#d6d0c6' stroke-width='2' stroke-dasharray='8 8'/></svg>`)
  return `data:image/svg+xml;charset=utf-8,${svg}`
})()

export default function ImgWithFallback({ srcs = [], alt = '', className = '', style = {}, loading = 'lazy' }) {
  const sources = useMemo(() => (Array.isArray(srcs) ? srcs : [srcs]).filter(Boolean), [srcs])
  const [idx, setIdx] = useState(0)
  const [src, setSrc] = useState(sources[0] || placeholderDataUrl)

  const handleError = () => {
    const next = idx + 1
    if (next < sources.length) {
      setIdx(next)
      setSrc(sources[next])
    } else {
      setSrc(placeholderDataUrl)
    }
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onError={handleError}
    />
  )
}
