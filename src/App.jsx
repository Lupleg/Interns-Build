import Feature from "./components/features/Feature";
import Header from "./components/features/Header";
import Navbar from "./components/Navbar";
import NotAnd from "./components/features/NotAnd";
import Helpdesk from "./components/features/Helpdesk";

import ProductOverview from "./components/productOverview/ProductOverview";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Pricing from "./components/pricing/Pricing";
import EmailForm from "./components/Contact/EmailForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="product" element={<ProductOverview />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<EmailForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
