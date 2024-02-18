
import ProductOverview from "./components/productOverview/ProductOverview";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
     
      

      <BrowserRouter>
        <Routes>
           <Route path="/" element={<LandingPage/>}/>
           <Route path="product" element={<ProductOverview/>} />
        </Routes>
      </BrowserRouter>
      
     
          {/* <Route path="product" element={<ProductOverview/>}></Route> */}
        
      
    </div>
  );
}

export default App;
