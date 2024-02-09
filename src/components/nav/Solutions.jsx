import React, { useState } from 'react'

const Solutions = () => {

       const [isHovered, setIsHovered] = useState(false);

       const handleMouseEnter = () => {
              setIsHovered(true);
       };

       const handleMouseLeave = () => {
              setIsHovered(false);
       }


       return (
              <div className={`absolute ${isHovered ? 'block' : 'hidden'} bg-white p-4 shadow-lg rounded-md`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                     <div className='flex'>
                            <div className='w-1/2 pr-4'>
                                   <h2 className='text-lg font-semibold mb-2'>Industries</h2>
                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Technology</a></h2>
                                          <p className='text-gray-400'>Work together to deliver on unparalled customer experience</p>
                                   </div>
                                   
                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Financial Services</a></h2>
                                          <p className='text-gray-400'>Respond faster to nuanced questions -and build trust along the way</p>
                                   </div>

                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Logistics</a></h2>
                                          <p className='text-gray-400'>Balance high email volume with your fastest response rate</p>
                                   </div>

                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Manufacturing</a></h2>
                                          <p className='text-gray-400'>Fulfill complex orders with ease-and build customers for life</p>
                                   </div>

                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Professional Services</a></h2>
                                          <p className='text-gray-400'>Deliver extraordinary client experiences at scale</p>
                                   </div>
                                   
                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Travel</a></h2>
                                          <p className='text-gray-400'>Make every guest, partner and vendor feel like a VIP at scale</p>
                                   </div>
                            <div/>
                            
                            <div className='w-1/2 pl-4 border-1 border-gray-300'>
                                   <h2 className='text-lg font-semibold mb-2'>Teams</h2>
                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Customer Service And Support</a></h2>
                                          <p className='text-gray-400'>Engage effortlessly with customers across every channel</p>
                                   </div>
                                   
                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Operations</a></h2>
                                          <p className='text-gray-400'>Centralize information and impress customers with ease</p>
                                   </div>

                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Inbound Sales</a></h2>
                                          <p className='text-gray-400'>Send quotes and close deals with customers faster than ever before</p>
                                   </div>

                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Account Management</a></h2>
                                          <p className='text-gray-400'>Manage and deliver for clients without headache</p>
                                   </div>

                                   <div className='shadow-lg hover:shadow-md p-4 bg-white rounded-md'>
                                          <h2 className='text-lg font-semibold'><a href="#">Success</a></h2>
                                          <p className='text-gray-400'>Drive net retention by making every customer feel like your only one</p>
                                   </div>
                            </div>
                     </div>
              </div>
       </div>
       )
}

export default Solutions
