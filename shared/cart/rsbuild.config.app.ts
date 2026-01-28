import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  html: {
    title: "Cart (Rsbuild)"
  },
  output: {
    distPath: "deployments/rsbuild/dist",
    assetPrefix: "auto",
  },
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3003,
  },
});
