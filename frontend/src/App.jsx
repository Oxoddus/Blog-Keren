import { useEffect, useState } from 'react'

function App() {
  const [health, setHealth] = useState('Memuat...')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealth(data.message || 'OK'))
      .catch(() => setHealth('Tidak terhubung'))
  }, [])

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '32px', maxWidth: 720, margin: '0 auto' }}>
      <h1>TeknoFixHub Frontend</h1>
      <p>Frontend React minimal untuk menampilkan dashboard dan memanggil API backend.</p>
      <div style={{ marginTop: 24, padding: 18, background: '#f3f4f6', borderRadius: 16 }}>
        <h2>Status Backend</h2>
        <p>{health}</p>
      </div>
    </main>
  )
}

export default App
