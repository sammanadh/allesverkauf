import { useState } from "react";
import { useNavigate } from "react-router";
import ProductType from "../types/Product";
import Product from "product";
import Cart from "cart";
import Header from "header";
import useCheckoutProducts from "../store/useCheckoutProducts";

export default () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);
  const [checkoutProducts, setCheckoutProducts] = useState<ProductType[]>([]);
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

  return (
    <>
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Product onAddToCart={handleAddToCart} />
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
