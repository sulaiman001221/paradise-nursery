"use client";

import Header from "./Header";

function ShoppingCartPage({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  totalCost,
  totalItems,
  onContinueShopping,
  onCheckout,
  cartItemCount,
  onNavigateToProducts,
}) {
  return (
    <div className="shopping-cart-page">
      <Header
        cartItemCount={cartItemCount}
        onNavigateToProducts={onNavigateToProducts}
        showProductsNavigation={true}
      />

      <main className="cart-main">
        <h1 className="page-title">Shopping Cart</h1>

        <div className="cart-summary">
          <p className="total-items">Total Plants: {totalItems}</p>
          <p className="total-cost">Total Cost: ${totalCost.toFixed(2)}</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button
              className="continue-shopping-btn"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="cart-item-image"
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/80x80/4caf50/white?text=${item.name.replace(
                        " ",
                        "+"
                      )}`;
                    }}
                  />
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">
                      Unit Price: ${item.price.toFixed(2)}
                    </p>
                    <p className="cart-item-total">
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        onUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => onRemoveItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button
                className="continue-shopping-btn"
                onClick={onContinueShopping}
              >
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={onCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default ShoppingCartPage;
