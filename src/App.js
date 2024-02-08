
import Button from "./components/Button";
import Feature from "./components/Feature";


function App() {
  return (
    <div>
      <div className='border-2 py-10 font-bold  flex flex-col justify-center items-center text-center'>

          <p className="md:text-4xl text-3xl ">A lot goes into keeping customers happy.</p>
          <p className="md:text-4xl text-3xl">Keep it all in Front.</p>
      
          <Feature/>

          <Button/>
          
      </div>
    </div>
  );
}

export default App;
