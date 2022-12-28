import Products from "./component/Products";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import ProductDetails from "./component/ProductDetails";

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
