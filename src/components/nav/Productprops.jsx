

import React from 'react'

const Productprops = (props) => {
  return (
    <div className='mt-4 mr-5'>
        <p className='font-bold md:text-sm text-sm'>{props.heading}</p>
        <p className='my-1    text-gray-600 text-sm'>{props.content}</p>
    </div>
  )
}

export default Productprops