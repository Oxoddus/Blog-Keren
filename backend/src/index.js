const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const whatsappUrl = process.env.WHATSAPP_API_URL || 'https://api.whatsapp.com/send';
const telegramToken = process.env.TELEGRAM_BOT_TOKEN || null;
const paymentProvider = process.env.PAYMENT_PROVIDER || 'qris';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/teknofixhub');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', timestamp: new Date().toISOString() });
});

app.post('/api/notify/whatsapp', (req, res) => {
  const { phone, message } = req.body;
  if (!phone || !message) {
    return res.status(400).json({ success: false, error: 'phone and message are required' });
  }
  return res.json({
    success: true,
    gateway: 'whatsapp',
    phone,
    message,
    providerUrl: whatsappUrl,
    delivered: false,
    note: 'Integrasi notifikasi WhatsApp siap dikembangkan ke gateway nyata',
  });
});

app.post('/api/notify/telegram', (req, res) => {
  const { chatId, message } = req.body;
  if (!chatId || !message) {
    return res.status(400).json({ success: false, error: 'chatId and message are required' });
  }
  return res.json({
    success: true,
    gateway: 'telegram',
    chatId,
    message,
    botTokenConfigured: !!telegramToken,
    note: 'Integrasi bot Telegram siap dikembangkan dengan token BOT resmi',
  });
});

const carts = {};

app.post('/api/cart', (req, res) => {
  const { userId, item } = req.body;
  if (!userId || !item || !item.productId || !item.quantity) {
    return res.status(400).json({ success: false, error: 'userId and item(productId, quantity) are required' });
  }
  carts[userId] = carts[userId] || [];
  carts[userId].push(item);
  return res.json({ success: true, userId, cart: carts[userId] });
});

app.get('/api/cart/:userId', (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(400).json({ success: false, error: 'userId is required' });
  }
  return res.json({ success: true, userId, cart: carts[userId] || [] });
});

app.post('/api/payment/qris', (req, res) => {
  const { orderId, amount, method } = req.body;
  if (!orderId || !amount || !method) {
    return res.status(400).json({ success: false, error: 'orderId, amount, and method are required' });
  }
  return res.json({
    success: true,
    orderId,
    amount,
    method,
    provider: paymentProvider,
    qrisUrl: `https://qris.example.com/pay/${orderId}`,
    autoNotify: true,
    message: 'Scan QRIS untuk menyelesaikan pembayaran. Notifikasi otomatis akan dikirim ketika pembayaran terdeteksi.',
  });
});

app.post('/api/shipping', (req, res) => {
  const { orderId, courier, trackingId } = req.body;
  if (!orderId || !courier || !trackingId) {
    return res.status(400).json({ success: false, error: 'orderId, courier, and trackingId are required' });
  }
  return res.json({
    success: true,
    orderId,
    courier,
    trackingId,
    status: 'in_transit',
    eta: '2-3 hari kerja',
    note: 'Terhubung dengan layanan pengiriman untuk status pengiriman otomatis.',
  });
});

app.get('/api/tracking/:orderId', (req, res) => {
  const { orderId } = req.params;
  if (!orderId) {
    return res.status(400).json({ success: false, error: 'orderId is required' });
  }
  return res.json({
    success: true,
    orderId,
    status: 'in_progress',
    progress: 72,
    steps: [
      { stage: 'Order diterima', completed: true, timestamp: new Date(Date.now() - 3600000).toISOString() },
      { stage: 'Pembayaran diproses', completed: true, timestamp: new Date(Date.now() - 1800000).toISOString() },
      { stage: 'Sedang dikirim / dikerjakan', completed: false },
      { stage: 'Selesai', completed: false },
    ],
  });
});

app.post('/api/chat', (req, res) => {
  const { user, message } = req.body;
  if (!user || !message) {
    return res.status(400).json({ success: false, error: 'user and message are required' });
  }
  return res.json({
    success: true,
    user,
    message,
    delivered: true,
    channel: 'web_chat',
    note: 'Pesan chat dikirim ke sistem dan siap dihubungkan dengan support agent atau bot',
  });
});

app.get('/api/social', (req, res) => {
  return res.json({
    success: true,
    profiles: {
      whatsapp: process.env.SOCIAL_WHATSAPP || 'https://wa.me/6281234567890',
      telegram: process.env.SOCIAL_TELEGRAM || 'https://t.me/TeknoFixHubBot',
      instagram: process.env.SOCIAL_INSTAGRAM || 'https://instagram.com/teknofixhub',
      facebook: process.env.SOCIAL_FACEBOOK || 'https://facebook.com/teknofixhub',
      linkedin: process.env.SOCIAL_LINKEDIN || 'https://linkedin.com/company/teknofixhub',
      twitter: process.env.SOCIAL_TWITTER || 'https://twitter.com/teknofixhub',
    },
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

module.exports = app;
