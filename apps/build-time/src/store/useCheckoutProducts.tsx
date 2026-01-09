import { create } from 'zustand'
import type { ProductType } from '../types/Product'

interface CheckoutProductState {
  checkoutProducts: ProductType[],
  updateCheckoutProducts: (p: ProductType[]) => void
}

const useCheckoutProducts = create<CheckoutProductState>((set) => ({
  checkoutProducts: [],
  updateCheckoutProducts: (products: ProductType[]) => set({ checkoutProducts: products }),
}))

export default useCheckoutProducts;
