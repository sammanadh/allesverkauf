import React from "react";
import "./ProviderComponent.css";
import Checkout from "./Checkout";

const predefinedProducts: Product[] = [
  {
    id: "clothing_001",
    img: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee",
    color: "White",
    price: 35,
    description:
      "A soft, breathable cotton tee designed for everyday comfort and timeless style.",
    rating: 4.5,
    reviewsCount: 128,
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "clothing_002",
    img: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    name: "Relaxed Fit Hoodie",
    color: "Charcoal",
    price: 68,
    description:
      "A cozy fleece hoodie with a relaxed fit, perfect for layering or lounging.",
    rating: 4.7,
    reviewsCount: 94,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "clothing_003",
    img: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    name: "Slim Denim Jeans",
    color: "Indigo",
    price: 79,
    description:
      "Modern slim-fit denim jeans crafted with stretch fabric for all-day comfort.",
    rating: 4.4,
    reviewsCount: 76,
    sizes: ["28", "30", "32", "34", "36"],
  },
];

const Provider: React.FC = () => {
  return (
    <Checkout products={predefinedProducts} onPlaceOrder={() => alert("ok")} />
  );
};

export default Provider;
