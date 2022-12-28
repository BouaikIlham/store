import useStore from "../store/store";
import { useEffect } from "react";
import CartShop from "./CartShop";
import { Link } from "react-router-dom";

const Products = () => {
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }
  const store = useStore()
  let products = store.products
  useEffect(() => {
    store.fetchProducts()
  }, [])
  return (
    <div className="mx-auto container py-8">
      <CartShop />
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        {products.map((product) => {
          return (
            <div key={product.id}  className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
              <Link to="productDetails">
                <div>
                  <img src={product.image} alt={product.title} className="focus:outline-none w-full h-44" />
                </div>
              </Link>

              <div className="bg-white">
                <div className="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p  className="focus:outline-none text-xs text-yellow-700">Featured</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center">
                    <h2  className="focus:outline-none text-lg font-semibold">{product.title}</h2>
                    <p  className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p className="focus:outline-none text-xs text-gray-600 mt-2">{truncateString(product.description, 40)}</p>
                  <div className="flex mt-4">
                    <div>
                      <p className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">{product.category}</p>
                    </div>
                    <div className="pl-2">
                      <p  className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">${product.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <button onClick={() =>store.addToCart(product)} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products