import { JSX } from 'react/jsx-runtime';

export declare const Product: ({ onAddToCart }: ProductListProps) => JSX.Element;

declare type Product_2 = {
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

declare type ProductListProps = {
    onAddToCart: (p: Product_2) => unknown;
};

export { }
