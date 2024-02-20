import React from 'react'
import IntegrateApps from './IntegrateApps'
import Footer from '../Footer'
import Informative from './Informative'
import CardCrousel from './CardCrousel'

const productOverview = () => {
  return (
    <div className=''>
        <IntegrateApps/>
        <Informative text="In comes Front. Wow every customer with fast, accurate, and human responses."/>
        <CardCrousel/>
        <Informative text="Streamline your customer communication with Front"/>
        
        <Footer/>
    </div>
  )
}

export default productOverview