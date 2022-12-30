import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
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
                      <Link to="/" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Home</Link>
                      <Link to="/electronics" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Electronics</Link>
                      <Link to="/jewelery" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">jewelery</Link>
                      <Link to="/" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Women</Link>
                      <Link to="/" className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0">Men</Link>

                  </div>
              </div>
          </div>
      </nav >  )
}

export default Navbar
