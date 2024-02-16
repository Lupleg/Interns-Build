import Feature from "./components/features/Feature";
import Header from "./components/features/Header";
import Navbar from "./components/Navbar";
import NotAnd from "./components/features/NotAnd";
import Helpdesk from "./components/features/Helpdesk";
import ProductOverview from "./components/productOverview/ProductOverview";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <NotAnd />
      <Helpdesk />
      <ProductOverview/>
    </div>
  );
}

export default App;
