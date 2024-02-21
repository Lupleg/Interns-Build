import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import PricingCards from "./PricingCards"
import PricingWorkflows from "./PricingWorkflows"

const Pricing = () => {
  return (
    <div>
        <Navbar/>

        <PricingCards/>
        

        <Footer/>
    </div>
  )
}

export default Pricing