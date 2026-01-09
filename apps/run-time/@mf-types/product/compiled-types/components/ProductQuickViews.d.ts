import { Product } from "../types/product.ts";
type Props = {
    product: Product;
    open: boolean;
    onClose: () => void;
    onAddToCart: (product: Product) => unknown;
};
export default function ProdductQuickViews({ product, open, onClose, onAddToCart }: Props): import("react/jsx-runtime").JSX.Element;
export {};
