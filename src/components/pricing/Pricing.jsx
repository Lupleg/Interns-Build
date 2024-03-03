import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import PricingCards from "./PricingCards"
import PricingWorkflows from "./PricingWorkflows"

const Pricing = () => {


 


  return (
    <div>
        <Navbar/>

        <PricingCards/>
        <PricingWorkflows/>
        

        <Footer/>
    </div>
  )
}

export default Pricing