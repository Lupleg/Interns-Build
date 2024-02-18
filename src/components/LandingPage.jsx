import React from 'react'
import Header from './features/Header';
import Feature from './features/Feature';
import NotAnd from './features/NotAnd';
import Helpdesk from './features/Helpdesk';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Header />
        <Feature />
        <NotAnd />
        <Helpdesk />
    </div>
  )
}

export default LandingPage