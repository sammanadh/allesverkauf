{
  /* CITATION_START CITATION_LINK: https://flowbite.com/blocks/e-commerce/checkout/ */
}
import React, { useMemo, useState } from "react";
import "./ProviderComponent.css";

const enum PAYMENT_METHODS {
  CREDIT_CARD,
  ON_DELIVERY,
  PAYPAL,
}

const enum DELIVERY_METHOD {
  FAST,
  FREE,
  EXPRESS,
}

export type Product = {
  id: string;
  img: string;
  name: string;
  color: string;
  price: number;
  description: string;
  rating: number;
  reviewsCount: number;
  sizes: string[];
};

type CheckoutParams = {
  onPlaceOrder: () => unknown;
  products: Product[];
};

const Checkout: React.FC = ({ onPlaceOrder, products }: CheckoutParams) => {
  const [selectedPaymentType, setSelectedPaymentType] =
    useState<PAYMENT_METHODS>(PAYMENT_METHODS.CREDIT_CARD);
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] =
    useState<DELIVERY_METHOD>(DELIVERY_METHOD.FAST);

  const subTotal = useMemo(
    () => products.reduce((acc, next) => acc + next.price, 0),
    [products],
  );

  const deliveryCharge = useMemo(() => 4.99, []);

  const total = useMemo(
    () => subTotal + deliveryCharge,
    [subTotal, deliveryCharge],
  );

  return (
    <div className="container">
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="your_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Your name{" "}
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Bonnie Green"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="your_email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Your email*{" "}
                    </label>
                    <input
                      type="email"
                      id="your_email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone-input-3"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      {" "}
                      Phone Number*{" "}
                    </label>
                    <div className="flex items-center">
                      <button
                        id="dropdown-phone-button-3"
                        data-dropdown-toggle="dropdown-phone-3"
                        className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        type="button"
                      >
                        <svg
                          className="me-2 h-4 w-4"
                          fill="none"
                          viewBox="0 0 20 15"
                        >
                          <rect
                            width="19.6"
                            height="14"
                            y=".5"
                            fill="#fff"
                            rx="2"
                          />
                          <mask
                            id="a"
                            style={{ maskType: "luminance" }}
                            width="20"
                            height="15"
                            x="0"
                            y="0"
                            maskUnits="userSpaceOnUse"
                          >
                            <rect
                              width="19.6"
                              height="14"
                              y=".5"
                              fill="#fff"
                              rx="2"
                            />
                          </mask>
                          <g mask="url(#a)">
                            <path
                              fill="#262626"
                              fill-rule="evenodd"
                              d="M0 5.167h19.6V.5H0v4.667z"
                              clip-rule="evenodd"
                            />
                            <g filter="url(#filter0_d_374_135180)">
                              <path
                                fill="#F01515"
                                fill-rule="evenodd"
                                d="M0 9.833h19.6V5.167H0v4.666z"
                                clip-rule="evenodd"
                              />
                            </g>
                            <g filter="url(#filter1_d_374_135180)">
                              <path
                                fill="#FFD521"
                                fill-rule="evenodd"
                                d="M0 14.5h19.6V9.833H0V14.5z"
                                clip-rule="evenodd"
                              />
                            </g>
                          </g>
                          <defs>
                            <filter
                              id="filter0_d_374_135180"
                              width="19.6"
                              height="4.667"
                              x="0"
                              y="5.167"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_374_135180"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_374_135180"
                                result="shape"
                              />
                            </filter>
                            <filter
                              id="filter1_d_374_135180"
                              width="19.6"
                              height="4.667"
                              x="0"
                              y="9.833"
                              color-interpolation-filters="sRGB"
                              filterUnits="userSpaceOnUse"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feColorMatrix
                                in="SourceAlpha"
                                result="hardAlpha"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              />
                              <feOffset />
                              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                              <feBlend
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_374_135180"
                              />
                              <feBlend
                                in="SourceGraphic"
                                in2="effect1_dropShadow_374_135180"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                        +49
                      </button>
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="phone-input"
                          className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          placeholder="123-456-7890"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="address-input-3"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Address*{" "}
                      </label>
                    </div>
                    <input
                      type="text"
                      id="address-input-3"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="plz-input-3"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        PLZ*{" "}
                      </label>
                    </div>
                    <input
                      type="text"
                      id="plz-input-3"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="city-input-3"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        City*{" "}
                      </label>
                    </div>
                    <input
                      type="text"
                      id="city-input-3"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Payment
                </h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                    onClick={() =>
                      setSelectedPaymentType(PAYMENT_METHODS.CREDIT_CARD)
                    }
                  >
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="credit-card"
                          aria-describedby="credit-card-text"
                          type="radio"
                          name="payment-method"
                          value={PAYMENT_METHODS.CREDIT_CARD}
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          checked={
                            selectedPaymentType === PAYMENT_METHODS.CREDIT_CARD
                          }
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="credit-card"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Credit Card{" "}
                        </label>
                        <p
                          id="credit-card-text"
                          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Pay with your credit card
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                    onClick={() =>
                      setSelectedPaymentType(PAYMENT_METHODS.ON_DELIVERY)
                    }
                  >
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="pay-on-delivery"
                          aria-describedby="pay-on-delivery-text"
                          type="radio"
                          name="payment-method"
                          value={PAYMENT_METHODS.ON_DELIVERY}
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          checked={
                            selectedPaymentType === PAYMENT_METHODS.ON_DELIVERY
                          }
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="pay-on-delivery"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Payment on delivery{" "}
                        </label>
                        <p
                          id="pay-on-delivery-text"
                          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          +€15 payment processing fee
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                    onClick={() =>
                      setSelectedPaymentType(PAYMENT_METHODS.PAYPAL)
                    }
                  >
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="paypal-2"
                          aria-describedby="paypal-text"
                          type="radio"
                          name="payment-method"
                          value={PAYMENT_METHODS.PAYPAL}
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          checked={
                            selectedPaymentType === PAYMENT_METHODS.PAYPAL
                          }
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="paypal-2"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Paypal account{" "}
                        </label>
                        <p
                          id="paypal-text"
                          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Connect to your account
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Delivery Methods
                </h3>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                    onClick={() =>
                      setSelectedDeliveryMethod(DELIVERY_METHOD.FAST)
                    }
                  >
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="dhl"
                          aria-describedby="dhl-text"
                          type="radio"
                          name="delivery-method"
                          value={DELIVERY_METHOD.FAST}
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          checked={
                            selectedDeliveryMethod === DELIVERY_METHOD.FAST
                          }
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="dhl"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          €15 - DHL Fast Delivery{" "}
                        </label>
                        <p
                          id="dhl-text"
                          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Get it by Tommorow
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                    onClick={() =>
                      setSelectedDeliveryMethod(DELIVERY_METHOD.FREE)
                    }
                  >
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="fedex"
                          aria-describedby="fedex-text"
                          type="radio"
                          name="delivery-method"
                          value={DELIVERY_METHOD.FREE}
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          checked={
                            selectedDeliveryMethod === DELIVERY_METHOD.FREE
                          }
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="fedex"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          Free Delivery - FedEx{" "}
                        </label>
                        <p
                          id="fedex-text"
                          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Get it by Friday, 13 Dec 2023
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                    onClick={() => {
                      setSelectedDeliveryMethod(DELIVERY_METHOD.EXPRESS);
                    }}
                  >
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="express"
                          aria-describedby="express-text"
                          type="radio"
                          name="delivery-method"
                          value={DELIVERY_METHOD.EXPRESS}
                          className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                          checked={
                            selectedDeliveryMethod == DELIVERY_METHOD.EXPRESS
                          }
                        />
                      </div>

                      <div className="ms-4 text-sm">
                        <label
                          htmlFor="express"
                          className="font-medium leading-none text-gray-900 dark:text-white"
                        >
                          {" "}
                          €49 - Express Delivery{" "}
                        </label>
                        <p
                          id="express-text"
                          className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                        >
                          Get it today
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Subtotal
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      €{subTotal}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Delivery
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      €{deliveryCharge}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      €{total}
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                  onClick={onPlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
