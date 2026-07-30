![Status](https://img.shields.io/badge/status-active-brightgreen) ![Docker](https://img.shields.io/badge/docker-ready-blue) ![Node.js](https://img.shields.io/badge/node.js-18.x-green) ![React](https://img.shields.io/badge/react-18.x-blue)

# TeknoFixHub Ultimate

Platform digital profesional dengan fitur lengkap e-commerce, affiliate, notifikasi, chat online, tracking, pembayaran, dan branding.

## 🚀 Fitur Utama

- ✅ Social media lengkap: WhatsApp, Telegram, Instagram, Facebook, LinkedIn, Twitter
- ✅ Notifikasi otomatis ke WhatsApp dan bot Telegram
- ✅ Live chat support dan omnichannel customer experience
- ✅ Pembayaran digital, COD, QRIS, e-wallet, kartu kredit, dan transfer bank
- ✅ Tracking order & service dengan status real-time
- ✅ Admin dashboard dan monitoring kinerja
- ✅ Branding profesional dengan logo, banner, dan halaman presentasi
- ✅ Docker + Docker Compose + GitHub Actions untuk deployment

## 📱 Akses Platform

- Frontend: `http://<HOST_IP>/`
- Admin Dashboard: `http://<HOST_IP>/admin/`
- Social Media / Contact: `http://<HOST_IP>/social.html`
- API Health: `http://<HOST_IP>/api/health`

## 💬 Social Media

- WhatsApp Business: `https://wa.me/6281234567890`
- Telegram Bot: `https://t.me/TeknoFixHubBot`
- Instagram: `https://instagram.com/teknofixhub`
- Facebook: `https://facebook.com/teknofixhub`
- LinkedIn: `https://linkedin.com/company/teknofixhub`
- Twitter: `https://twitter.com/teknofixhub`

## 🔔 Notifikasi Otomatis

Backend sekarang mendukung endpoint notifikasi:

- `POST /api/notify/whatsapp`
- `POST /api/notify/telegram`

Ini bisa dikembangkan untuk mengirim pesan order, tracking, COD, dan alert support.

## � Keranjang & Mobile Checkout

Platform juga mendukung keranjang belanja responsif dan checkout mobile-friendly.

- `POST /api/cart` untuk menambahkan item ke keranjang
- `GET /api/cart/:userId` untuk melihat keranjang pengguna
- `POST /api/payment/qris` untuk pembayaran QRIS
- Scan QRIS akan memicu notifikasi otomatis ke konsumen saat pembayaran diproses
- Akses dan kontrol semua fitur via HP dengan mobile-first design

## 🚚 Shipping & Tracking

Tracking order dan service diintegrasikan ke shipping provider.

- `POST /api/shipping` untuk mendaftarkan pengiriman
- `GET /api/tracking/:orderId` untuk status order dan delivery

## �💳 Pembayaran & COD

Platform mencakup halaman pembayaran dan toko online dengan fitur:

- COD (Cash on Delivery)
- E-wallet: OVO, DANA, GoPay, ShopeePay
- QRIS dan virtual account
- Kartu kredit / debit

## 📦 Tracking & Service

Tracking order dan service diintegrasikan dengan notifikasi otomatis, sehingga pelanggan dapat memeriksa status pesanan dan teknisi.

## 🧩 Branding & Tampilan Profesional

- Logo baru dan banner brand
- Halaman fitur profesional
- Struktur halaman yang rapi
- Social media hub untuk promosi

## 🛠️ Setup

1. Clone repository
2. Jalankan `docker compose up -d --build`
3. Buka `http://localhost/` atau `http://<HOST_IP>/`
4. Akses admin di `http://<HOST_IP>/admin/`

## 📦 GitHub Actions

Workflow build dan deploy otomatis tersedia untuk Docker image dan file statis.

## 📄 License

MIT
