
    export type RemoteKeys = 'navbar';
    type PackageType<T> = T extends 'navbar' ? typeof import('navbar') :any;