import React from 'react'
import IntegrateApps from './IntegrateApps'
import Footer from '../Footer'
import Informative from './Informative'

const productOverview = () => {
  return (
    <div className=''>
        <IntegrateApps/>
        <Informative text="In comes Front. Wow every customer with fast, accurate, and human responses."/>
        <Informative text="Streamline your customer communication with Front"/>
        <Footer/>
    </div>
  )
}

export default productOverview