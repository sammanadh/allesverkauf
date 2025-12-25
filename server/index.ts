import { createServer } from "miragejs"
import { trendingProducts, bestSellersProducts, allProducts } from "./data"

export default function() {
  createServer({
    routes() {
      this.namespace = "api"

      this.get("products/trending", () => ({
        products: trendingProducts,
      }))

      this.get("products/best_sellers", () => ({
        products: bestSellersProducts,
      }))

      this.get("products", (_, request) => {
        let searchBy = request.queryParams.searchBy;
        return {
          products: allProducts.filter((product) => searchBy ? product.name.includes(searchBy as string) : true)
        }
      })

      // to allow request that are not meant for this api
      this.namespace = "";
      this.passthrough((req) => {
        const isApiReq = req.url.includes("/api/");
        return !isApiReq;
      });
    },
  })
}
