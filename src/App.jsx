import { useEffect, useState } from 'react'
import './index.css'
import photo from './assets/アイスランド滝.jpg'

export default function App() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className="page" style={{ backgroundImage: `url(${photo})` }}>
      <div className="overlay" />

      <main className={`card ${mounted ? 'visible' : ''}`}>
        <img src={photo} alt="Yasutoshi Yoshikawa" className="photo-circle" />

        <div className="bio">
          <h1 className="name">Yasutoshi Yoshikawa</h1>
          <p className="tagline">作って、広げて、新しい世界を見る</p>
        </div>

        <div className="divider">
          <span />
          <span className="dot" />
          <span />
        </div>

        <p className="motto">
          人の評価は気まぐれで適当で<br />全くあてにならないもの
        </p>
      </main>
    </div>
  )
}
