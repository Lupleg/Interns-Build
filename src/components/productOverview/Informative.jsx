import React from 'react'
import Button from '../Button'

const Informative = ({text, width}) => {
  return (
    <div className={`w-11/12 sm:w-3/6 mx-auto text-center mt-10`}>
        <p className='px-6 font-bold text-2xl sm:text-4xl lg:text-5xl'>{text}</p>
        <div className='mt-6'>
            <Button text="Get Started" width="56"/>
        </div>
        
    </div>
  )
}

export default Informative