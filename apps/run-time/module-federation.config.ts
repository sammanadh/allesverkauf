import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'run-time',
  remotes: {
    'product': 'product@https://allesverkaufproductrb.vercel.app/mf-manifest.json',
    'cart': 'cart@https://allesverkaufcartrb.vercel.app/mf-manifest.json',
    'header': 'header@https://allesverkaufheaderrb.vercel.app/mf-manifest.json',
    'checkout': 'checkout@https://allesverkaufcheckoutrb.vercel.app/mf-manifest.json',
    'confirmation': 'confirmation@https://allesverkaufconfirmationrb.vercel.app/mf-manifest.json'
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: true
});
