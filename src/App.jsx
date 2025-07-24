"use client";

import { useState } from "react";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import "./App.css";

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 45.99,
    category: "Indoor Plants",
    image:
      "https://growurban.uk/cdn/shop/articles/care-guide-monstera-deliciosa-668092_680bbf00-9564-4f0c-b9cb-27ededaf19d2.jpg?v=1748436514&width=2048",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 29.99,
    category: "Indoor Plants",
    image: "https://stacyling.com/wp-content/uploads/2023/01/snake-plants.jpg",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 65.99,
    category: "Indoor Plants",
    image:
      "https://www.palasa.co.in/cdn/shop/articles/IMG_20220226_173034_1.jpg?v=1694161186",
  },

  // Succulents
  {
    id: 4,
    name: "Jade Plant",
    price: 19.99,
    category: "Succulents",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQnNU4kqGZbzM5rnhVPLF1cd6u932pglb3JMZ-aX98jJIlNCSeqeGNE7zPi-cD-Gmm3VspkV6gm1Ewe_Nnd3S46bw",
  },
  {
    id: 5,
    name: "Aloe Vera",
    price: 24.99,
    category: "Succulents",
    image:
      "https://www.meadowsfarms.com/great-big-greenhouse-gardening-blog/wp-content/uploads/sites/2/2023/02/doug-blog-aloe-vera.jpg.webp",
  },
  {
    id: 6,
    name: "Echeveria",
    price: 16.99,
    category: "Succulents",
    image:
      "https://www.thegardener.co.za/wp-content/uploads/2020/08/Feature-IMG_2917-copy.jpg",
  },

  // Flowering Plants
  {
    id: 7,
    name: "Peace Lily",
    price: 39.99,
    category: "Flowering Plants",
    image:
      "https://www.thespruce.com/thmb/HxJP0gim16D7iq7vAYO0-fDbk5k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SPR-variegated-peace-lily-domino-7097188-hero-A-422d7faa152d42d3a4030ff8a2a33768.jpg",
  },
  {
    id: 8,
    name: "African Violet",
    price: 22.99,
    category: "Flowering Plants",
    image:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/77286065/3554654581.png",
  },
];

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalCost = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onGetStarted={() => setCurrentPage("products")} />;
      case "products":
        return (
          <ProductListingPage
            plants={plants}
            onAddToCart={addToCart}
            cartItemCount={getTotalItems()}
            onNavigateToCart={() => setCurrentPage("cart")}
          />
        );
      case "cart":
        return (
          <ShoppingCartPage
            cartItems={cart}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            totalCost={getTotalCost()}
            totalItems={getTotalItems()}
            onContinueShopping={() => setCurrentPage("products")}
            onCheckout={() => alert("Functionality to be added for future reference")}
            cartItemCount={getTotalItems()}
            onNavigateToProducts={() => setCurrentPage("products")}
          />
        );
      default:
        return <LandingPage onGetStarted={() => setCurrentPage("products")} />;
    }
  };

  return <div className="app">{renderPage()}</div>;
}

export default App;
