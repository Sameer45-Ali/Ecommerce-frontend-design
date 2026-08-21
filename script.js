/**
 * Global E-Commerce & Conversational AI Assistant Engine
 * Features: Real-time Multi-Currency & Country Sync across all pages, Cart Drawer, Conversational AI Assistant, Live Search, Quick View, Toast, Dark Mode
 */

const PRODUCTS = [
  {
    "id": "tech-8",
    "title": "Amazfit GTS Smart Watch AMOLED",
    "category": "electronics",
    "brand": "Apple",
    "price": 129.99,
    "oldPrice": 169.99,
    "rating": 4.8,
    "reviewsCount": 142,
    "image": "images/tech/8.jpg",
    "badge": "HOT",
    "badgeType": "hot",
    "description": "Sleek fitness smartwatch with 1.75-inch vibrant AMOLED always-on display, heart rate monitor, SpO2 sensor, and 12-day battery life."
  },
  {
    "id": "tech-5",
    "title": "Surround Sound Gaming Headset Pro",
    "category": "electronics",
    "brand": "Sony",
    "price": 49.99,
    "oldPrice": 69.99,
    "rating": 4.7,
    "reviewsCount": 188,
    "image": "images/tech/5.jpg",
    "badge": "POPULAR",
    "badgeType": "primary",
    "description": "Ergonomic gaming headset with noise-canceling bendable mic, 50mm dynamic neodymium audio drivers, and memory foam ear cushions."
  },
  {
    "id": "tech-9",
    "title": "Wireless Over-Ear Studio Headphones",
    "category": "electronics",
    "brand": "Sony",
    "price": 79.50,
    "oldPrice": 99.00,
    "rating": 4.9,
    "reviewsCount": 230,
    "image": "images/tech/9.jpg",
    "badge": "BESTSELLER",
    "badgeType": "primary",
    "description": "Hybrid active noise cancellation, deep acoustic bass, 40-hour ultra battery playtime, and plush lightweight headband."
  },
  {
    "id": "tech-7",
    "title": "Ultra-Slim 15-inch Performance Laptop",
    "category": "electronics",
    "brand": "Dell",
    "price": 499.00,
    "oldPrice": 599.00,
    "rating": 4.7,
    "reviewsCount": 95,
    "image": "images/tech/7.jpg",
    "badge": "NEW",
    "badgeType": "success",
    "description": "Powered by 12th Gen Intel Core i7, 16GB RAM, 512GB NVMe SSD with ultra-thin aluminum chassis and FHD IPS display."
  },
  {
    "id": "tech-1",
    "title": "Apple iPhone 12 Product RED 128GB",
    "category": "electronics",
    "brand": "Apple",
    "price": 449.99,
    "oldPrice": 520.00,
    "rating": 4.9,
    "reviewsCount": 310,
    "image": "images/tech/1.jpg",
    "badge": "-15%",
    "badgeType": "danger",
    "description": "Super Retina XDR OLED display, Ceramic Shield front cover, A14 Bionic chip, and pro dual-camera system with Night mode."
  },
  {
    "id": "tech-4",
    "title": "Apple iPhone 12 Ocean Blue 128GB",
    "category": "electronics",
    "brand": "Apple",
    "price": 449.99,
    "oldPrice": 520.00,
    "rating": 4.8,
    "reviewsCount": 280,
    "image": "images/tech/4.jpg",
    "badge": "POPULAR",
    "badgeType": "primary",
    "description": "Stunning Ocean Blue finish, MagSafe wireless charging compatibility, 5G cellular speed, and 4K Dolby Vision HDR video recording."
  },
  {
    "id": "tech-6",
    "title": "Canon EOS DSLR Professional Camera",
    "category": "electronics",
    "brand": "Canon",
    "price": 389.00,
    "oldPrice": 450.00,
    "rating": 4.9,
    "reviewsCount": 165,
    "image": "images/tech/6.jpg",
    "badge": "PRO",
    "badgeType": "hot",
    "description": "High-resolution 24.1 Megapixel APS-C sensor, DIGIC image processor, built-in Wi-Fi & NFC, and 18-55mm IS II zoom lens kit."
  },
  {
    "id": "tech-11",
    "title": "GoPro Hero 11 Black 4K Action Cam",
    "category": "electronics",
    "brand": "GoPro",
    "price": 249.99,
    "oldPrice": 299.99,
    "rating": 4.8,
    "reviewsCount": 115,
    "image": "images/tech/11.jpg",
    "badge": "DEAL",
    "badgeType": "warning",
    "description": "Rugged waterproof body up to 33ft, HyperSmooth 5.0 stabilization, 5.3K60 video capture, and dual LCD front & rear screens."
  },
  {
    "id": "tech-12",
    "title": "Hi-Fi Studio Desktop Speakers (Pair)",
    "category": "electronics",
    "brand": "Sony",
    "price": 65.00,
    "oldPrice": 85.00,
    "rating": 4.6,
    "reviewsCount": 74,
    "image": "images/tech/12.jpg",
    "badge": "",
    "badgeType": "",
    "description": "Rich stereo acoustics with 4-inch carbon fiber woofers, silk dome tweeters, and wireless Bluetooth + RCA inputs."
  },
  {
    "id": "interior-2",
    "title": "Modern Scandinavian Swivel Lounge Chair",
    "category": "home",
    "brand": "Nordic",
    "price": 89.99,
    "oldPrice": 120.00,
    "rating": 4.9,
    "reviewsCount": 94,
    "image": "images/interior/2.jpg",
    "badge": "FEATURED",
    "badgeType": "primary",
    "description": "High-back ergonomic lumbar support chair in mustard yellow textured fabric with heavy-duty black swivel star base."
  },
  {
    "id": "interior-1",
    "title": "Nordic Cream Accent Armchair",
    "category": "home",
    "brand": "Nordic",
    "price": 119.00,
    "oldPrice": 150.00,
    "rating": 4.8,
    "reviewsCount": 82,
    "image": "images/interior/1.jpg",
    "badge": "LUXURY",
    "badgeType": "hot",
    "description": "Minimalist accent armchair upholstered in warm neutral cream linen with solid angled tapered wooden legs."
  },
  {
    "id": "interior-8",
    "title": "Bosch Tassimo Espresso & Latte Machine",
    "category": "home",
    "brand": "Bosch",
    "price": 89.00,
    "oldPrice": 120.00,
    "rating": 4.7,
    "reviewsCount": 195,
    "image": "images/interior/8.jpg",
    "badge": "-25%",
    "badgeType": "danger",
    "description": "Intellibrew barcode technology, one-touch drink preparation for latte macchiato, cappuccino, and espresso."
  },
  {
    "id": "interior-9",
    "title": "Electric Cold Press Fruit Juicer",
    "category": "home",
    "brand": "KitchenPro",
    "price": 79.99,
    "oldPrice": 105.00,
    "rating": 4.6,
    "reviewsCount": 68,
    "image": "images/interior/9.jpg",
    "badge": "HEALTH",
    "badgeType": "success",
    "description": "Masticating slow cold press juice extractor with high juice yield, whisper-quiet motor, and easy-clean stainless body."
  },
  {
    "id": "interior-11",
    "title": "Stainless Steel Gooseneck Kitchen Faucet",
    "category": "home",
    "brand": "KitchenPro",
    "price": 45.00,
    "oldPrice": 60.00,
    "rating": 4.5,
    "reviewsCount": 51,
    "image": "images/interior/11.jpg",
    "badge": "",
    "badgeType": "",
    "description": "Commercial brushed nickel single-handle high-arc kitchen tap with 360-degree swivel spout."
  },
  {
    "id": "interior-13",
    "title": "Luxury Ceramic Coffee Mug & Saucer Set",
    "category": "home",
    "brand": "Nordic",
    "price": 18.99,
    "oldPrice": 26.00,
    "rating": 4.8,
    "reviewsCount": 112,
    "image": "images/interior/13.jpg",
    "badge": "GIFT",
    "badgeType": "warning",
    "description": "Nordic ceramic espresso cup set with gold-plated mixing spoon and rectangular serving dessert tray."
  },
  {
    "id": "interior-14",
    "title": "Boho Farmhouse Decorative Throw Pillows",
    "category": "home",
    "brand": "Nordic",
    "price": 24.99,
    "oldPrice": 35.00,
    "rating": 4.6,
    "reviewsCount": 43,
    "image": "images/interior/14.jpg",
    "badge": "",
    "badgeType": "",
    "description": "Soft textured woven cotton cushion covers with corner tassels and elegant botanical prints."
  },
  {
    "id": "cloth-1",
    "title": "Teal Blue Piqué Polo Shirt",
    "category": "clothing",
    "brand": "UrbanStyle",
    "price": 24.99,
    "oldPrice": 35.00,
    "rating": 4.7,
    "reviewsCount": 130,
    "image": "images/cloth/1.jpg",
    "badge": "SALE",
    "badgeType": "warning",
    "description": "Breathable piqué cotton knit with ribbed collar and button placket for enduring everyday style."
  },
  {
    "id": "cloth-2",
    "title": "Bright Cyan Sport Polo Shirt",
    "category": "clothing",
    "brand": "UrbanStyle",
    "price": 22.99,
    "oldPrice": 32.00,
    "rating": 4.6,
    "reviewsCount": 92,
    "image": "images/cloth/2.jpg",
    "badge": "TRENDING",
    "badgeType": "hot",
    "description": "Lightweight moisture-wicking quick-dry athletic polo shirt designed for active comfort."
  },
  {
    "id": "cloth-3",
    "title": "Winter Explorer Fur Hood Parka Jacket",
    "category": "clothing",
    "brand": "UrbanStyle",
    "price": 89.99,
    "oldPrice": 120.00,
    "rating": 4.9,
    "reviewsCount": 88,
    "image": "images/cloth/3.jpg",
    "badge": "WARMTH",
    "badgeType": "hot",
    "description": "Heavy-duty windproof canvas shell with faux fur trimmed hood, fleece lining, and thermal utility cargo pockets."
  }
];

// Currency Rates
const CURRENCY_CONFIG = {
  USD: { symbol: "$", prefix: "$", suffix: "", rate: 1.0, country: "USA", flag: "🇺🇸" },
  PKR: { symbol: "Rs ", prefix: "Rs ", suffix: "", rate: 280.0, country: "Pakistan", flag: "🇵🇰" },
  EUR: { symbol: "€", prefix: "€", suffix: "", rate: 0.92, country: "Germany (EU)", flag: "🇪🇺" },
  GBP: { symbol: "£", prefix: "£", suffix: "", rate: 0.79, country: "United Kingdom", flag: "🇬🇧" }
};

const COUNTRY_TO_CURRENCY = {
  "USA": "USD",
  "Pakistan": "PKR",
  "Germany (EU)": "EUR",
  "United Kingdom": "GBP"
};

function getActiveCurrency() {
  return localStorage.getItem("ecom_currency") || "USD";
}

function getActiveCountry() {
  return localStorage.getItem("ecom_country") || "USA";
}

function formatPrice(usdPrice) {
  const curr = getActiveCurrency();
  const conf = CURRENCY_CONFIG[curr] || CURRENCY_CONFIG.USD;
  const converted = (parseFloat(usdPrice) || 0) * conf.rate;
  
  if (curr === "PKR") {
    return `${conf.prefix}${Math.round(converted).toLocaleString()}${conf.suffix}`;
  }
  return `${conf.prefix}${converted.toFixed(2)}${conf.suffix}`;
}

function setCurrency(newCurrency) {
  if (!CURRENCY_CONFIG[newCurrency]) return;
  localStorage.setItem("ecom_currency", newCurrency);
  const correspondingCountry = CURRENCY_CONFIG[newCurrency].country;
  localStorage.setItem("ecom_country", correspondingCountry);
  
  updateCurrencyCountrySelectors();
  updateAllRenderedPrices();
  showToast(`Currency set to ${newCurrency} (${correspondingCountry})`, "success");
}

function setCountry(newCountry) {
  const correspondingCurrency = COUNTRY_TO_CURRENCY[newCountry] || "USD";
  localStorage.setItem("ecom_country", newCountry);
  localStorage.setItem("ecom_currency", correspondingCurrency);
  
  updateCurrencyCountrySelectors();
  updateAllRenderedPrices();
  showToast(`Shipping country set to ${newCountry} (${correspondingCurrency})`, "success");
}

function updateCurrencyCountrySelectors() {
  const curr = getActiveCurrency();
  const country = getActiveCountry();
  
  document.querySelectorAll(".currency-select, #currencySelect").forEach(sel => {
    sel.value = curr;
  });
  
  document.querySelectorAll(".country-select, #countrySelect").forEach(sel => {
    sel.value = country;
  });
}

function renderHomepageDynamicSections() {
  // Render Flash Deals
  const dealsContainer = document.getElementById("flashDealsContainer");
  if (dealsContainer) {
    const dealItems = ["tech-5", "tech-8", "tech-9", "interior-8"];
    const dealProducts = PRODUCTS.filter(p => dealItems.includes(p.id));
    dealsContainer.innerHTML = dealProducts.map(p => `
      <div class="mini-product-card" onclick="openQuickView('${p.id}')">
        <img src="${p.image}" alt="${p.title}">
        <div>
          <h5>${p.title}</h5>
          <p><strong style="color: var(--primary);">${formatPrice(p.price)}</strong> <span style="text-decoration: line-through; color: var(--text-light); font-size: 0.8rem;">${formatPrice(p.oldPrice)}</span></p>
        </div>
        <button class="btn btn-primary btn-sm btn-block" style="margin-top: 8px;" onclick="event.stopPropagation(); addToCart('${p.id}');">Add to Cart</button>
      </div>
    `).join("");
  }

  // Render Electronics Showcase
  const techShowcase = document.getElementById("techShowcaseContainer");
  if (techShowcase) {
    const techItems = ["tech-7", "tech-1", "tech-6", "tech-11"];
    const techProducts = PRODUCTS.filter(p => techItems.includes(p.id));
    techShowcase.innerHTML = techProducts.map(p => `
      <div class="mini-product-card" onclick="openQuickView('${p.id}')">
        <img src="${p.image}" alt="${p.title}">
        <h5>${p.title}</h5>
        <p>From <strong>${formatPrice(p.price)}</strong></p>
      </div>
    `).join("");
  }

  // Render Interior Showcase
  const interiorShowcase = document.getElementById("interiorShowcaseContainer");
  if (interiorShowcase) {
    const interiorItems = ["interior-2", "interior-1", "interior-9", "interior-13"];
    const interiorProducts = PRODUCTS.filter(p => interiorItems.includes(p.id));
    interiorShowcase.innerHTML = interiorProducts.map(p => `
      <div class="mini-product-card" onclick="openQuickView('${p.id}')">
        <img src="${p.image}" alt="${p.title}">
        <h5>${p.title}</h5>
        <p>From <strong>${formatPrice(p.price)}</strong></p>
      </div>
    `).join("");
  }
}

function updateAllRenderedPrices() {
  renderCartDrawer();
  renderHomepageDynamicSections();
  
  if (typeof renderProductDetailPage === "function") {
    renderProductDetailPage();
  }
  
  if (typeof renderFilteredProducts === "function") {
    renderFilteredProducts();
  }
  
  if (typeof renderCartPage === "function") {
    renderCartPage();
  }
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("ecom_cart_v2")) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("ecom_cart_v2", JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      qty: qty
    });
  }

  saveCart(cart);
  showToast(`Added "${product.title}" to cart!`, "success");
  openCartDrawer();
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  showToast("Item removed from cart", "default");
}

function updateItemQty(productId, delta) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.qty += delta;
    if (item.qty <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
    saveCart(cart);
  }
}

function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll("#cart-count, .cart-badge-count").forEach(el => {
    el.textContent = totalCount;
  });
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function renderCartDrawer() {
  const body = document.getElementById("cartDrawerBody");
  const subtotalEl = document.getElementById("cartDrawerSubtotal");
  if (!body) return;

  const cart = getCart();
  if (cart.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <i class="fa-solid fa-bag-shopping" style="font-size: 3rem; color: var(--border-focus); margin-bottom: 12px; display: block;"></i>
        <h4>Your cart is empty</h4>
        <p style="font-size: 0.85rem; margin-top: 6px;">Discover our trending collection and add items to your bag.</p>
        <a href="category.html" class="btn btn-primary btn-sm" style="margin-top: 18px;" onclick="closeCartDrawer()">Start Shopping</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.title}">
      <div class="cart-item-info">
        <h5>${item.title}</h5>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 6px;">
          <div class="qty-stepper">
            <button onclick="updateItemQty('${item.id}', -1)">-</button>
            <input type="text" value="${item.qty}" readonly>
            <button onclick="updateItemQty('${item.id}', 1)">+</button>
          </div>
          <button onclick="removeFromCart('${item.id}')" style="color: var(--danger); font-size: 0.85rem; padding: 4px;">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  if (subtotalEl) {
    subtotalEl.textContent = formatPrice(getCartTotal());
  }
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartDrawerBackdrop");
  if (drawer && backdrop) {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartDrawerBackdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
  }
}

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem("ecom_wishlist_v2")) || [];
  } catch (e) {
    return [];
  }
}

function toggleWishlist(productId, btnEl) {
  let wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast("Removed from wishlist", "default");
    if (btnEl) btnEl.classList.remove("active");
  } else {
    wishlist.push(productId);
    showToast("Added to your wishlist ❤️", "success");
    if (btnEl) btnEl.classList.add("active");
  }
  localStorage.setItem("ecom_wishlist_v2", JSON.stringify(wishlist));
  updateWishlistCount();
}

function updateWishlistCount() {
  const count = getWishlist().length;
  document.querySelectorAll("#wishlist-count, .wishlist-badge-count").forEach(el => {
    el.textContent = count;
  });
}

function openQuickView(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const modal = document.getElementById("quickViewModal");
  const content = document.getElementById("quickViewContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-body-grid">
      <div class="modal-gallery">
        <img src="${p.image}" alt="${p.title}">
      </div>
      <div>
        <span class="badge badge-primary">${p.category.toUpperCase()}</span>
        <h2 style="font-size: 1.35rem; margin: 10px 0 6px;">${p.title}</h2>
        <div class="product-rating-row">
          <span>★★★★★</span>
          <span class="rating-count">(${p.reviewsCount} verified reviews)</span>
        </div>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary); margin-bottom: 14px;">
          ${formatPrice(p.price)}
          <span style="font-size: 1rem; color: var(--text-light); text-decoration: line-through; margin-left: 8px;">${formatPrice(p.oldPrice)}</span>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px; line-height: 1.5;">
          ${p.description}
        </p>
        <div style="display: flex; gap: 12px; align-items: center;">
          <button class="btn btn-primary" onclick="addToCart('${p.id}'); closeQuickView();" style="flex: 1;">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart
          </button>
          <a href="product.html?id=${p.id}" class="btn btn-secondary">Full Details</a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  if (modal) modal.classList.remove("active");
}

function setupLiveSearch() {
  const searchInput = document.getElementById("searchInput");
  const suggestionsBox = document.getElementById("searchSuggestions");
  const categorySelect = document.getElementById("categorySelect");

  if (!searchInput || !suggestionsBox) return;

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    const cat = categorySelect ? categorySelect.value : "";

    if (q.length < 2) {
      suggestionsBox.classList.remove("active");
      suggestionsBox.innerHTML = "";
      return;
    }

    const filtered = PRODUCTS.filter(p => {
      const matchesText = p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
      const matchesCat = !cat || p.category === cat;
      return matchesText && matchesCat;
    });

    if (filtered.length === 0) {
      suggestionsBox.innerHTML = `
        <div style="padding: 16px; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
          No matching products found for "<strong>${q}</strong>"
        </div>
      `;
    } else {
      suggestionsBox.innerHTML = filtered.slice(0, 5).map(p => `
        <div class="suggestion-item" onclick="window.location.href='product.html?id=${p.id}'">
          <img src="${p.image}" alt="${p.title}">
          <div class="suggestion-info">
            <h5>${p.title}</h5>
            <p>${formatPrice(p.price)}</p>
          </div>
        </div>
      `).join("") + `
        <div style="padding: 8px 16px; background: var(--bg-alt); text-align: center; font-size: 0.8rem; font-weight: 700; cursor: pointer; color: var(--primary);" onclick="window.location.href='category.html?search=${encodeURIComponent(q)}'">
          View all results &rarr;
        </div>
      `;
    }

    suggestionsBox.classList.add("active");
  });

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.classList.remove("active");
    }
  });

  const searchBtn = document.getElementById("searchBtn");
  searchBtn?.addEventListener("click", () => {
    const q = searchInput.value.trim();
    const cat = categorySelect ? categorySelect.value : "";
    let url = "category.html?";
    if (q) url += `search=${encodeURIComponent(q)}&`;
    if (cat) url += `category=${encodeURIComponent(cat)}`;
    window.location.href = url;
  });
}

const AI_BACKEND_URL = "http://localhost:8000/api/chat";

function toggleAIChat() {
  const windowEl = document.getElementById("aiChatWindow");
  if (windowEl) {
    windowEl.classList.toggle("active");
    if (windowEl.classList.contains("active")) {
      document.getElementById("aiChatInput")?.focus();
    }
  }
}

async function sendAIMessage(customText = null) {
  const input = document.getElementById("aiChatInput");
  const text = customText || (input ? input.value.trim() : "");
  if (!text) return;

  if (input && !customText) input.value = "";

  appendAIMessage("user", text);
  const typingId = appendAITypingIndicator();

  try {
    const response = await fetch(AI_BACKEND_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
      signal: AbortSignal.timeout(2500)
    });

    if (response.ok) {
      const data = await response.json();
      removeAITypingIndicator(typingId);
      appendAIMessage("bot", data.reply, data.products || []);
      return;
    }
  } catch (err) {
    // offline fallback
  }

  setTimeout(() => {
    removeAITypingIndicator(typingId);
    processClientAIQuery(text);
  }, 450);
}

function hasWord(pattern, text) {
  const reg = new RegExp('\b' + pattern + '\b', 'i');
  return reg.test(text);
}

function hasAny(patterns, text) {
  return patterns.some(p => hasWord(p, text) || text.includes(p));
}

function processClientAIQuery(query) {
  const q = query.toLowerCase().trim();
  let reply = "";
  let matchedProducts = [];

  // Why should I order / Why buy from here
  if (hasAny(["why should i order", "why buy from here", "why choose", "why nexus", "benefits", "why order"], q)) {
    reply = "Here's why shoppers love NexusStore: 🌟 100% genuine verified products with official warranties, 🚚 Free 2-Day Express Shipping over $50, 🔒 256-bit SSL encrypted bank-grade security, and a 🛡️ 30-Day Money-Back Guarantee with free doorstep returns!";
  }
  // Surprise me
  else if (hasAny(["surprise me", "surprise", "random pick", "something cool", "pick for me", "suggest something"], q)) {
    matchedProducts = [PRODUCTS[0], PRODUCTS[9]];
    reply = "Here's a special handpicked combo to surprise you! ✨ Our sleek Amazfit GTS Smart Watch and modern Scandinavian Swivel Lounge Chair:";
  }
  // Bestsellers & Top Rated
  else if (hasAny(["best sell", "bestseller", "top sell", "most popular", "trending", "favorite item", "favorite product", "most bought"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.id === "tech-1" || p.id === "tech-9");
    reply = "Our #1 bestsellers right now are the Apple iPhone 12 (RED) with 310+ reviews and our Wireless Studio ANC Headphones (4.9★ rating)! Here they are:";
  }
  // Safety & Trust
  else if (hasAny(["safe", "is this store safe", "legit", "trust", "scam", "secure", "security", "reliable"], q)) {
    reply = "Yes, NexusStore is 100% safe and secure! 🛡️ All transactions use bank-grade 256-bit SSL encryption. We support Stripe, PayPal, Visa, and Mastercard with full buyer protection and a 30-Day Money-Back Guarantee.";
  }
  // Quality
  else if (hasAny(["quality", "authentic", "genuine", "original", "durable", "durability", "material", "standard"], q)) {
    reply = "Every product is 100% genuine and verified! Our tech items carry official manufacturer warranties, and our home furniture is crafted with solid hardwoods and durable linen upholstery.";
  }
  // Returns & Warranty
  else if (hasAny(["return", "refund", "exchange", "warranty", "money back", "cancel order"], q)) {
    reply = "We offer a 30-Day Hassle-Free Money-Back Guarantee! 📦 If you are not completely satisfied, you can initiate a return or exchange within 30 days with free doorstep pickup.";
  }
  // Shipping & Pakistan / USA
  else if (hasAny(["ship", "shipping", "delivery", "deliver", "pakistan", "usa", "tracking"], q)) {
    if (q.includes("pakistan")) {
      reply = "Yes! We ship directly to Pakistan in 3-5 business days via DHL Express. You can also select PKR (Rs) from the top currency bar for automatic local pricing.";
    } else {
      reply = "We offer Free 2-Day Express Shipping on orders over $50! Domestic orders take 2-3 business days, and international orders take 4-6 business days with real-time parcel tracking.";
    }
  }
  // Deals & Coupons
  else if (hasAny(["coupon", "discount", "promo", "voucher", "code", "cheap", "deal", "save", "offer"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.price < 80).slice(0, 2);
    reply = "You can use voucher code **SAVE20** at checkout for an extra 20% off your entire order! Here are some of our best budget deals today:";
  }
  // Gifts
  else if (hasAny(["gift", "present", "birthday", "for friend", "for him", "for her"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.id === "tech-8" || p.id === "interior-13");
    reply = "For wonderful gift ideas, people love the Amazfit GTS Smart Watch and our Luxury Ceramic Coffee Mug & Saucer Set:";
  }
  // Audio & Gaming
  else if (hasAny(["headphone", "headset", "earphone", "audio", "sound", "mic", "gaming"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.id === "tech-5" || p.id === "tech-9");
    reply = "For gaming and studio sound, check out our Surround Sound Gaming Headset Pro with noise-canceling mic and our Wireless Studio ANC Headphones:";
  }
  // Smart Watch
  else if (hasAny(["watch", "smartwatch", "fitness", "tracker"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.id === "tech-8");
    reply = "Here is our Amazfit GTS Smart Watch featuring a vivid 1.75-inch AMOLED display, SpO2 fitness sensors, and 12-day battery life:";
  }
  // Laptops
  else if (hasAny(["laptop", "computer", "pc", "programming"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.id === "tech-7");
    reply = "I recommend our Ultra-Slim 15-inch Performance Laptop with 12th Gen Intel i7, 16GB RAM, and 512GB SSD for work and productivity:";
  }
  // Phones & iPhone
  else if (hasAny(["phone", "iphone", "smartphone", "mobile"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.id === "tech-1" || p.id === "tech-4");
    reply = "Here are our Apple iPhone 12 flagship models in Product RED and Ocean Blue with Super Retina XDR OLED displays:";
  }
  // Cameras
  else if (hasAny(["camera", "dslr", "canon", "gopro", "action cam"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.id === "tech-6" || p.id === "tech-11");
    reply = "For photography and 4K action vlogging, check out our Canon EOS DSLR Camera and GoPro Hero 11 Black 4K:";
  }
  // Furniture & Home
  else if (hasAny(["chair", "sofa", "furniture", "interior", "decor", "home", "pillow"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.category === "home").slice(0, 2);
    reply = "Here are our Scandinavian lounge armchairs and aesthetic home decor pieces for maximum comfort and style:";
  }
  // Clothing & Apparel
  else if (hasAny(["shirt", "polo", "jacket", "clothes", "clothing", "fashion", "apparel", "parka"], q)) {
    matchedProducts = PRODUCTS.filter(p => p.category === "clothing");
    reply = "Check out our premium apparel line including breathable cotton polo shirts and the Winter Fur Hooded Parka Jacket:";
  }
  // Greetings (strict token check)
  else if (/^(hi|hello|hey|hola|salam|greetings|good morning|good evening|good afternoon)/i.test(q) || q === "hi" || q === "hello") {
    reply = "Hello there! 👋 Welcome to NexusStore. What are you looking to explore today?";
  }
  else if (hasAny(["how are you", "how r u", "how do you do"], q)) {
    reply = "I'm doing fantastic, thank you for asking! 😊 Ready to help you find anything you need. What can I assist you with?";
  }
  else if (hasAny(["who are you", "what is your name", "what can you do"], q)) {
    reply = "I'm Nexus AI, your personal 24/7 store concierge! I can help you find products, compare specs, check discounts, explain shipping, or surprise you with top picks.";
  }
  else if (hasAny(["joke", "funny"], q)) {
    reply = "Why don't scientists trust atoms? Because they make up everything! 😄 What can I help you find in our store today?";
  }
  else {
    reply = "I'm here to help with all your shopping needs! You can ask me why you should order from us, request bestsellers, get discount vouchers, or ask about product specs and shipping.";
  }

  appendAIMessage("bot", reply, matchedProducts);
}

function appendAIMessage(sender, text, products = []) {
  const container = document.getElementById("aiChatMessages");
  if (!container) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = `ai-msg ${sender}`;

  let productsHtml = "";
  if (products && products.length > 0) {
    productsHtml = products.map(p => `
      <div class="ai-product-suggestion">
        <img src="${p.image}" alt="${p.title}">
        <div class="ai-product-suggestion-info">
          <h6>${p.title}</h6>
          <span>${formatPrice(p.price)}</span>
        </div>
        <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}')">
          <i class="fa-solid fa-cart-plus"></i> Add
        </button>
      </div>
    `).join("");
  }

  msgDiv.innerHTML = `
    <div class="ai-msg-bubble">
      ${text}
      ${productsHtml}
    </div>
  `;

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function appendAITypingIndicator() {
  const container = document.getElementById("aiChatMessages");
  if (!container) return null;

  const id = "typing-" + Date.now();
  const typingDiv = document.createElement("div");
  typingDiv.id = id;
  typingDiv.className = "ai-msg bot";
  typingDiv.innerHTML = `
    <div class="ai-msg-bubble" style="display: flex; gap: 4px; align-items: center; padding: 12px 16px;">
      <span style="width: 6px; height: 6px; background: var(--text-light); border-radius: 50%; animation: pulseBadge 1s infinite;"></span>
      <span style="width: 6px; height: 6px; background: var(--text-light); border-radius: 50%; animation: pulseBadge 1s infinite 0.2s;"></span>
      <span style="width: 6px; height: 6px; background: var(--text-light); border-radius: 50%; animation: pulseBadge 1s infinite 0.4s;"></span>
    </div>
  `;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;
  return id;
}

function removeAITypingIndicator(id) {
  if (id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }
}

function showToast(message, type = "success", duration = 3000) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = '<i class="fa-solid fa-circle-check" style="color: var(--success);"></i>';
  if (type === "error") icon = '<i class="fa-solid fa-circle-xmark" style="color: var(--danger);"></i>';
  if (type === "warning") icon = '<i class="fa-solid fa-triangle-exclamation" style="color: var(--accent);"></i>';
  if (type === "default") icon = '<i class="fa-solid fa-bell" style="color: var(--primary);"></i>';

  toast.innerHTML = `
    ${icon}
    <div style="flex: 1; font-size: 0.875rem; font-weight: 600;">${message}</div>
    <button style="color: var(--text-light); cursor: pointer; padding: 4px;">&times;</button>
  `;

  container.appendChild(toast);

  const remove = () => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 250);
  };

  toast.querySelector("button").onclick = remove;
  setTimeout(remove, duration);
}

function initTheme() {
  const saved = localStorage.getItem("ecom_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", current);
  localStorage.setItem("ecom_theme", current);
  updateThemeIcon(current);
}

function updateThemeIcon(theme) {
  document.querySelectorAll(".theme-toggle-btn i").forEach(icon => {
    if (theme === "dark") {
      icon.className = "fa-solid fa-sun";
    } else {
      icon.className = "fa-solid fa-moon";
    }
  });
}

function startCountdown() {
  const end = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000 + 45 * 60 * 1000);
  function tick() {
    const now = new Date();
    let diff = Math.max(0, Math.floor((end - now) / 1000));
    const d = Math.floor(diff / (3600 * 24)); diff -= d * 3600 * 24;
    const h = Math.floor(diff / 3600); diff -= h * 3600;
    const m = Math.floor(diff / 60); diff -= m * 60;
    const s = diff;

    const dEl = document.getElementById("days");
    const hEl = document.getElementById("hours");
    const mEl = document.getElementById("mins");
    const sEl = document.getElementById("secs");

    if (dEl) dEl.textContent = String(d).padStart(2, "0");
    if (hEl) hEl.textContent = String(h).padStart(2, "0");
    if (mEl) mEl.textContent = String(m).padStart(2, "0");
    if (sEl) sEl.textContent = String(s).padStart(2, "0");
  }
  tick();
  setInterval(tick, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateCartBadge();
  updateWishlistCount();
  setupLiveSearch();
  startCountdown();
  updateCurrencyCountrySelectors();
  updateAllRenderedPrices();

  document.querySelectorAll(".currency-select, #currencySelect").forEach(sel => {
    sel.addEventListener("change", (e) => {
      setCurrency(e.target.value);
    });
  });

  document.querySelectorAll(".country-select, #countrySelect").forEach(sel => {
    sel.addEventListener("change", (e) => {
      setCountry(e.target.value);
    });
  });

  document.querySelectorAll(".cart-drawer-trigger, #openCartBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".site-header");
    if (header) {
      if (window.scrollY > 40) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }
  });

  const quoteForm = document.querySelector(".quote-form, .inquiry-form-card form");
  quoteForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Inquiry submitted! Suppliers will contact you within 24 hours.", "success");
    quoteForm.reset();
  });

  document.querySelectorAll(".newsletter-form, .subscribe-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Thank you for subscribing to our newsletter! ✨", "success");
      form.reset();
    });
  });

  document.getElementById("aiChatInput")?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendAIMessage();
    }
  });
});