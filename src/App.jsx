import Feature from "./components/features/Feature";
import Header from "./components/features/Header";
import Navbar from "./components/Navbar";
import ProductOverview from "./components/productOverview/ProductOverview";


function App() {
  return (
    <div>
      <Navbar />
      <ProductOverview/>
      {/* <Header />
      <Feature /> */}

    </div>
  );
}

export default App;
