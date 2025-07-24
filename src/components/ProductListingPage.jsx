"use client";

import Header from "./Header";

function ProductListingPage({
  plants,
  onAddToCart,
  cartItemCount,
  onNavigateToCart,
}) {
  const categories = Array.from(new Set(plants.map((plant) => plant.category)));

  return (
    <div className="product-listing-page">
      <Header
        cartItemCount={cartItemCount}
        onNavigateToCart={onNavigateToCart}
        showCartNavigation={true}
      />

      <main className="products-main">
        <h1 className="page-title">Our Plant Collection</h1>

        {categories.map((category) => (
          <section key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="plants-grid">
              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <div key={plant.id} className="plant-card">
                    <img
                      src={plant.image || "/placeholder.svg"}
                      alt={plant.name}
                      className="plant-image"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/200x200/4caf50/white?text=${plant.name.replace(
                          " ",
                          "+"
                        )}`;
                      }}
                    />
                    <div className="plant-info">
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-price">${plant.price.toFixed(2)}</p>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart(plant)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductListingPage;
