"use client";

function Header({
  cartItemCount,
  onNavigateToCart,
  onNavigateToProducts,
  showCartNavigation = false,
  showProductsNavigation = false,
}) {
  return (
    <header className="header">
      <div className="header-content">
        <a href="./LandingPage.jsx" className="header-title-link">
          <h2 className="header-title">Paradise Nursery</h2>
        </a>
        <nav className="header-nav">
          {showProductsNavigation && onNavigateToProducts && (
            <button className="nav-btn" onClick={onNavigateToProducts}>
              Products
            </button>
          )}
          {showCartNavigation && onNavigateToCart && (
            <button className="cart-icon-btn" onClick={onNavigateToCart}>
              <span className="cart-icon">🛒</span>
              <span className="cart-count">{cartItemCount}</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
