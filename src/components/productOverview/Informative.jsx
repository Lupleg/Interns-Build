import React from 'react'
import Button from '../Button'

const Informative = ({text, width}) => {
  return (
    <div className={`w-11/12 sm:w-4/5 mx-auto text-center my-10`}>
        <p className='px-6 font-bold text-2xl sm:text-4xl lg:text-6xl'>{text}</p>
        <div className='mt-6'>
            <Button text="Get Started" width="56"/>
        </div>
        
    </div>
  )
}

export default Informative