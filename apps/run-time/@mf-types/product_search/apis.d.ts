
    export type RemoteKeys = 'product_search';
    type PackageType<T> = T extends 'product_search' ? typeof import('product_search') :any;