import React from 'react'

const EmailForm = () => {
  return (
    <div className='lg:ml-52 lg:mr-52 py-8 mt-8 md:ml-40 md:mr-44 ml-20 mr-24'>
        <form className='w-5/6' >
          <div className='text-2xl font-medium pb-4'>Contact us</div>
          <fieldset className='space-y-4 font-normal'>
            <div className='flex flex-col'>
              <label htmlFor="name" className='mb-1'>Name <span className='text-red-700'>*</span></label>
              <input type="text" className='border border-gray-300 border-2 rounded p-1 mb-4'/>
            </div>
          </fieldset>

          <fieldset className='space-y-4'>
            <div className='flex flex-col'>
              <label htmlFor="email" className='mb-1'>Email <span className='text-red-700'>*</span></label>
              <input type="text" className='border border-gray-300 border-2 rounded p-1 mb-4'/>
            </div>
          </fieldset>
          <fieldset className='space-y-4'>
            <div className='flex flex-col'>
              <label htmlFor="subject" className='mb-1'>Subject <span className='text-red-700'>*</span></label>
              <input type="text" className='border border-gray-300 border-2 rounded p-1 mb-4'/>
            </div>
          </fieldset>
          <fieldset className='space-y-4'>
            <div className='flex flex-col'>
              <label htmlFor="help" className='mb-1'>How can we help? <span className='text-red-700'>*</span></label>
              <textarea className='border border-gray-300 border-2 rounded p-1 mb-4 h-52'/>
            </div>
          </fieldset>
          <fieldset>
            <div className='mt-2 text-xs'>
              <input type="file" />
            </div>
          </fieldset>
          <div className='text-center mt-20'>
            <button className='p-1.5 bg-gray-200 rounded-3xl w-20 h-9 text-white-200'>Submit</button>
          </div>
        </form>
    </div>
  )
}

export default EmailForm