import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "confirmation",
  exposes: {
    ".": "./src/components/Confirmation.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
    '@headlessui/react': { singleton: true },
    '@heroicons/react': { singleton: true }
  },
});
