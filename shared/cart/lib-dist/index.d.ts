import { JSX } from 'react/jsx-runtime';

export declare function Cart({ isOpen, onClose }: CartParams): JSX.Element;

declare type CartParams = {
    isOpen?: boolean;
    onClose?: () => unknown;
};

export { }
