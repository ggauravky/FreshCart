<p align="center">
  <img src="https://img.icons8.com/3d-fluency/94/shopping-cart.png" alt="FreshCart Logo" width="80" />
</p>

<h1 align="center">🥬 FreshCart</h1>

<p align="center">
  <strong>A Modern Full-Stack Grocery Delivery Platform</strong>
  <br />
  <em>Fresh groceries. Fast delivery. Real-time tracking.</em>
</p>

<p align="center">
  <a href="#-features"><img src="https://img.shields.io/badge/Status-Under%20Development-yellow?style=for-the-badge&logo=git&logoColor=white" alt="Status" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/PostgreSQL-Neon-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" /></a>
  <a href="#-tech-stack"><img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://github.com/ggauravky/FreshCart/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" /></a>
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#%EF%B8%8F-architecture">Architecture</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-contributing">Contributing</a>
</p>

---

## 📸 Preview

> 🚧 **Screenshots coming soon!** — The UI is actively being built. Check back for a visual tour of FreshCart.

<!-- Uncomment and replace with actual screenshots when ready:
<p align="center">
  <img src="./docs/screenshots/home.png" width="45%" alt="Home Page" />
  &nbsp;&nbsp;
  <img src="./docs/screenshots/tracking.png" width="45%" alt="Order Tracking" />
</p>
-->

---

## ✨ Features

<table>
  <tr>
    <td width="50%">

### 🛒 Customer Experience
- 🏠 Beautiful, responsive home page with category browsing
- 🔍 Real-time product search & filtering
- 🛍️ Seamless cart management & checkout flow
- ⚡ Flash deals & promotional offers
- 📍 Multiple delivery address management
- 📦 Live order tracking with map integration
- 🔐 Secure authentication & user profiles

</td>
<td width="50%">

### 🛡️ Admin & Operations
- 📊 Full-featured Admin Dashboard
- 📦 Product catalog management (CRUD)
- 📋 Order lifecycle management
- 🚴 Delivery partner onboarding & management
- 📧 Automated email notifications (offers, low stock)
- ⚡ Background job processing with Inngest
- 🤖 Auto-assignment of delivery partners

</td>
  </tr>
  <tr>
    <td width="50%">

### 🚴 Delivery Partner
- 📱 Dedicated delivery partner dashboard
- 📍 Live location sharing & GPS tracking
- ✅ Order acceptance & status updates
- 🔑 OTP-based delivery verification
- 🚗 Support for bike, scooter & car

</td>
<td width="50%">

### 🔐 Security & Access
- 🧑‍💻 Role-based access control (Admin / User / Delivery)
- 🛡️ Protected routes & authenticated endpoints
- 🔒 Secure payment method handling
- 📝 Complete order history & status trail

</td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<table>
  <tr>
    <th align="center">Layer</th>
    <th align="center">Technology</th>
    <th align="center">Purpose</th>
  </tr>
  <tr>
    <td align="center"><b>Frontend</b></td>
    <td>
      <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" />
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
      <img src="https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
      <img src="https://img.shields.io/badge/Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white" />
    </td>
    <td>UI, styling, bundling & type safety</td>
  </tr>
  <tr>
    <td align="center"><b>Backend</b></td>
    <td>
      <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" />
      <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" />
    </td>
    <td>REST API & server logic</td>
  </tr>
  <tr>
    <td align="center"><b>Database</b></td>
    <td>
      <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" />
      <img src="https://img.shields.io/badge/Neon_Database-00E5A0?style=flat-square&logo=neon&logoColor=black" />
    </td>
    <td>Serverless Postgres with branching</td>
  </tr>
  <tr>
    <td align="center"><b>Background Jobs</b></td>
    <td>
      <img src="https://img.shields.io/badge/Inngest-6366F1?style=flat-square&logo=data:image/svg+xml;base64,&logoColor=white" />
    </td>
    <td>Auto-assign delivery, email alerts, scheduled tasks</td>
  </tr>
  <tr>
    <td align="center"><b>Maps & Tracking</b></td>
    <td>
      <img src="https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet&logoColor=white" />
      <img src="https://img.shields.io/badge/React_Leaflet-61DAFB?style=flat-square&logo=react&logoColor=black" />
    </td>
    <td>Interactive maps & real-time order tracking</td>
  </tr>
  <tr>
    <td align="center"><b>Notifications</b></td>
    <td>
      <img src="https://img.shields.io/badge/React_Hot_Toast-E74C3C?style=flat-square" />
    </td>
    <td>In-app toast notifications</td>
  </tr>
  <tr>
    <td align="center"><b>Routing</b></td>
    <td>
      <img src="https://img.shields.io/badge/React_Router_v7-CA4245?style=flat-square&logo=reactrouter&logoColor=white" />
    </td>
    <td>Client-side routing & navigation</td>
  </tr>
  <tr>
    <td align="center"><b>Linting</b></td>
    <td>
      <img src="https://img.shields.io/badge/OXLint-4B32C3?style=flat-square" />
    </td>
    <td>Lightning-fast Rust-based linting</td>
  </tr>
</table>

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        🌐 CLIENT (React + Vite)                 │
│  ┌──────────┐ ┌──────────┐ ┌────────────┐ ┌─────────────────┐  │
│  │   Home   │ │ Products │ │  Checkout   │ │  Order Tracking │  │
│  └──────────┘ └──────────┘ └────────────┘ └─────────────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌────────────┐ ┌─────────────────┐  │
│  │  Login   │ │  Search  │ │ Flash Deals │ │   My Orders     │  │
│  └──────────┘ └──────────┘ └────────────┘ └─────────────────┘  │
│                    🛡️ Protected Routes                          │
└─────────────────────────┬───────────────────────────────────────┘
                          │ REST API
┌─────────────────────────▼───────────────────────────────────────┐
│                   ⚙️ BACKEND (Node.js + Express)                 │
│  ┌──────────────┐  ┌─────────────┐  ┌────────────────────────┐  │
│  │  Auth & RBAC │  │ Product API │  │   Order Management     │  │
│  └──────────────┘  └─────────────┘  └────────────────────────┘  │
│  ┌──────────────┐  ┌─────────────┐  ┌────────────────────────┐  │
│  │  User Mgmt   │  │ Delivery API│  │   Email Service        │  │
│  └──────────────┘  └─────────────┘  └────────────────────────┘  │
└────────┬─────────────────────────────────────┬──────────────────┘
         │                                     │
┌────────▼────────┐                  ┌─────────▼─────────┐
│  🗄️ PostgreSQL   │                  │  ⚡ Inngest         │
│  (Neon Database) │                  │  Background Jobs   │
│                  │                  │  ┌───────────────┐ │
│  • Users         │                  │  │ Auto-assign   │ │
│  • Products      │                  │  │ delivery      │ │
│  • Orders        │                  │  ├───────────────┤ │
│  • Addresses     │                  │  │ Email alerts  │ │
│  • Delivery      │                  │  │ (low stock)   │ │
│  • Partners      │                  │  ├───────────────┤ │
│                  │                  │  │ Promo emails  │ │
└──────────────────┘                  │  └───────────────┘ │
                                      └───────────────────┘
```

---

## 📁 Project Structure

```
FreshCart/
├── 📂 client/                    # React frontend application
│   ├── 📂 public/                # Static assets
│   ├── 📂 src/
│   │   ├── 📂 assets/            # Images (categories, hero banners)
│   │   ├── 📂 components/        # Reusable UI components
│   │   │   └── ProtectedRoute.tsx
│   │   ├── 📂 context/           # React Context providers
│   │   ├── 📂 pages/             # Route-level page components
│   │   │   ├── Home.tsx          # Landing page
│   │   │   ├── Products.tsx      # Product listing with filters
│   │   │   ├── ProductPage.tsx   # Individual product details
│   │   │   ├── SearchResults.tsx # Search results page
│   │   │   ├── FlashDeals.tsx    # Flash deals & promotions
│   │   │   ├── CheckOut.tsx      # Cart & checkout flow
│   │   │   ├── MyOrders.tsx      # Order history
│   │   │   ├── OrderTracking.tsx # Live order tracking with map
│   │   │   ├── Addresses.tsx     # Address management
│   │   │   ├── Login.tsx         # Authentication page
│   │   │   └── AppLayout.tsx     # Main app shell/layout
│   │   ├── 📂 types/             # TypeScript interfaces & types
│   │   ├── App.tsx               # Root component with routing
│   │   ├── main.tsx              # Application entry point
│   │   └── index.css             # Global styles (Tailwind)
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── 📂 server/                    # Node.js backend (coming soon)
│   ├── 📂 routes/
│   ├── 📂 controllers/
│   ├── 📂 models/
│   ├── 📂 middleware/
│   └── 📂 inngest/              # Background job functions
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

| Tool | Version |
|------|---------|
| **Node.js** | `>= 18.x` |
| **npm** | `>= 9.x` |
| **PostgreSQL** | Via [Neon](https://neon.tech) (cloud) |

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ggauravky/FreshCart.git
cd FreshCart
```

### 2️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

The app will be running at `http://localhost:5173` 🎉

### 3️⃣ Setup Backend *(coming soon)*

```bash
cd server
npm install
# Configure your .env file (see .env.example)
npm run dev
```

### 4️⃣ Environment Variables

Create a `.env` file in the `server/` directory:

```env
# Database
DATABASE_URL=your_neon_database_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
```

---

## 🗺️ Roadmap

- [x] Project setup & boilerplate
- [x] Frontend routing architecture
- [x] TypeScript type definitions
- [x] Protected route system
- [x] Category assets & UI groundwork
- [ ] Complete Home page with hero, categories & featured products
- [ ] Product listing with search & filters
- [ ] Shopping cart & checkout flow
- [ ] User authentication (signup / login / JWT)
- [ ] Admin dashboard panel
- [ ] Backend API (Express + PostgreSQL)
- [ ] Order management system
- [ ] Delivery partner dashboard
- [ ] Real-time order tracking with Leaflet maps
- [ ] Inngest background jobs (auto-assign, email alerts)
- [ ] Automated promotional & low-stock emails
- [ ] Payment integration
- [ ] Deployment to production

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

> 💡 **Tip:** Check the [Roadmap](#️-roadmap) for features that still need work!

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

## 👨‍💻 Author

<p align="center">
  <img src="https://github.com/ggauravky.png" width="120" style="border-radius: 50%;" alt="Gaurav Kumar Yadav" />
</p>

<h3 align="center">Gaurav Kumar Yadav</h3>

<p align="center">
  <em>Full-Stack Developer • Open Source Enthusiast • Building cool stuff on the web</em>
</p>

<p align="center">
  <a href="https://github.com/ggauravky">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://www.linkedin.com/in/gauravky/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://ggauravky.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
  <a href="mailto:kumar.gaurav.yadav2007@gmail.com">
    <img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

---

<p align="center">
  <sub>Built with ❤️ and lots of ☕ by <a href="https://github.com/ggauravky">Gaurav Kumar Yadav</a></sub>
</p>

<p align="center">
  <a href="#-freshcart">⬆ Back to Top</a>
</p>
