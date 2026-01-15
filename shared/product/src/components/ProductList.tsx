import React, { useState, useEffect, useMemo } from 'react';
import './ProviderComponent.css';
import ProductQuickViews from "./ProductQuickViews.tsx";
import { Product } from "../types/product.ts";
import SearchBar from "./SearchBar.tsx";
import debounce from '../utils/debounce.ts';
import ProductSkeleton from './ProductSkeleton.tsx';

type ProductListProps = {
  onAddToCart: (p: Product) => unknown;
}

const ProductList = ({ onAddToCart }: ProductListProps) => {
  const [openQuickView, setOpenQuickView] = useState(false);
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [bestSellersProducts, setBestSellersProducts] = useState<Product[]>([]);
  const [clickedProduct, setClickedProduct] = useState<Product>();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchedResults, setShowSearchedResults] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [trendingLoading, setTrendingLoading] = useState(false);
  const [bestSellersLoading, setBestSellersLoading] = useState(false);

  useEffect(() => {
    if (searchTerm !== "") {
      debouncedSearch(searchTerm);
      setShowSearchedResults(true);
    } else {
      setShowSearchedResults(false);
      setSearchResults([])
    }
  }, [searchTerm])

  const debouncedSearch = useMemo(() => {
    setSearchLoading(true);
    return debounce((searchBy: string) => {
      fetch(`https://serverallesverkauf.vercel.app/products?searchBy=${searchBy}`)
        .then((res) => res.json())
        .then((json) => {
          setSearchResults(json.products);
        }).catch(err => {
          console.log("Something is wrong!!")
          console.log(err)
        }).finally(() => {
          setSearchLoading(false);
        })
    }, 1000)
  }, [])

  const onProductClick = (id: string) => {
    setOpenQuickView(true);
    setClickedProduct(() => [...trendingProducts, ...bestSellersProducts].find(p => p.id === id))
  }

  useEffect(() => {
    setTrendingLoading(true);
    setBestSellersLoading(true);

    fetch("https://serverallesverkauf.vercel.app/products/trending")
      .then((res) => res.json())
      .then((json) => {
        setTrendingProducts(json.products);
      }).catch(err => {
        console.log("Something is wrong!!")
        console.log(err)
      }).finally(() => {
        setTrendingLoading(false);
      })

    fetch("https://serverallesverkauf.vercel.app/products/best_sellers")
      .then((res) => res.json())
      .then((json) => {
        setBestSellersProducts(json.products);
      }).catch(err => {
        console.log("Something is wrong!!")
        console.log(err)
      }).finally(() => {
        setBestSellersLoading(false);
      })
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
        <SearchBar onSearchTermChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e?.target.value)} />
        {/* CITATION_START CITATION_LINK: https://flowbite.com/docs/components/carousel/ */}
        {
          showSearchedResults ?
            (
              <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Search Results</h2>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                      searchLoading ? <>
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                      </> :
                        searchResults.map(product => (
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
            )
            :
            (
              <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending Products</h2>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                      trendingLoading ? <>
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                      </> :
                        trendingProducts.map(product => (
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
                </div >
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Best Sellers</h2>

                  <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {
                      bestSellersLoading ? <>
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                        <ProductSkeleton />
                      </> :
                        bestSellersProducts.map(product => (
                          <div className="group relative cursor-pointer" onClick={() => onProductClick(product.id)}>
                            <img src={product.img} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                          </div>
                        ))
                    }
                  </div>
                </div>
              </div>
            )
        }
        {/* CITATION_END*/}
      </div>
    </div>
  );
};

export default ProductList;
