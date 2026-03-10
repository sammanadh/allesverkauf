/**
  * DISCLOSURE: AI Generated Code 
  * Much of these configuration code was genrated using ClaudeAI
  * The author and adopted and verified the code for correctness.
*/

import { defineConfig } from "@rslib/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  lib: [
    {
      format: "esm",
      dts: {
        bundle: true,
      },
      output: {
        externals: ["react", "react-dom", "react/jsx-runtime"],
      },
    },
    {
      format: "cjs",
      output: {
        externals: ["react", "react-dom", "react/jsx-runtime"],
      },
    },
  ],
  source: {
    entry: {
      index: "./src/lib/index.ts",
    },
  },
  output: {
    distPath: "./lib-dist",
  },
  plugins: [pluginReact()],
});
