import React, { useState } from 'react';
import './ProviderComponent.css';
import ProductQuickViews from "./ProductQuickViews.tsx";

const trendingProducts = [
  {
    img: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee",
    color: "White",
    price: "$35"
  },
  {
    img: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee",
    color: "White",
    price: "$35"
  },
  {
    img: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee",
    color: "White",
    price: "$35"
  },
  {
    img: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee",
    color: "White",
    price: "$35"
  },
  {
    img: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    name: "Basic Tee",
    color: "White",
    price: "$35"
  },
]

const ProductList: React.FC = () => {
  const [openQuickView, setOpenQuickView] = useState(false);

  const onProductClick = () => {
    setOpenQuickView(true);
  }

  return (
    <div className="bg-white">
      <ProductQuickViews open={openQuickView} onClose={() => setOpenQuickView(false)} />
      {/* CITATION_START CITATION_LINK: https://flowbite.com/docs/components/carousel/ */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Trending Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            trendingProducts.map(product => (
              <div className="group relative cursor-pointer" onClick={onProductClick}>
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
          <a href="#" className="group">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
            <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
          </a>
          <a href="#" className="group">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
            <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>
          <a href="#" className="group">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
            <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
          </a>
          <a href="#" className="group">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
            <h3 className="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
          </a>
          <a href="#" className="group">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg" alt="Paper card sitting upright in walnut card holder on desk." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
            <h3 className="mt-4 text-sm text-gray-700">Focus Card Tray</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$64</p>
          </a>
          <a href="#" className="group">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg" alt="Stack of 3 small drab green cardboard paper card refill boxes with white text." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
            <h3 className="mt-4 text-sm text-gray-700">Focus Multi-Pack</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$39</p>
          </a>
          <a href="#" className="group">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg" alt="Brass scissors with geometric design, black steel finger holes, and included upright brass stand." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
            <h3 className="mt-4 text-sm text-gray-700">Brass Scissors</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$50</p>
          </a>
          <a href="#" className="group">
            <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg" alt="Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop." className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8" />
            <h3 className="mt-4 text-sm text-gray-700">Focus Carry Pouch</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">$32</p>
          </a>
        </div>
      </div>
      {/* CITATION_END*/}
    </div >
  );
};

export default ProductList;
