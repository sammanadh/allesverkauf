import { JSX } from 'react/jsx-runtime';

export declare function Cart({ isOpen, onClose, products, onProductRemove, onCheckout }: CartParams): JSX.Element;

declare type CartParams = {
    isOpen?: boolean;
    onClose?: () => unknown;
    products: Product[];
    onProductRemove: (p: Product) => unknown;
    onCheckout: () => unknown;
};

declare type Product = {
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

export { }
