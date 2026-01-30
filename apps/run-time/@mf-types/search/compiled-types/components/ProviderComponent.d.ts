import './ProviderComponent.css';
import { Product } from "../types/product.ts";
type ProductListProps = {
    onAddToCart: (p: Product) => unknown;
};
declare const ProviderComponent: ({ onAddToCart }: ProductListProps) => import("react/jsx-runtime").JSX.Element;
export default ProviderComponent;
