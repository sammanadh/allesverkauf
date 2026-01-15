import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'run-time',
  remotes: {
    'product': 'product@https://allesverkaufproduct.vercel.app/mf-manifest.json',
    'cart': 'cart@https://allesverkaufcart.vercel.app/mf-manifest.json',
    'header': 'header@https://allesverkaufheader.vercel.app/mf-manifest.json',
    'checkout': 'checkout@https://allesverkaufcheckout.vercel.app/mf-manifest.json',
    'confirmation': 'confirmation@https://allesverkaufconfirmation.vercel.app/mf-manifest.json'
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: true
});
