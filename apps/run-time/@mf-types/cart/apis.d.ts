
    export type RemoteKeys = 'cart';
    type PackageType<T> = T extends 'cart' ? typeof import('cart') :any;