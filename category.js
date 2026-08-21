/**
 * Category & Product Listing Catalog Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get("category");
  const initialSearch = urlParams.get("search");

  // State
  let currentFilters = {
    category: initialCategory || "",
    search: initialSearch || "",
    brands: [],
    minPrice: 0,
    maxPrice: 1000,
    minRating: 0,
    verifiedOnly: false,
    sortBy: "featured"
  };

  let currentView = "grid"; // 'grid' | 'list'

  // Pre-fill search or category breadcrumbs
  if (initialCategory) {
    const breadcrumbEl = document.getElementById("catalogBreadcrumb");
    if (breadcrumbEl) {
      breadcrumbEl.innerHTML = `<a href="index.html">Home</a> &gt; <a href="category.html">Shop</a> &gt; <span>${initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)}</span>`;
    }
  }

  // Bind Brand Filter Checkboxes
  document.querySelectorAll(".brand-checkbox").forEach(cb => {
    cb.addEventListener("change", () => {
      const selected = Array.from(document.querySelectorAll(".brand-checkbox:checked")).map(el => el.value);
      currentFilters.brands = selected;
      renderFilteredProducts();
    });
  });

  // Bind Category Links/Checkboxes
  document.querySelectorAll(".category-filter-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".category-filter-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");
      currentFilters.category = item.dataset.category || "";
      renderFilteredProducts();
    });
  });

  // Bind Price Range Slider
  const priceSlider = document.getElementById("priceSlider");
  const maxPriceInput = document.getElementById("maxPriceInput");
  const minPriceInput = document.getElementById("minPriceInput");

  if (priceSlider) {
    priceSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      if (maxPriceInput) maxPriceInput.value = val;
      currentFilters.maxPrice = val;
      renderFilteredProducts();
    });
  }

  if (maxPriceInput) {
    maxPriceInput.addEventListener("change", (e) => {
      const val = parseInt(e.target.value) || 1000;
      if (priceSlider) priceSlider.value = val;
      currentFilters.maxPrice = val;
      renderFilteredProducts();
    });
  }

  if (minPriceInput) {
    minPriceInput.addEventListener("change", (e) => {
      const val = parseInt(e.target.value) || 0;
      currentFilters.minPrice = val;
      renderFilteredProducts();
    });
  }

  // Verified Only Checkbox
  const verifiedCb = document.getElementById("verifiedCheckbox");
  if (verifiedCb) {
    verifiedCb.addEventListener("change", (e) => {
      currentFilters.verifiedOnly = e.target.checked;
      renderFilteredProducts();
    });
  }

  // Sort Selector
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentFilters.sortBy = e.target.value;
      renderFilteredProducts();
    });
  }

  // View Switchers (Grid vs List)
  const gridViewBtn = document.getElementById("gridViewBtn");
  const listViewBtn = document.getElementById("listViewBtn");
  const productGridContainer = document.getElementById("catalogProductGrid");

  if (gridViewBtn && listViewBtn && productGridContainer) {
    gridViewBtn.addEventListener("click", () => {
      gridViewBtn.classList.add("active");
      listViewBtn.classList.remove("active");
      currentView = "grid";
      productGridContainer.classList.remove("list-view");
    });

    listViewBtn.addEventListener("click", () => {
      listViewBtn.classList.add("active");
      gridViewBtn.classList.remove("active");
      currentView = "list";
      productGridContainer.classList.add("list-view");
    });
  }

  // Clear Filters Button
  document.getElementById("clearFiltersBtn")?.addEventListener("click", () => {
    currentFilters = {
      category: "",
      search: "",
      brands: [],
      minPrice: 0,
      maxPrice: 1000,
      minRating: 0,
      verifiedOnly: false,
      sortBy: "featured"
    };
    document.querySelectorAll(".brand-checkbox").forEach(cb => cb.checked = false);
    if (priceSlider) priceSlider.value = 1000;
    if (maxPriceInput) maxPriceInput.value = 1000;
    if (minPriceInput) minPriceInput.value = 0;
    if (verifiedCb) verifiedCb.checked = false;
    document.querySelectorAll(".category-filter-item").forEach(el => el.classList.remove("active"));
    renderFilteredProducts();
  });

  // Initial Render
  renderFilteredProducts();

  function renderFilteredProducts() {
    const grid = document.getElementById("catalogProductGrid");
    const countDisplay = document.getElementById("itemCountDisplay");
    if (!grid) return;

    let list = PRODUCTS.filter(p => {
      // Category filter
      if (currentFilters.category && p.category !== currentFilters.category) return false;
      // Search query
      if (currentFilters.search) {
        const q = currentFilters.search.toLowerCase();
        const matches = p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q);
        if (!matches) return false;
      }
      // Brands
      if (currentFilters.brands.length > 0 && !currentFilters.brands.includes(p.brand)) return false;
      // Price range
      if (p.price < currentFilters.minPrice || p.price > currentFilters.maxPrice) return false;
      return true;
    });

    // Sorting
    if (currentFilters.sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (currentFilters.sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (currentFilters.sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (currentFilters.sortBy === "newest") {
      list.reverse();
    }

    if (countDisplay) {
      countDisplay.innerHTML = `Showing <strong>${list.length}</strong> items in <strong>${currentFilters.category ? currentFilters.category.toUpperCase() : "All Categories"}</strong>`;
    }

    if (list.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-filter-circle-xmark" style="font-size: 3.5rem; color: var(--text-light); margin-bottom: 16px; display: block;"></i>
          <h3>No products match your criteria</h3>
          <p style="margin-top: 8px;">Try clearing filters or adjusting your price slider.</p>
          <button class="btn btn-primary btn-sm" id="resetFiltersInner" style="margin-top: 18px;" onclick="document.getElementById('clearFiltersBtn').click()">Reset Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(p => `
      <div class="product-card">
        <div class="product-media">
          ${p.badge ? `<span class="badge badge-${p.badgeType} product-badge-float">${p.badge}</span>` : ""}
          <div class="product-actions-float">
            <button class="action-icon-btn wishlist" title="Add to wishlist" onclick="toggleWishlist('${p.id}', this)">
              <i class="fa-solid fa-heart"></i>
            </button>
            <button class="action-icon-btn" title="Quick view" onclick="openQuickView('${p.id}')">
              <i class="fa-solid fa-eye"></i>
            </button>
          </div>
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="product-body">
          <span class="product-category-tag">${p.category}</span>
          <h4 class="product-title"><a href="product.html?id=${p.id}">${p.title}</a></h4>
          <div class="product-rating-row">
            <span>★★★★★</span>
            <span class="rating-count">(${p.reviewsCount})</span>
          </div>
          <div class="product-footer">
            <div class="product-price-box">
              <span class="price-current">$${p.price.toFixed(2)}</span>
              ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toFixed(2)}</span>` : ""}
            </div>
            <button class="btn-add-cart" onclick="addToCart('${p.id}')">
              <i class="fa-solid fa-cart-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    `).join("");
  }
});