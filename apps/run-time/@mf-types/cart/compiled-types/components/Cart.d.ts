export type Product = {
    id: string;
    img: string;
    name: string;
    color: string;
    price: number;
    description: string;
    rating: number;
    reviewsCount: number;
    sizes: string[];
};
type CartParams = {
    isOpen?: boolean;
    onClose?: () => unknown;
    products: Product[];
    onProductRemove: (p: Product) => unknown;
    onCheckout: () => unknown;
};
export default function Cart({ isOpen, onClose, products, onProductRemove, onCheckout }: CartParams): import("react/jsx-runtime").JSX.Element;
export {};
