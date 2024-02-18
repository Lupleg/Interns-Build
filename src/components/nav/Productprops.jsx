

import React from 'react'

const Productprops = (props) => {
  return (
    <div className='mt-4 mr-5'>
        <p className='font-bold md:text-sm text-xs'>{props.heading}</p>
        <p className='my-1 font: weight-80  md:text-sm text-[10px]'>{props.content}</p>
    </div>
  )
}

export default Productprops