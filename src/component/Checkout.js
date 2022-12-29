import React, { useEffect } from 'react'
import useStore from '../store/store'

const Checkout = () => {
    const store = useStore()
    const product = store.cart
    useEffect(() => {
        store.updateTotalCart()
    }, [])
  return (
      <section className="h-screen py-12 sm:py-16 lg:py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center">
                  <h1 className="text-2xl font-semibold text-gray-900">Your cart</h1>
              </div>
              <div className="mx-auto mt-8 max-w-2xl md:mt-12">
                  <div className="bg-white shadow">
                      <div className="px-4 py-6 sm:px-8 sm:py-10">
                          <div className="flow-root">
                              <ul className="-my-8">
                                  {product.map((p) => {
                                      return (
                                          <li
                                              key={p.id}
                                              className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                                          >
                                              <div className="shrink-0">
                                                  <img
                                                      alt={p.title}
                                                      className="h-24 w-24 max-w-full rounded-lg object-cover"
                                                      src={p.image}
                                                  />
                                              </div>

                                              <div className="relative flex flex-1 flex-col justify-between">
                                                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                      <div className="pr-8 sm:pr-5">
                                                          <p className="text-base font-semibold text-gray-900">
                                                              {p.title}
                                                          </p>
                                                          <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                                              {p.category}
                                                          </p>
                                                      </div>

                                                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                          <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                                              $ {(p.price * p.number).toFixed(2)}
                                                          </p>
                                                          <div className="sm:order-1">
                                                              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                                                  <button 
                                                                    onClick={() => store.decrementProductNumber(p)}
                                                                    className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                                                  >
                                                                      -
                                                                  </button>
                                                                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                                                    {p.number}
                                                                  </div>

                                                                  <button
                                                                      onClick={() => store.incrementProductNumber(p)}  className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                                                  >
                                                                      +
                                                                  </button>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto text-red-400 cursor-pointer hover:text-red-700">
                                                      <svg onClick={() => store.removeProductFromCart(p)}
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          fill="none"
                                                          viewBox="0 0 24 24"
                                                          strokeWidth={1.5}
                                                          stroke="currentColor"
                                                          className="w-6 h-6"
                                                      >
                                                          <path
                                                              strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                          />
                                                      </svg>
                                                  </div>
                                              </div>
                                          </li>
                                      );
                                  })}
                              </ul>
                          </div>
                          <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />

                          <div className="mt-6 flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900">Total</p>
                              <p className="text-2xl font-semibold text-gray-900">
                                  <span className="text-xs font-normal text-gray-400">USD</span>
                                  {store.total}
                              </p>
                          </div>

                          <div className="mt-6 text-center">
                              <button className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                  Checkout
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                  >
                                      <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                                      />
                                  </svg>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>  )
}

export default Checkout