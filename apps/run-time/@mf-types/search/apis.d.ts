
    export type RemoteKeys = 'search';
    type PackageType<T> = T extends 'search' ? typeof import('search') :any;