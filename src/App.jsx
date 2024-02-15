import Feature from "./components/features/Feature";
import Header from "./components/features/Header";
import Navbar from "./components/Navbar";
import NotAnd from "./components/features/NotAnd";
import Helpdesk from "./components/features/Helpdesk";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <NotAnd />
      <Helpdesk />
    </div>
  );
}

export default App;
