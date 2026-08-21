# 🛍️ NexusStore — Modern E-Commerce Platform with Generative AI Concierge

A modern, high-performance, responsive e-commerce web application featuring real-time multi-currency synchronization, rich interactive shopping experiences, and an intelligent **Generative AI Shopping Concierge** powered by Groq & Meta's 120B/27B Large Language Models.

---

## 🌟 Key Features

### 1. 🤖 Intelligent Generative AI Shopping Concierge
* **Powered by Groq Cloud**: Integrates high-speed inference with Large Language Models (`openai/gpt-oss-120b`, `qwen/qwen3.6-27b`).
* **True Conversational Reasoning**: Answers open-ended customer queries, offers styling/gifting advice, compares product specs, explains store policies, and recommends matching products dynamically.
* **Context-Aware Dynamic Cards**: Automatically extracts and attaches clickable product cards with **"Add to Cart"** and real-time converted pricing directly within the chat.
* **100% Offline Fallback**: Features a resilient client-side semantic parser when running offline.

### 2. 💱 Real-Time Dual Currency & Country Synchronization
* Supports **USD ($)**, **PKR (Rs)**, **EUR (€)**, and **GBP (£)** with live exchange rates.
* **Dual-Sync Mechanism**: Selecting **PKR** automatically switches the destination to **Pakistan 🇵🇰**, and vice versa.
* **Universal Conversion**: Every price across the homepage, category filters, product details, cart drawer, checkout page, and AI chat bubbles updates dynamically in real-time.
* **Persistent Preferences**: Stores currency and region selections in `localStorage`.

### 3. 🎨 Modern Glassmorphism UI / UX Design
* **Multi-Page Complete Shopping Flow**:
  * `index.html`: Hero banner, flash deals countdown timer, interactive category showcases, live AI chat launcher.
  * `category.html`: Dynamic catalog grid, multi-attribute filter sidebar (Price Range, Brand, Rating, In-Stock), instant keyword search, and grid/list view toggling.
  * `product.html`: High-resolution gallery with thumbnail switcher, stock tracker, quantity selector, tabbed specifications, customer reviews, and related products carousel.
  * `cart.html`: Itemized cart table, quantity adjustments, discount voucher engine (`SAVE20` for 20% off), real-time tax & shipping computation, and order completion modal.
  * `login.html`: Glassmorphism authentication interface with password visibility toggle and social sign-in.
* **Interactive Components**: Slide-in Cart Drawer, Toast notifications, Quick View Modals, and responsive navigation drawer.

---

## 🚀 Tech Stack

* **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3 Custom Properties (Modern Dark/Light-accent Glassmorphism), Bootstrap Icons.
* **Backend**: FastAPI (Python 3.12), Uvicorn ASGI Server, Pydantic, Python-Dotenv.
* **AI & LLM Provider**: Groq Cloud API (`openai/gpt-oss-120b`, `qwen/qwen3.6-27b`, `llama-3.3-70b-versatile`), Google Gemini Generative Language API.

---

## 📦 Quick Start & Installation

### Method A: Quick Frontend Preview (No Setup Required)
You can directly open `index.html` in any modern web browser:
1. Double-click **`index.html`** or open via Live Server.
2. Enjoy the full UI, shopping cart, multi-currency conversion, and offline AI concierge!

---

### Method B: Full-Stack with Live Generative AI Backend

#### 1. Clone the repository
```bash
git clone https://github.com/Sameer45-Ali/Ecommerce-frontend-design.git
cd Ecommerce-frontend-design
```

#### 2. Install Backend Dependencies
```bash
cd backend
pip install -r requirements.txt
```

#### 3. Configure API Key
Create a `.env` file inside the `backend/` directory:
```env
GROQ_API_KEY=your_groq_api_key_here
# Optional: GEMINI_API_KEY=your_gemini_api_key_here
```
*(Get a free Groq API key in 30 seconds at [console.groq.com/keys](https://console.groq.com/keys)).*

#### 4. Run the FastAPI Backend Server
```bash
python -m uvicorn app:app --reload --port 8000
```
The API will start at `http://127.0.0.1:8000` with interactive Swagger docs at `http://127.0.0.1:8000/docs`.

#### 5. Launch the Frontend
Open `index.html` in your browser. The AI Chat widget will automatically connect to your live Python AI backend.

---

## 📁 Project Structure

```
Ecommerce-frontend-design/
├── backend/
│   ├── app.py              # FastAPI server with Groq & Gemini LLM integrations
│   ├── requirements.txt    # Python dependencies (fastapi, uvicorn, pydantic, python-dotenv)
│   └── .env.example        # Environment variable template
├── images/
│   ├── tech/               # Electronics product photography (1-12)
│   ├── interior/           # Home & kitchen photography (1-14)
│   └── cloth/              # Apparel photography (1-3)
├── index.html              # Homepage with showcase containers & flash deals
├── category.html           # Catalog & filterable product listing
├── product.html            # Individual product details page
├── cart.html               # Shopping cart & checkout flow
├── login.html              # User authentication page
├── script.js               # Global state, multi-currency engine, & AI chat widget
├── category.js             # Catalog rendering & multi-facet filtering logic
├── product.js              # Product details view, gallery & tab interactions
├── cart.js                 # Cart calculations, vouchers, & checkout handling
├── style.css               # Global responsive CSS styling & animations
├── .gitignore              # Git ignore rules (protects API keys)
└── README.md               # Documentation & project guide
```

---

## 🛡️ License
This project is open-source and available under the **MIT License**.