import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'header',
  exposes: {
    '.': './src/components/Header.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    '@headlessui/react': { singleton: true },
    '@heroicons/react': { singleton: true }
  },
});
