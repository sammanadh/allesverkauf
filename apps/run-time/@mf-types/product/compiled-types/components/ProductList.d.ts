import './ProviderComponent.css';
import { Product } from "../types/product.ts";
type ProductListProps = {
    onAddToCart: (p: Product) => unknown;
};
declare const ProductList: ({ onAddToCart }: ProductListProps) => import("react/jsx-runtime").JSX.Element;
export default ProductList;
