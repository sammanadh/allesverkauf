import { useState } from "react";
import Cart, { Product } from "./Cart";

const predefinedProducts: Product[] = [
  {
    id: "clothing_001",
    img: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee",
    color: "White",
    price: 35,
    description: "A soft, breathable cotton tee designed for everyday comfort and timeless style.",
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
    description: "A cozy fleece hoodie with a relaxed fit, perfect for layering or lounging.",
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
    description: "Modern slim-fit denim jeans crafted with stretch fabric for all-day comfort.",
    rating: 4.4,
    reviewsCount: 76,
    sizes: ["28", "30", "32", "34", "36"],
  },
]

export default function ProviderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const [products, setProducts] = useState(predefinedProducts);

  const handleProductRemove = (p: Product) => {
    setProducts(prev => prev.filter(product => product.id !== p.id))
  }

  const handleCheckout = () => {
    alert("checking out!!")
  }

  return (<div className="content">
    <button onClick={() => setIsOpen(true)}>open</button>
    <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} products={products} onProductRemove={handleProductRemove} onCheckout={handleCheckout} />
  </div>)
}
