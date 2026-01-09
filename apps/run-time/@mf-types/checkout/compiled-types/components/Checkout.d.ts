import "./ProviderComponent.css";
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
type CheckoutParams = {
    onPlaceOrder: () => unknown;
    products: Product[];
};
declare const Checkout: ({ onPlaceOrder, products }: CheckoutParams) => import("react/jsx-runtime").JSX.Element;
export default Checkout;
