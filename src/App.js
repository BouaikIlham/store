import Products from "./component/Products";
import { Route, Routes } from 'react-router-dom';
import ProductDetails from "./component/ProductDetails";
import Checkout from "./component/Checkout";

function App() {
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
