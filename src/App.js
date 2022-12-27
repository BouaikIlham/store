import Products from "./component/Products";
import { Route, Routes } from 'react-router-dom';
import Navbar from "./component/Navbar";

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
   
      </Routes>
    </div>
  );
}

export default App;
