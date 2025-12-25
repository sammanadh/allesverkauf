
    export type RemoteKeys = 'product';
    type PackageType<T> = T extends 'product' ? typeof import('product') :any;