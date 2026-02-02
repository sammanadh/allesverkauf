import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  html: {
    title: "Buildtime"
  },
  output: {
    distPath: "deployments/dist"
  },
  plugins: [pluginReact()],
});
