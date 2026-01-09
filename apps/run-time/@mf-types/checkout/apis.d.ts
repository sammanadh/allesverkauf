
    export type RemoteKeys = 'checkout';
    type PackageType<T> = T extends 'checkout' ? typeof import('checkout') :any;