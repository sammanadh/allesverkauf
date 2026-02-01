import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  html: {
    title: "Product Search (Rsbuild)"
  },
  output: {
    assetPrefix: "auto",
    distPath: "deployments/rsbuild/dist",
  },
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3009,
  },
});
