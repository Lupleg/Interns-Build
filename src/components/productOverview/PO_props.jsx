import React from 'react'

const PO_props = (props) => {
  return (
    <div className='py-5 shadow-lg rounded-lg'>
       <div className='flex justify-center items-center '>
       <img src={props.photo}/>
       </div>
       
        <p>{props.content}</p>
    </div>
  )
}

export default PO_props