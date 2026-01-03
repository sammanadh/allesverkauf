import { JSX } from 'react/jsx-runtime';

export declare const Checkout: ({ onPlaceOrder, products }: CheckoutParams) => JSX.Element;

declare type CheckoutParams = {
    onPlaceOrder: () => unknown;
    products: Product[];
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
