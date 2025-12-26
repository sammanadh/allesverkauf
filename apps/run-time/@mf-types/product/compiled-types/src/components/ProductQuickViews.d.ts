import { Product } from "../types/product.ts";
type Props = {
    product: Product;
    open: boolean;
    onClose: () => void;
};
export default function ProdductQuickViews({ product, open, onClose }: Props): import("react/jsx-runtime").JSX.Element;
export {};
