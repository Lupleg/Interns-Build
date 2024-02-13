import Amanprop from './Amanprop';
import { useState } from 'react';

function Products() {
  const [isOpen, setIsOpen] = useState(false);
  const ProductItem=()=>{
    return (
      <div className="App md:flex p-5   w-3/5 mx-auto absolute top-20 left-18 bg-white">
        {/* here */}
        {/* <button className='border-2'>Click</button> */}
       
          <div className=' md:border-r-2 ml-4 mb-10	md:w-2/6'>
            <p className='font-bold	 text-red-700  text-sm'>WHAT IS FRONT?</p>
            <div className='md:grid md:grid-rows-2'>
            <Amanprop heading="Product Overview" content="Learn how front helps build stronger customer relationship and operastion efficency"/>
            <Amanprop heading="Front in 2-minute" content="See how front keeps all responses fast,accurate,and human"/>
            </div>
           
  
            
          </div>
          <div ></div>
          <div className=' md:w-3/5 ml-9' >
            <p className='font-bold	 text-red-700 text-sm '>CAPABILITIES</p>
            <div className='md:grid md:grid-cols-2 md:gap-x-7'>
            <Amanprop heading="Collaboration" content="Work more efficiently with next-level team coordination"/>
            <Amanprop heading="Workflow automation" content="Organise, route, ans resolve communication at scale"/>
            <Amanprop heading="Analytics" content="Inform decisions with team performance, workflow, and customer insights"/>
            <Amanprop heading="Omnichannel inbox" content="Manage shared inboxes for all channels in one place"/>
            <Amanprop heading="Knowledge Base" content="Resolve customer inquiries faster and unlock deflection to scale your product"/>
            <Amanprop heading="Live chat" content="Support customers in real time on your website or app and automate flows with chatbots"/>
            <Amanprop heading="Integrations & API" content="Seamlessly connect other systems to sync customer data,context,and channels"/>
            </div>
            
  
          </div>
         
  
        
    
      </div>
    );

  }
  

  return (
    <li>
      <button
        className="text-left" 
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <span className="font-semibold py-2 px-4 rounded">Products</span>
        
        {isOpen && ProductItem()}
      </button>
    </li>
  );
}

export default Products;
