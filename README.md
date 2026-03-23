# UrbanDos - Modern E-commerce Template 🚀

A clean, fast, and responsive e-commerce template built with **React**, **TypeScript**, and **Tailwind CSS**. Designed for urban apparel brands, this template features a smooth WhatsApp-based checkout system and professional UI/UX.

---

## ✨ Features

- 📱 **Mobile-First Design** - Fully responsive across all devices.
- 🛍️ **Category-Based Browsing** - Easy navigation between different product collections.
- 🛒 **Side-Drawer Cart** - Seamless shopping experience with a modern cart drawer.
- 💬 **WhatsApp Integration** - Direct-to-owner ordering system with formatted order details.
- ⚡ **Performance Optimized** - Lazy loading of pages and optimized assets for fast load times.
- 🎨 **Modern Tech Stack** - Built with React 18, Vite, and shadcn/ui.

---

## 🛠 Tech Stack

- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS, Lucide React (Icons)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Backend (Optional):** Node.js, Express (for Twilio integration)
- **State Management:** React Hooks (useState/useEffect), TanStack Query

---

## 📸 Screenshots

| Home Page | Category View |
|-----------|---------------|
| ![Home Placeholder](https://i.postimg.cc/0jk62SfH/image.png) | ![Category Placeholder](https://i.postimg.cc/7ZG56w3T/image.png) 

---

## ⚙️ Installation Guide

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/urbandos.git
   cd urbandos
   ```

2. **Install dependencies:**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and copy the contents from `.env.example`.

---

## 🔐 Environment Variables Setup

Create a `.env` file and add the following:

```env
# Frontend WhatsApp Number (without +)
VITE_WHATSAPP_NUMBER=91XXXXXXXXXX

# Backend Twilio Config (Optional)
TWILIO_ACCOUNT_SID=your_sid_here
TWILIO_AUTH_TOKEN=your_token_here
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
OWNER_WHATSAPP_NUMBER=whatsapp:+91XXXXXXXXXX
```

---

## ▶️ Run Locally

### Start Frontend:
```bash
bun dev
# or
npm run dev
```

### Start Backend (Optional):
```bash
node server.js
```

---

## 📂 Folder Structure

```text
src/
├── assets/       # Optimized product images and icons
├── components/   # Reusable UI components (shadcn/ui)
├── hooks/        # Dedicated React hooks
├── lib/          # Utility functions (clsx, tailwind-merge)
├── pages/        # Main route pages (Home, Category, Cart)
└── App.tsx       # Main app entry & routing
```

---

## 🌐 Live Demo

https://ecom-ud.netlify.app/

---

## 💡 Future Improvements
- [ ] Integration with a headless CMS (Sanity/Strapi).
- [ ] User authentication for order history.
- [ ] Search functionality for products.
- [ ] Dark mode support.

---

### 📄 License
This project is licensed under the MIT License.
