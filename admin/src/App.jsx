import { useState } from 'react'

function App() {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', background: '#0f172a', color: '#fff' }}>
        <div>
          <h1 style={{ margin: 0 }}>TeknoFixHub Admin</h1>
          <p style={{ margin: '8px 0 0', color: '#cbd5e1' }}>Dashboard admin modern via mobile dan desktop.</p>
        </div>
        <button onClick={() => setNavOpen((prev) => !prev)} style={{ border: 'none', background: '#3b82f6', color: '#fff', padding: '10px 16px', borderRadius: 12 }}>
          Menu
        </button>
      </header>

      <nav style={{ display: navOpen ? 'block' : 'none', padding: '16px', background: '#e2e8f0' }}>
        <a href="/admin.html" style={{ display: 'block', marginBottom: 12, color: '#0f172a', fontWeight: 700 }}>Ringkasan</a>
        <a href="/blog.html" style={{ display: 'block', marginBottom: 12, color: '#0f172a' }}>Blog</a>
        <a href="/produk.html" style={{ display: 'block', marginBottom: 12, color: '#0f172a' }}>Produk</a>
        <a href="/affiliate.html" style={{ display: 'block', marginBottom: 12, color: '#0f172a' }}>Affiliate</a>
      </nav>

      <section style={{ padding: '24px' }}>
        <div style={{ display: 'grid', gap: 24 }}>
          <div style={{ padding: 24, background: '#fff', borderRadius: 24, boxShadow: '0 12px 40px rgba(15,23,42,.08)' }}>
            <h2>Status Server</h2>
            <p>Dashboard admin mobile-ready dengan akses cepat ke semua modul.</p>
          </div>

          <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div style={{ padding: 24, background: '#fff', borderRadius: 24 }}>Blog Management</div>
            <div style={{ padding: 24, background: '#fff', borderRadius: 24 }}>Produk & Stok</div>
            <div style={{ padding: 24, background: '#fff', borderRadius: 24 }}>Affiliate Analytics</div>
            <div style={{ padding: 24, background: '#fff', borderRadius: 24 }}>Firmware & Downloads</div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
