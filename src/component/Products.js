import useStore from "../store/store";
import { useEffect, useState } from "react";
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
  const listOfCategories = [...new Set(products.map((product) => product.category))]
  const [data, setData] = useState(products)
  const filterProducts = (category) => {
    const result = products.filter((p) => {
      return p.category === category
    })
    setData(result)
  }
  const loading = store.isLoading
  useEffect(() => {
    store.fetchProducts()
  }, [])
  return (
    <div className="mx-auto container py-8">
      <nav className="bg-white shadow" >
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex justify-between items-center">
            <div>
              <Link to="/" className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">Brand</Link>
            </div>

            <div className="flex md:hidden">
              <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="md:flex items-center">
            <div className="flex flex-col md:flex-row md:mx-6">
              {listOfCategories.map((value, id) => {
                return (
                  <div key={id}>
                    <button onClick={() => filterProducts(value)} className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">{value}</button>
                  </div>
                )
              })}
              <button
                onClick={() => setData(products)}
                className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
              >
                All
              </button>
            </div>
          </div>
        </div>
      </nav >
      <CartShop />
      {loading && (
        <div
          role="status"
          className="flex justify-center absolute inset-0 items-center z-20"
        >
          <svg
            aria-hidden="true"
            className="mr-2 w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        {data.map((product) => {
          return (
            <div key={product.id}  className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
              <Link onClick={() => store.ProductDetails(product)} to="productDetails">
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