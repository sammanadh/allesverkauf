// import { createServer } from "miragejs"
// import { trendingProducts, bestSellersProducts, allProducts } from "./mockData"

// export default function () {
//   createServer({
//     routes() {
//       this.namespace = "api"

//       this.get("products/trending", () => ({
//         products: trendingProducts,
//       }))

//       this.get("products/best_sellers", () => ({
//         products: bestSellersProducts,
//       }))

//       this.get("products", (_, request) => {
//         let searchBy = request.queryParams.searchBy;
//         return {
//           products: allProducts.filter((product) => searchBy ? product.name.includes(searchBy as string) : true)
//         }
//       })
//     },
//   })
// }
