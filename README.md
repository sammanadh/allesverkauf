# allesverkauf

A microfrontend-architecture showcase built on top of a simple e-commerce storefront. The application itself — a clothing shop with product listings, a cart, checkout, and order confirmation — is intentionally minimal and uses mock data. The real subject of the project is the **microfrontend architecture**: how independently developed and deployed UI components can be composed into a cohesive application, and specifically the difference between composition strategies: **build-time integration** and **runtime integration** — and within runtime integration, the difference between **Module Federation v1** and **Module Federation v2**.

---

## Table of Contents

- [What is Microfrontend Architecture?](#what-is-microfrontend-architecture)
- [Architecture Overview](#architecture-overview)
- [Integration Strategies](#integration-strategies)
  - [Build-Time Integration](#build-time-integration)
  - [Runtime Integration](#runtime-integration)
    - [Module Federation v1 (Webpack)](#module-federation-v1-webpack)
    - [Module Federation v2 (Rsbuild / Rspack)](#module-federation-v2-rsbuild--rspack)
    - [v1 vs v2 Comparison](#v1-vs-v2-comparison)
- [Project Structure](#project-structure)
- [Microfrontend Component Map](#microfrontend-component-map)
- [Running the Project Locally](#running-the-project-locally)
  - [Prerequisites](#prerequisites)
  - [Backend API](#backend-api)
  - [Individual Microfrontends](#individual-microfrontends)
  - [Host Applications](#host-applications)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)

---

## What is Microfrontend Architecture?

Microfrontend architecture extends the principles of microservices to the frontend. Instead of a single monolithic frontend application, the UI is decomposed into a set of **independently developed, built, and deployed** pieces — each owned by a different team and each responsible for a well-defined slice of the user interface.

```
Monolithic Frontend                Microfrontend Architecture
─────────────────────             ──────────────────────────────────────
                                   ┌──────────┐  ┌──────────┐
┌─────────────────────┐            │  Header  │  │   Hero   │
│                     │            │   MFE    │  │   MFE    │
│   Header            │            └──────────┘  └──────────┘
│   Hero              │                    \        /
│   Product Listing   │    ──────►    ┌────────────────────┐
│   Cart              │               │   Shell / Host App  │
│   Checkout          │               │  (composes the UI)  │
│   Confirmation      │               └────────────────────┘
│                     │                    /        \
└─────────────────────┘            ┌──────────┐  ┌──────────┐
  One team, one repo,              │   Cart   │  │ Checkout │
  one deployment unit              │   MFE    │  │   MFE    │
                                   └──────────┘  └──────────┘
                                   Each MFE: own repo, own build, own deploy
```

**Key benefits this project explores:**
- Each microfrontend can be developed, tested, and deployed independently.
- A failure or update to one MFE does not require a full application rebuild or redeployment.
- Each MFE can be run in isolation as a standalone app during development.
- The host (shell) application is thin — it just orchestrates layout and routing.

---

## Architecture Overview

This project implements **three integration approaches** across two host applications:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              allesverkauf                                   │
│                                                                             │
│  ┌───────────────────────┐    ┌─────────────────────────────────────────┐  │
│  │  Build-Time Host App  │    │          Runtime Host App               │  │
│  │  apps/build-time      │    │          apps/run-time                  │  │
│  │  (port 3000)          │    │                                         │  │
│  │                       │    │  ┌──────────────┐  ┌─────────────────┐  │  │
│  │  imports MFEs as npm  │    │  │  MF v1 mode  │  │   MF v2 mode   │  │  │
│  │  packages at build    │    │  │  (Webpack)   │  │   (Rsbuild)    │  │  │
│  │  time                 │    │  │  port 3011   │  │   port 3001    │  │  │
│  └──────────┬────────────┘    │  └──────┬───────┘  └───────┬────────┘  │  │
│             │                 │         │                   │           │  │
│             │                 └─────────┼───────────────────┼───────────┘  │
│             │ npm install               │ remoteEntry.js    │ mf-manifest  │
│             ▼                           ▼ (MF v1)           ▼ .json (MF v2)│
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                       Shared Microfrontends                         │   │
│  │                                                                     │   │
│  │  Each MFE exposes components via both MF v1 and MF v2:              │   │
│  │                                                                     │   │
│  │  ┌──────────┐  ┌──────────────────┐  ┌──────────────────────────┐  │   │
│  │  │  header  │  │ product_collection│  │      product_search      │  │   │
│  │  └──────────┘  └──────────────────┘  └──────────────────────────┘  │   │
│  │                                                                     │   │
│  │  ┌──────────┐  ┌──────────┐  ┌────────────┐  ┌────────────────┐   │   │
│  │  │   hero   │  │   cart   │  │  checkout  │  │  confirmation  │   │   │
│  │  └──────────┘  └──────────┘  └────────────┘  └────────────────┘   │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │                        Backend API (Hono)                           │   │
│  │              GET /products  |  /products/trending                   │   │
│  │                             |  /products/best_sellers               │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Integration Strategies

This project implements and compares **three approaches** to composing microfrontends.

---

### Build-Time Integration

```
  MFE Packages (npm registry)
  ┌───────────────────────────────────┐
  │  @sammanadh/header    v1.0.6      │
  │  @sammanadh/cart      v1.0.1      │
  │  @sammanadh/checkout  v1.0.0      │
  │  @sammanadh/hero      v1.0.0      │
  │  ...                              │
  └──────────────┬────────────────────┘
                 │  npm install
                 ▼
  ┌──────────────────────────────┐
  │    Build-Time Host App       │
  │    apps/build-time           │
  │                              │
  │    import { Cart }           │
  │      from '@sammanadh/cart'  │──► bundled together at build
  │    import { Header }         │
  │      from '@sammanadh/header'│
  │    ...                       │
  └──────────────────────────────┘
                 │  npm run build
                 ▼
         Single output bundle
```

Each microfrontend is published to npm as a library (built to `lib-dist/` via RSlib). The host installs them as regular dependencies and they are bundled into a single output at build time.

**Trade-off:** Simple mental model and full TypeScript type safety, but updating any MFE requires republishing the npm package, then rebuilding and redeploying the host. No independent deployability at runtime.

> Identified by the **green** banner at the top of the page.

---

### Runtime Integration

In runtime integration, the host application does not bundle the MFEs. Instead, it fetches and loads them over the network at page load time from independently deployed URLs. This is the core of **Module Federation** — a Webpack / Rspack feature that allows separate builds to share code at runtime.

This project implements runtime integration **twice**, using two different generations of the Module Federation API:

---

#### Module Federation v1 (Webpack)

MF v1 is the original implementation built into **Webpack 5** via `webpack.container.ModuleFederationPlugin`. Each remote MFE exposes a `remoteEntry.js` file. The host references remotes using the `<name>@<url>/remoteEntry.js` syntax.

```
  MFEs deployed independently — each exposes a remoteEntry.js
  ┌──────────────────────────────────────────────────────────┐
  │                                                          │
  │  cart     → https://allesverkaufcartwp.vercel.app        │
  │               └── /remoteEntry.js                        │
  │  header   → https://allesverkaufheaderwp.vercel.app      │
  │               └── /remoteEntry.js                        │
  │  ...                                                     │
  └────────────────────────┬─────────────────────────────────┘
                           │  fetched at page load
                           ▼
  ┌──────────────────────────────────────────────────────────────┐
  │                Runtime Host App (Webpack mode)               │
  │                apps/run-time  —  port 3011                   │
  │                                                              │
  │   webpack.config.ts:                                         │
  │   new ModuleFederationPlugin({                               │
  │     remotes: {                                               │
  │       cart:   'cart@https://.../remoteEntry.js'              │
  │       header: 'header@https://.../remoteEntry.js'            │
  │       ...                                                    │
  │     }                                                        │
  │   })                                                         │
  │                                                              │
  │   import Cart from 'cart';  ← loaded over the network       │
  └──────────────────────────────────────────────────────────────┘
```

> Identified by the **yellow** banner at the top of the page.

---

#### Module Federation v2 (Rsbuild / Rspack)

MF v2 is the next-generation implementation provided by the `@module-federation/enhanced` package. It is bundler-agnostic (supports Webpack, Rspack, and Rsbuild) and introduces a richer manifest-based discovery mechanism. Instead of a single `remoteEntry.js`, each remote exposes an `mf-manifest.json` that describes available modules, their chunks, and shared dependency versions. The host references remotes using the `<name>@<url>/mf-manifest.json` syntax.

```
  MFEs deployed independently — each exposes an mf-manifest.json
  ┌──────────────────────────────────────────────────────────┐
  │                                                          │
  │  cart     → https://allesverkaufcartrb.vercel.app        │
  │               └── /mf-manifest.json                      │
  │  header   → https://allesverkaufheaderrb.vercel.app      │
  │               └── /mf-manifest.json                      │
  │  ...                                                     │
  └────────────────────────┬─────────────────────────────────┘
                           │  fetched at page load
                           ▼
  ┌──────────────────────────────────────────────────────────────┐
  │                Runtime Host App (Rsbuild mode)               │
  │                apps/run-time  —  port 3001                   │
  │                                                              │
  │   module-federation.config.ts:                               │
  │   createModuleFederationConfig({                             │
  │     remotes: {                                               │
  │       cart:   'cart@https://.../mf-manifest.json'            │
  │       header: 'header@https://.../mf-manifest.json'          │
  │       ...                                                    │
  │     }                                                        │
  │   })                                                         │
  │                                                              │
  │   import Cart from 'cart';  ← loaded over the network       │
  └──────────────────────────────────────────────────────────────┘
```

> Identified by the **red** banner at the top of the page.

---

#### v1 vs v2 Comparison

| | MF v1 (Webpack) | MF v2 (Rsbuild / Rspack) |
|---|---|---|
| Plugin | `webpack.container.ModuleFederationPlugin` | `@module-federation/enhanced` |
| Remote entry format | `remoteEntry.js` | `mf-manifest.json` |
| Remote URL syntax | `name@url/remoteEntry.js` | `name@url/mf-manifest.json` |
| Bundler support | Webpack only | Webpack, Rspack, Rsbuild, Vite |
| Type generation | Manual / none | Built-in (`dts: true`) |
| Shared dependency strategy | `eager` / `singleton` | `loaded-first` and others |
| Runtime plugin system | No | Yes |
| Manifest-based discovery | No | Yes |

---

### All Three Strategies Side-by-Side

| | Build-Time | Runtime — MF v1 | Runtime — MF v2 |
|---|---|---|---|
| Integration point | npm install | `remoteEntry.js` at page load | `mf-manifest.json` at page load |
| Update MFE | Republish + rebuild host | Redeploy MFE only | Redeploy MFE only |
| Independent deployability | No | Yes | Yes |
| Shared dependencies | Bundled together | Negotiated at runtime | Negotiated at runtime |
| Type safety across boundary | Full (published types) | None built-in | Built-in type generation |
| Complexity | Low | Medium | Medium–High |
| Visual indicator | Green banner | Yellow banner | Red banner |

---

## Project Structure

```
allesverkauf/
├── apps/
│   ├── build-time/          # Host app — build-time integration (port 3000)
│   └── run-time/            # Host app — MF v1 (port 3011) + MF v2 (port 3001)
│
├── shared/
│   ├── header/              # Site navigation MFE
│   ├── hero/                # Landing banner MFE
│   ├── product_collection/  # Product grid MFE (trending / best sellers)
│   ├── product_search/      # Search bar MFE
│   ├── cart/                # Slide-out cart panel MFE
│   ├── checkout/            # Checkout form MFE
│   └── confirmation/        # Order confirmation dialog MFE
│
├── server/                  # Hono REST API (mock product data)
└── package.json             # Root scripts to orchestrate the monorepo
```

Each microfrontend under `shared/` supports three independent build modes:

| Config file | Purpose |
|---|---|
| `rsbuild.config.app.ts` | Standalone dev server — runs the MFE as a self-contained app (MF v2) |
| `rsbuild.config.lib.ts` | Library build — outputs to `lib-dist/` for npm publishing (build-time) |
| `webpack.config.ts` | Webpack Module Federation build — exposes `remoteEntry.js` (MF v1) |

---

## Microfrontend Component Map

```
                     ┌─────────────────────────────────────────────────┐
                     │                  Shop Page (/)                  │
                     │                                                 │
                     │  ┌─────────────────────────────────────────┐   │
                     │  │              header MFE                 │   │
                     │  │   logo · navigation · cart icon         │   │
                     │  └─────────────────────────────────────────┘   │
                     │                                                 │
                     │  ┌─────────────────────────────────────────┐   │
                     │  │           product_search MFE            │   │
                     │  │   search input → live filtered results  │   │
                     │  └─────────────────────────────────────────┘   │
                     │                                                 │
                     │  ┌─────────────────────────────────────────┐   │
                     │  │               hero MFE                  │   │
                     │  │   banner / promotional section          │   │
                     │  └─────────────────────────────────────────┘   │
                     │                                                 │
                     │  ┌─────────────────────────────────────────┐   │
                     │  │        product_collection MFE           │   │
                     │  │   "Trending" product grid               │   │
                     │  └─────────────────────────────────────────┘   │
                     │                                                 │
                     │  ┌─────────────────────────────────────────┐   │
                     │  │        product_collection MFE           │   │
                     │  │   "Best Sellers" product grid           │   │
                     │  └─────────────────────────────────────────┘   │
                     │                                                 │
                     │         ┌──────────────────────┐               │
                     │         │       cart MFE       │ (slide-out)   │
                     │         └──────────────────────┘               │
                     └─────────────────────────────────────────────────┘

                     ┌─────────────────────────────────────────────────┐
                     │              Checkout Page (/checkout)          │
                     │                                                 │
                     │  ┌─────────────────────────────────────────┐   │
                     │  │             checkout MFE                │   │
                     │  │   order summary · payment form          │   │
                     │  └─────────────────────────────────────────┘   │
                     │                                                 │
                     │       ┌──────────────────────────────┐         │
                     │       │       confirmation MFE       │(dialog) │
                     │       └──────────────────────────────┘         │
                     └─────────────────────────────────────────────────┘
```

---

## Running the Project Locally

### Prerequisites

- Node.js 18+
- npm 9+

Install root dependencies:

```bash
npm install
```

---

### Backend API

The API server provides mock product data to all MFEs.

```bash
cd server
npm install
npx tsx src/index.ts
```

Available endpoints:
- `GET /products` — all products (supports `?searchBy=<term>`)
- `GET /products/trending` — trending products
- `GET /products/best_sellers` — best seller products

---

### Individual Microfrontends

Each MFE under `shared/` can be started as a standalone application, useful for developing and testing in isolation without a host app.

```bash
# From the MFE's directory:

# Standalone app using MF v2 (Rsbuild)
npm run dev:rsbuild

# Standalone app using MF v1 (Webpack)
npm run dev:webpack
```

| MFE | Directory | Rsbuild port (MF v2) | Webpack port (MF v1) |
|---|---|---|---|
| cart | `shared/cart` | 3003 | 3013 |
| header | `shared/header` | 3004 | 3014 |
| checkout | `shared/checkout` | 3005 | 3015 |
| confirmation | `shared/confirmation` | 3006 | 3016 |
| hero | `shared/hero` | 3007 | 3017 |
| product_collection | `shared/product_collection` | 3008 | 3018 |
| product_search | `shared/product_search` | 3009 | 3019 |

Or use the root scripts to start all MFEs concurrently:

```bash
# All MFEs — Rsbuild (MF v2)
npm run shared:all

# All MFEs — Webpack (MF v1)
npm run shared:all:webpack
```

---

### Host Applications

#### Build-Time Integration Host

Imports all MFEs as npm packages. The MFE source is bundled into the host at build time.

```bash
cd apps/build-time
npm install
npm run dev    # → http://localhost:3000
```

> Identified by the **green** banner.

---

#### Runtime Integration Host — Module Federation v2 (Rsbuild)

Fetches MFEs at page load from their deployed Vercel URLs via `mf-manifest.json`. No local MFE servers are needed.

```bash
cd apps/run-time
npm install
npm run dev:rsbuild    # → http://localhost:3001
```

> Identified by the **red** banner.

To point at **locally running** MFEs instead of the deployed ones, update `remotes` in `apps/run-time/module-federation.config.ts` to use `localhost` URLs (e.g. `cart@http://localhost:3003/mf-manifest.json`).

---

#### Runtime Integration Host — Module Federation v1 (Webpack)

Fetches MFEs at page load from their deployed Vercel URLs via `remoteEntry.js`.

```bash
cd apps/run-time
npm run dev:webpack    # → http://localhost:3011
```

> Identified by the **yellow** banner.

To point at **locally running** MFEs instead of the deployed ones, update `remotes` in `apps/run-time/webpack.config.ts` to use `localhost` URLs (e.g. `cart@http://localhost:3013/remoteEntry.js`).

---

#### Start Both Hosts Together

```bash
npm run host:all
```

---

## Tech Stack

| Concern | Technology |
|---|---|
| UI Framework | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Bundler (MF v2) | Rspack / Rsbuild |
| Bundler (MF v1) | Webpack 5 |
| Module Federation v1 | `webpack.container.ModuleFederationPlugin` |
| Module Federation v2 | `@module-federation/enhanced` |
| Library Build | RSlib |
| State Management | Zustand |
| Routing | React Router v7 |
| Backend | Hono |
| Deployment | Vercel |

---

## Deployment

Each piece of this project is deployed independently to Vercel, directly demonstrating the core microfrontend principle of **autonomous deployment**. Each MFE is deployed twice — once as an MF v2 (Rsbuild) build and once as an MF v1 (Webpack) build.

```
                     MF v2 (Rsbuild)                       MF v1 (Webpack)
shared/cart        → allesverkaufcartrb.vercel.app          allesverkaufcartwp.vercel.app
shared/header      → allesverkaufheaderrb.vercel.app        allesverkaufheaderwp.vercel.app
shared/checkout    → allesverkaufcheckoutrb.vercel.app      allesverkaufcheckoutwp.vercel.app
shared/confirmation→ allesverkaufconfirmationrb.vercel.app  allesverkaufconfirmationwp.vercel.app
shared/hero        → allesverkaufherorb.vercel.app          allesverkaufherowp.vercel.app
shared/product_collection
                   → allesverkaufproductcollectionrb.vercel.app
                                                            allesverkaufproductcollectionwp.vercel.app
shared/product_search
                   → allesverkaufproductsearchrb.vercel.app
                                                            allesverkaufproductsearchwp.vercel.app

apps/run-time      → deployed separately (runtime host — both MF v1 and MF v2)
apps/build-time    → deployed separately (build-time host)
server/            → deployed separately (Hono API)
```

Root deploy scripts are available for each:

```bash
npm run deploy:cart
npm run deploy:header
npm run deploy:checkout
npm run deploy:confirmation
npm run deploy:hero
npm run deploy:product_collection
npm run deploy:product_search
npm run deploy:runtime
npm run deploy:buildtime
```
