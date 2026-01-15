import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { allProducts, bestSellersProducts, trendingProducts } from './data.js'

const app = new Hono()

app.use(cors())

app.get("products/trending", (c) => {
  return c.json({
    products: trendingProducts
  })
})

app.get("products/best_sellers", (c) => {
  return c.json({
    products: bestSellersProducts
  })
})

app.get("products", (c) => {
  let searchBy = c.req.query().searchBy;
  return c.json({
    products: allProducts.filter((product) => searchBy ? product.name.includes(searchBy as string) : true)
  })
})

export default app
