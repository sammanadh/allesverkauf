import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'run-time',
  remotes: {
    'cart': 'cart@https://allesverkaufcartrb.vercel.app/mf-manifest.json',
    'header': 'header@https://allesverkaufheaderrb.vercel.app/mf-manifest.json',
    'checkout': 'checkout@https://allesverkaufcheckoutrb.vercel.app/mf-manifest.json',
    'confirmation': 'confirmation@https://allesverkaufproductrb.vercel.app/mf-manifest.json',
    'product_collection': 'product_collection@https://allesverkaufproductcollectionrb.vercel.app/mf-manifest.json',
    'hero': 'hero@https://allesverkaufherorb.vercel.app/mf-manifest.json',
    'search': 'search@https://allesverkaufsearchrb.vercel.app/mf-manifest.json'
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: true
});
