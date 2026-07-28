<<<<<<< HEAD
# TeknoFixHub Ultimate Platform

Platform blog teknologi terpadu dengan frontend, backend, admin panel, dan fitur e-commerce.

## 📁 Struktur Project

```
TeknoFixHub_Ultimate/
├── frontend/          # React aplikasi client
├── backend/           # Node.js API server
├── admin/             # Admin dashboard
├── api/               # API endpoints dokumentasi
├── database/          # Database schemas & migrations
├── docker/            # Docker configuration
├── docs/              # Dokumentasi project
├── github/            # GitHub workflows & CI/CD
├── assets/            # Static assets (images, icons)
├── firmware/          # IoT/Hardware firmware
├── products/          # Product database
├── affiliate/         # Affiliate program management
├── media/             # Media files (uploads)
├── storage/           # Cloud storage configuration
├── public/            # Public assets
├── config/            # Configuration files
├── scripts/           # Utility scripts
├── logs/              # Application logs
└── backups/           # Database backups
```

## 🚀 Tech Stack

- **Frontend**: React.js + Vite
- **Backend**: Node.js + Express.js
- **Database**: MongoDB/PostgreSQL
- **Admin**: React Admin
- **Containerization**: Docker
- **API**: REST API

## 📋 Fitur

- ✅ Blog management system
- ✅ User authentication
- ✅ Product catalog
- ✅ Admin dashboard
- ✅ Affiliate program
- ✅ Media management
- ✅ Cloud storage integration
- ✅ IoT firmware support

## 🛠️ Setup

### Prerequisites
- Node.js >= 16
- MongoDB/PostgreSQL
- Docker (optional)

### Installation

1. Clone repository
2. Setup frontend: `cd frontend && npm install`
3. Setup backend: `cd backend && npm install`
4. Configure environment variables
5. Run migrations: `npm run migrate`
6. Start services: `npm run dev`

## 📚 Dokumentasi

Lihat folder `docs/` untuk dokumentasi lengkap.

## 🤝 Kontribusi

Silakan buat pull request atau buka issue untuk saran dan perbaikan.

## 📄 License

MIT
 
## Menjalankan situs affiliate dengan Docker

Saya menambahkan halaman statis untuk affiliate Shopee, TikTok Shop, dan Tokopedia serta konfigurasi Docker.

Jalankan perintah berikut (memerlukan Docker dan Docker Compose):

```bash
# Bangun image dan jalankan container di background
docker compose up --build -d

# Buka http://localhost:8080 di browser

# Untuk menghentikan dan menghapus container
docker compose down
```

Halaman yang dibuat:
- `/site/index.html` — daftar marketplace
- `/site/shopee.html` — contoh tautan Shopee
- `/site/tiktok.html` — contoh tautan TikTok Shop
- `/site/tokopedia.html` — contoh tautan Tokopedia

Jika mau, saya bisa juga menambahkan workflow GitHub Actions untuk build otomatis image.

## GitHub Actions — Build & publish image otomatis

Saya menambahkan workflow GitHub Actions yang akan membangun dan mendorong image ke GitHub Container Registry (GHCR) setiap kali ada push ke `main`.

Catatan dan cara pakai:
- Image akan diberi tag `ghcr.io/OWNER/blog-keren:latest` (OWNER adalah nama pemilik repo).
- Untuk menarik dan menjalankan image yang dibangun otomatis:

```bash
# tarik image dari GHCR (ganti OWNER)
docker pull ghcr.io/OWNER/blog-keren:latest

# jalankan container
docker run -p 8080:80 ghcr.io/OWNER/blog-keren:latest
```

- Jika Anda lebih ingin mendorong ke Docker Hub, saya bisa tambahkan langkah alternatif yang menggunakan `DOCKERHUB_USERNAME` dan `DOCKERHUB_TOKEN` repository secrets.

=======
# Blog-Keren
Electronik Firmware

## Menjalankan situs affiliate dengan Docker

Saya menambahkan halaman statis untuk affiliate Shopee, TikTok Shop, dan Tokopedia serta konfigurasi Docker.

Jalankan perintah berikut (memerlukan Docker dan Docker Compose):

```bash
# Bangun image dan jalankan container di background
docker compose up --build -d

# Buka http://localhost:8080 di browser

# Untuk menghentikan dan menghapus container
docker compose down
```

Halaman yang dibuat:
- `/site/index.html` — daftar marketplace
- `/site/shopee.html` — contoh tautan Shopee
- `/site/tiktok.html` — contoh tautan TikTok Shop
- `/site/tokopedia.html` — contoh tautan Tokopedia

Jika mau, saya bisa juga menambahkan workflow GitHub Actions untuk build otomatis image.

## GitHub Actions — Build & publish image otomatis

Saya menambahkan workflow GitHub Actions yang akan membangun dan mendorong image ke GitHub Container Registry (GHCR) setiap kali ada push ke `main`.

Catatan dan cara pakai:
- Image akan diberi tag `ghcr.io/OWNER/blog-keren:latest` (OWNER adalah nama pemilik repo).
- Untuk menarik dan menjalankan image yang dibangun otomatis:

```bash
# tarik image dari GHCR (ganti OWNER)
docker pull ghcr.io/OWNER/blog-keren:latest

# jalankan container
docker run -p 8080:80 ghcr.io/OWNER/blog-keren:latest
```

- Jika Anda lebih ingin mendorong ke Docker Hub, saya bisa tambahkan langkah alternatif yang menggunakan `DOCKERHUB_USERNAME` dan `DOCKERHUB_TOKEN` repository secrets.

>>>>>>> 74c409f (Add static affiliate pages, Docker setup, and CI workflow)
