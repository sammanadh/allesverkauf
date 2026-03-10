import React, { useState, useEffect, useMemo } from 'react';
import './ProviderComponent.css';
import ProductQuickViews from "./ProductQuickViews.tsx";
import { Product } from "../types/product.ts";
import SearchBar from "./SearchBar.tsx";
import debounce from '../utils/debounce.ts';
import ProductSkeleton from './ProductSkeleton.tsx';

type ProductListProps = {
  onAddToCart: (p: Product) => unknown;
  onSearchTermChange: (term: string) => unknown;
}

const ProviderComponent = ({ onAddToCart, onSearchTermChange }: ProductListProps) => {
  const [openQuickView, setOpenQuickView] = useState(false);
  const [clickedProduct, setClickedProduct] = useState<Product>();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchedResults, setShowSearchedResults] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    onSearchTermChange(searchTerm);
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
    setClickedProduct(() => [...searchResults].find(p => p.id === id))
  }

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
        {
          /**
           * SOURCE CODE CITATION
           *
           * The following code is adapted from:
           * Source: https://flowbite.com/docs/components/carousel/
           */
        }
        {
          showSearchedResults &&
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
        }
        {/* CITATION_END*/}
      </div>
    </div>
  );
};

export default ProviderComponent;
