/**
 * CITATION_START
 * NOTE:
 * Much of these configuration code are genrated using AI (ChatGPT/ClaudeAI)
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
