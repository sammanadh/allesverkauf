/**
 * SOURCE CODE CITATION
 *
 * The following code is adapted from:
 * Source: https://tailwindcss.com/plus/ui-blocks/ecommerce/components/product-quickviews
 */

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { Product } from "../types/product.ts";
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'

type Props = {
  product: Product;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => unknown;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProdductQuickViews({ product, open, onClose, onAddToCart }: Props) {

  //const addToCart = (product: Product) => {
  //const key = "cart-items";
  //const productsInChartStr = localStorage.getItem(key);
  //let productsInChart: Product[] = [];
  //if (productsInChartStr) {
  //  productsInChart = JSON.parse(productsInChartStr) as Product[];
  //}
  //productsInChart.push(product);
  //localStorage.setItem(key, JSON.stringify(productsInChart));
  //}

  return (
    <div>
      <Dialog open={open} onClose={onClose} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 hidden bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:block"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <DialogPanel
              transition
              className="flex w-full transform text-left text-base transition data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in md:my-8 md:max-w-2xl md:px-4 data-closed:md:translate-y-0 data-closed:md:scale-95 lg:max-w-4xl"
            >
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>

                <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                  <img
                    src={product.img}
                    className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
                  />
                  <div className="sm:col-span-8 lg:col-span-7 h-full flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>

                    <section aria-labelledby="information-heading" className="mt-2">
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-gray-900">{product.price}</p>

                      {/* Reviews */}
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                aria-hidden="true"
                                className={classNames(
                                  product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                  'size-5 shrink-0',
                                )}
                              />
                            ))}
                          </div>
                          <p className="sr-only">{product.rating} out of 5 stars</p>
                          <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {product.reviewsCount} reviews
                          </a>
                        </div>
                      </div>
                    </section>

                    <section aria-labelledby="options-heading" className="mt-10">
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <div>
                        {/* Colors */}
                        <fieldset aria-label="Choose a color">
                          <legend className="text-sm font-medium text-gray-900">Color</legend>

                          <div className="mt-4 flex items-center gap-x-3">
                            <div
                              className="flex rounded-full outline -outline-offset-1 outline-black/10"
                            >
                              <input
                                name="color"
                                type="radio"
                                className={classNames(
                                  product.color,
                                  'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
                                )}
                              />
                            </div>
                          </div>
                        </fieldset>

                        <button
                          className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                          onClick={() => onAddToCart(product)}
                        >
                          Add to bag
                        </button>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

{/* CITATION_END */ }
