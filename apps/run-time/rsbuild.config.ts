import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  html: {
    title: "Runtime (Rsbuild)"
  },
  output: {
    distPath: "deployments/rsbuild/dist"
  },
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3001,
  },
  source: {
    define: {
      'process.env.BUILD_TOOL': JSON.stringify('rsbuild'),
    },
  }
});
