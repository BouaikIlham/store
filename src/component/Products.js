import useStore from "../store/store";
import { useEffect } from "react";

const Products = () => {
  const store = useStore()
  let products = store.products.slice(0,60)
  useEffect(() => {
    store.fetchProducts()
  }, [])
  return (
    <div className="mx-auto container py-8">
      <div class="flex flex-wrap items-center lg:justify-between justify-center">
        {products.map((product) => {
          return (
            <div key={product.id} tabindex="0" class="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
              <div>
                <img src={product.images} alt={product.title}tabindex="0" class="focus:outline-none w-full h-44" />
              </div>
              <div class="bg-white">
                <div class="flex items-center justify-between px-4 pt-4">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" class="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div class="bg-yellow-200 py-1.5 px-6 rounded-full">
                    <p tabindex="0" class="focus:outline-none text-xs text-yellow-700">Featured</p>
                  </div>
                </div>
                <div class="p-4">
                  <div class="flex items-center">
                    <h2 tabindex="0" class="focus:outline-none text-lg font-semibold">{product.title}</h2>
                    <p tabindex="0" class="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                  </div>
                  <p tabindex="0" class="focus:outline-none text-xs text-gray-600 mt-2">{product.description}</p>
                  <div class="flex mt-4">
                    <div>
                      <p tabindex="0" class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">{product.category.name}</p>
                    </div>
                    <div class="pl-2">
                      <p tabindex="0" class="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">${product.price}</p>
                    </div>
                  </div>
                  <div class="flex items-center justify-between py-4">
                    <button tabindex="0" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2">Add to Cart</button>
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