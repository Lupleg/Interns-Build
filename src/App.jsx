import Feature from "./components/features/Feature";
import Header from "./components/features/Header";
import Navbar from "./components/Navbar";
import NotAnd from "./components/features/NotAnd";
import Helpdesk from "./components/features/Helpdesk";

import Footer from "./components/features/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <Slider />
      <NotAnd />
      <Helpdesk />

      <Footer />

      {/* <Route path="product" element={<ProductOverview/>}></Route> */}
    </div>
  );
}

export default App;
