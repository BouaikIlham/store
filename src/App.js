import Products from "./component/Products";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";
import ProductDetails from "./component/ProductDetails";
import Checkout from "./component/Checkout";
import Elctronics from "./component/Elctronics";
import Jewelery from "./component/Jewelery";
import Women from "./component/Women";
import Men from "./component/Men";

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/productDetails" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/electronics" element={<Elctronics />}></Route>
        <Route path="/jewelery" element={<Jewelery />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/men" element={<Men />}></Route>

      </Routes>
    </div>
  );
}

export default App;
