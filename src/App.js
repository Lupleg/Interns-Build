

import Product from './components/Product';

function App() {
  return (
    <div className="App md:flex p-10 ">
      {/* here */}
      {/* <button className='border-2'>Click</button> */}
     
        <div className=' md:border-r-2 ml-9 mb-10	md:w-2/6'>
          <p className='font-bold	 text-red-700  text-sm'>WHAT IS FRONT?</p>
          <div className='md:grid md:grid-rows-2'>
          <Product heading="Product Overview" content="Learn how front helps build stronger customer relationship and operastion efficency"/>
          <Product heading="Front in 2-minute" content="See how front keeps all responses fast,accurate,and human"/>
          </div>
         

          
        </div>
        <div ></div>
        <div className=' md:w-6/12 ml-9' >
          <p className='font-bold	 text-red-700 text-sm '>CAPABILITIES</p>
          <div className='md:grid md:grid-cols-2'>
          <Product heading="Collaboration" content="Work more efficiently with next-level team coordination"/>
          <Product heading="Workflow automation" content="Organise, route, ans resolve communication at scale"/>
          <Product heading="Analytics" content="Inform decisions with team performance, workflow, and customer insights"/>
          <Product heading="Omnichannel inbox" content="Manage shared inboxes for all channels in one place"/>
          <Product heading="Knowledge Base" content="Resolve customer inquiries faster and unlock deflection to scale your product"/>
          <Product heading="Live chat" content="Support customers in real time on your website or app and automate flows with chatbots"/>
          <Product heading="Integrations & API" content="Seamlessly connect other systems to sync customer data,context,and channels"/>
          </div>
          

        </div>
       

      
  
    </div>
  );
}

export default App;
