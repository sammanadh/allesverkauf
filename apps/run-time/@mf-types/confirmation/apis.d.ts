
    export type RemoteKeys = 'confirmation';
    type PackageType<T> = T extends 'confirmation' ? typeof import('confirmation') :any;