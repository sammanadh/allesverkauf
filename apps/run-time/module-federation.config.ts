import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'run-time',
  remotes: {
    'product': 'product@http://localhost:3002/mf-manifest.json',
    'cart': 'cart@http://localhost:3003/mf-manifest.json',
    'header': 'header@http://localhost:3004/mf-manifest.json'
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: false
});
