import { create } from 'zustand'
import ProductType from '../types/Product'

const useCheckoutProducts = create((set) => ({
  checkoutProducts: 0,
  updateCheckoutProducts: (products: ProductType) => set({ checkoutProducts: products }),
}))

export default useCheckoutProducts;
