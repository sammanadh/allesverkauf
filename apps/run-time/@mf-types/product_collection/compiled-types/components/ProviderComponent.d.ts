import './ProviderComponent.css';
import { Product } from "../types/product.ts";
type ProductListProps = {
    title: string;
    strategy: "trending" | "best-sellers";
    onAddToCart: (p: Product) => unknown;
};
declare const ProviderComponent: ({ title, strategy, onAddToCart }: ProductListProps) => import("react/jsx-runtime").JSX.Element;
export default ProviderComponent;
