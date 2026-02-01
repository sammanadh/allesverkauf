import { useState } from "react";
import { useNavigate } from "react-router";
import ProductType from "../types/Product";
import Hero from "hero";
import ProductCollection from "product_collection";
import ProductSearch from "product_search";
import Cart from "cart";
import Header from "header";
import useCheckoutProducts from "../store/useCheckoutProducts";

export default () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);
  const [showCompOtherThanSearch, setShowCompOtherThanSearch] = useState(true);
  const navigate = useNavigate();
  const updateCheckoutProducts = useCheckoutProducts(state => state.updateCheckoutProducts);

  const handleAddToCart = (p: ProductType) => {
    setCartProducts((prev) => [...prev, p]);
  };

  const handleProductRemove = (p: ProductType) => {
    setCartProducts((prev) => prev.filter((product) => product.id !== p.id));
  };

  const handleCheckout = () => {
    updateCheckoutProducts(cartProducts)
    navigate("/checkout")
  };

  const handleSearchTermChange = (term: string) => {
    if (term) {
      setShowCompOtherThanSearch(false);
    } else {
      setShowCompOtherThanSearch(true);
    }
  }

  return (
    <>
      <Header onCartClick={() => setIsCartOpen(true)} />
      <ProductSearch onSearchTermChange={handleSearchTermChange} onAddToCart={handleAddToCart} />
      <br />
      {
        showCompOtherThanSearch && (
          <>
            <Hero />
            <ProductCollection title="Trending" strategy="trending" onAddToCart={handleAddToCart} />
            <ProductCollection title="Best Sellers" strategy="best-sellers" onAddToCart={handleAddToCart} />
          </>
        )
      }
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        products={cartProducts}
        onProductRemove={handleProductRemove}
        onCheckout={handleCheckout}
      />
    </>
  )
}
