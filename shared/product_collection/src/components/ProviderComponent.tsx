import { useState, useEffect } from 'react';
import './ProviderComponent.css';
import ProductQuickViews from "./ProductQuickViews.tsx";
import { Product } from "../types/product.ts";
import ProductSkeleton from './ProductSkeleton.tsx';

type ProductListProps = {
  title: string,
  strategy: "trending" | "best-sellers";
  onAddToCart: (p: Product) => unknown;
}

const ProviderComponent = ({ title, strategy, onAddToCart }: ProductListProps) => {
  const [openQuickView, setOpenQuickView] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [clickedProduct, setClickedProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);

  const onProductClick = (id: string) => {
    setOpenQuickView(true);
    setClickedProduct(() => products.find(p => p.id === id))
  }

  useEffect(() => {
    setLoading(true);

    if (strategy === "trending") {
      fetch("https://serverallesverkauf.vercel.app/products/trending")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json.products);
        }).catch(err => {
          console.log("Something is wrong!!")
          console.log(err)
        }).finally(() => {
          setLoading(false);
        })
    } else if (strategy === "best-sellers") {
      fetch("https://serverallesverkauf.vercel.app/products/best_sellers")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json.products);
        }).catch(err => {
          console.log("Something is wrong!!")
          console.log(err)
        }).finally(() => {
          setLoading(false);
        })
    }
  }, [])

  const handleAddToCart = (p: Product) => {
    setOpenQuickView(false);
    onAddToCart(p);
  }

  return (
    <div className="container m-auto">
      <div className="bg-white">
        {
          clickedProduct !== undefined &&
          <ProductQuickViews onAddToCart={handleAddToCart} product={clickedProduct} open={openQuickView} onClose={() => setOpenQuickView(false)} />
        }
        {/* CITATION_START CITATION_LINK: https://flowbite.com/docs/components/carousel/ */}
        <div>
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {
                loading ? <>
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                  <ProductSkeleton />
                </> :
                  products.map(product => (
                    <div className="group relative cursor-pointer" onClick={() => onProductClick(product.id)}>
                      <img src={product.img} alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
        {/* CITATION_END*/}
      </div>
    </div>
  );
};

export default ProviderComponent;
