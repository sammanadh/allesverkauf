import Checkout from "checkout";
import Confirmation from "confirmation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useCheckoutProducts from "../store/useCheckoutProducts";

export default () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const navigate = useNavigate();
  const products = useCheckoutProducts(state => state.checkoutProducts);
  const handlePlaceOrder = () => {
    setIsConfirmationOpen(true);
  }
  const handleConfirmationClosed = () => {
    setIsConfirmationOpen(false);
    navigate("/")
  }

  return <>
    <Checkout products={products} onPlaceOrder={handlePlaceOrder} />
    <Confirmation open={isConfirmationOpen} onClose={handleConfirmationClosed} />
  </>
}
