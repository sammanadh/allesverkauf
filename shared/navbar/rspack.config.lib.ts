import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      dts: {
        bundle: true
      },
    },
    {
      format: 'cjs',
    },
  ],
  source: {
    entry: {
      index: './src/lib/index.ts', // or wherever your entry point is
    },
  },
  output: {
    distPath: "./lib-dist",
    injectStyles: false
  },
  plugins: [pluginReact()],
});