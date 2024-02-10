import React from 'react'

const Product = (props) => {
  return (
    <div className='mt-10 mr-8'>
        <p className='font-bold'>{props.heading}</p>
        <p className='my-1'>{props.content}</p>
    </div>
  )
}

export default Product