/**
 * Interactive Product Detail Page Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "tech-1";

  const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];

  // Populate Product Information
  const titleEl = document.getElementById("pTitle");
  const priceEl = document.getElementById("pPrice");
  const oldPriceEl = document.getElementById("pOldPrice");
  const descEl = document.getElementById("pDescription");
  const mainImgEl = document.getElementById("pMainImage");
  const breadcrumbCategory = document.getElementById("pBreadcrumbCategory");
  const breadcrumbTitle = document.getElementById("pBreadcrumbTitle");
  const reviewsCountEl = document.getElementById("pReviewsCount");

  if (titleEl) titleEl.textContent = product.title;
  if (priceEl) priceEl.textContent = `$${product.price.toFixed(2)}`;
  if (oldPriceEl) oldPriceEl.textContent = product.oldPrice ? `$${product.oldPrice.toFixed(2)}` : "";
  if (descEl) descEl.textContent = product.description;
  if (mainImgEl) mainImgEl.src = product.image;
  if (reviewsCountEl) reviewsCountEl.textContent = `(${product.reviewsCount} customer reviews)`;

  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = product.category.toUpperCase();
    breadcrumbCategory.href = `category.html?category=${encodeURIComponent(product.category)}`;
  }
  if (breadcrumbTitle) breadcrumbTitle.textContent = product.title;

  // Thumbnail switcher
  const thumbs = document.querySelectorAll(".thumb-item");
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      thumbs.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      const img = thumb.querySelector("img");
      if (img && mainImgEl) {
        mainImgEl.style.opacity = "0.4";
        setTimeout(() => {
          mainImgEl.src = img.src;
          mainImgEl.style.opacity = "1";
        }, 150);
      }
    });
  });

  // Variant Swatches
  document.querySelectorAll(".swatch-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.querySelectorAll(".swatch-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Quantity Stepper
  const qtyInput = document.getElementById("pQtyInput");
  document.getElementById("pQtyDec")?.addEventListener("click", () => {
    if (qtyInput) {
      let v = parseInt(qtyInput.value) || 1;
      qtyInput.value = Math.max(1, v - 1);
    }
  });

  document.getElementById("pQtyInc")?.addEventListener("click", () => {
    if (qtyInput) {
      let v = parseInt(qtyInput.value) || 1;
      qtyInput.value = v + 1;
    }
  });

  // Add to Cart Button
  document.getElementById("pAddToCartBtn")?.addEventListener("click", () => {
    const qty = parseInt(qtyInput?.value) || 1;
    addToCart(product.id, qty);
  });

  // Buy Now Button
  document.getElementById("pBuyNowBtn")?.addEventListener("click", () => {
    const qty = parseInt(qtyInput?.value) || 1;
    addToCart(product.id, qty);
    window.location.href = "cart.html";
  });

  // Product Tabs Switcher
  const tabBtns = document.querySelectorAll(".product-tabs-section .tab-btn");
  const tabPanels = document.querySelectorAll(".product-tabs-section .tab-content-panel");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.target);
      if (target) target.classList.add("active");
    });
  });

  // Review Form Submission
  const reviewForm = document.getElementById("reviewForm");
  reviewForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Thank you! Your review has been submitted for moderation.", "success");
    reviewForm.reset();
  });

  // Render Related Products
  const relatedGrid = document.getElementById("relatedProductsGrid");
  if (relatedGrid) {
    const related = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
    const displayList = related.length > 0 ? related : PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

    relatedGrid.innerHTML = displayList.map(p => `
      <div class="product-card">
        <div class="product-media">
          <div class="product-actions-float">
            <button class="action-icon-btn wishlist" onclick="toggleWishlist('${p.id}', this)"><i class="fa-solid fa-heart"></i></button>
            <button class="action-icon-btn" onclick="openQuickView('${p.id}')"><i class="fa-solid fa-eye"></i></button>
          </div>
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="product-body">
          <h4 class="product-title"><a href="product.html?id=${p.id}">${p.title}</a></h4>
          <div class="product-rating-row">
            <span>★★★★★</span>
            <span class="rating-count">(${p.reviewsCount})</span>
          </div>
          <div class="product-footer">
            <span class="price-current">$${p.price.toFixed(2)}</span>
            <button class="btn-add-cart" onclick="addToCart('${p.id}')"><i class="fa-solid fa-cart-plus"></i> Add</button>
          </div>
        </div>
      </div>
    `).join("");
  }
});