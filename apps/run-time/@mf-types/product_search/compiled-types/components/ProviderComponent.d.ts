import './ProviderComponent.css';
import { Product } from "../types/product.ts";
type ProductListProps = {
    onAddToCart: (p: Product) => unknown;
    onSearchTermChange: (term: string) => unknown;
};
declare const ProviderComponent: ({ onAddToCart, onSearchTermChange }: ProductListProps) => import("react/jsx-runtime").JSX.Element;
export default ProviderComponent;
