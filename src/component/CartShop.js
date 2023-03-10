import {useState} from "react"
import useStore from "../store/store"
import { Link } from "react-router-dom";
const CartShop = () => {
    const store = useStore();
    const products = store.cart
    const [cartOpen, setCartOpen] = useState(false)

  return (
    <div>
          <div>
            <svg onClick={() => setCartOpen(!cartOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-28 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
          <span className="absolute object-right-top -mr-6 -my-8 ml-16">
            <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4 bg-red-500 text-white">
                {store.count}
            </div>
           </span>
    
          <div className={`relative z-10 ${cartOpen ? "" : "hidden"}`} aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                          <div className="pointer-events-auto w-screen max-w-md">
                              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                      <div className="flex items-start justify-between">
                                          <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                                          <div className="ml-3 flex h-7 items-center">
                                              <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                  <span className="sr-only">Close panel</span>
                                                  <svg onClick={() => setCartOpen(!cartOpen)} className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                  </svg>
                                              </button>
                                          </div>
                                      </div>
                                      <div className="mt-8">
                                          <div className="flow-root">
                                              {store.cart.length === 0 && (
                                                  <h3>Your cart is  empty add some products</h3>
                                              )}
                                              <ul className="-my-6 divide-y divide-gray-200">
                                                  {products.map((product) => {
                                                    return (
                                                        <li key={product.id} className="flex py-6">
                                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                <img src={product.image} alt={product.title} className="h-full w-full object-cover object-center" />
                                                            </div>
                                                            <div className="ml-4 flex flex-1 flex-col">
                                                                <div>
                                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                                        <h3>
                                                                            {product.title}
                                                                        </h3>
                                                                        <p className="ml-4">{product.price}</p>
                                                                    </div>
                                                                    <p className="mt-1 text-sm text-gray-500">{product.rate}</p>
                                                                </div>
                                                                <div className="flex flex-1 items-end justify-between text-sm">
                                                                    <p className="text-gray-500">{product.category}</p>

                                                                    <div className="flex">
                                                                        <button onClick={() => store.removeProductFromCart(product)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                          <p>Total</p>
                                          <p>$ {store.total}</p>
                                      </div>
                                      <div className="mt-6 flex space-x-4 ">
                                        <Link to="/checkout">
                                          <button className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</button>
                                        </Link>
                                          <button onClick={store.clearCart} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Clear Cart</button>
                                      </div>
                                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                          <p>
                                              or
                                              <button onClick={() => setCartOpen(!cartOpen)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                  Continue Shopping
                                                  <span aria-hidden="true"> &rarr;</span>
                                              </button>
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


    </div>
  )
}

export default CartShop