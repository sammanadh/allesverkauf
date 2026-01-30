
    export type RemoteKeys = 'product_collection';
    type PackageType<T> = T extends 'product_collection' ? typeof import('product_collection') :any;