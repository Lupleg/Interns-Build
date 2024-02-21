import React from 'react'

const PricingCards = () => {
  return (
    <div>
        <div className='md:4/6 lg:w-2/3 xl:w-6/12 mx-auto text-center'>
            <p className=' font-bold text-3xl md:text-4xl lg:text-5xl p-4'>Choose your plan to deliver exceptional service</p>
        </div>

        <div className='flex gap-x-6 md:gap-x-10 justify-center align-center mt-10'>
            <button className='border-2 text-semibold text-xs border-black bg-black text-white rounded-t-lg p-2 sm:p-3'>FOR MOST BUSINESSES</button>
            <button className='border-2 text-semibold text-xs rounded-t-lg p-2 sm:p-3'>FOR SMALLER TEAMS</button>
        </div>
    </div>
  )
}

export default PricingCards