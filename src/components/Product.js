import React from 'react'

const Product = (props) => {
  return (
    <div className='mt-6 mr-5'>
        <p className='font-bold'>{props.heading}</p>
        <p className='my-1'>{props.content}</p>
    </div>
  )
}

export default Product