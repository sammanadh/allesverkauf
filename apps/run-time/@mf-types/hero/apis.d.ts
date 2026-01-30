
    export type RemoteKeys = 'hero';
    type PackageType<T> = T extends 'hero' ? typeof import('hero') :any;