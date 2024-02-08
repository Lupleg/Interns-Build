import React from 'react'

const Feature = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 my-10 md:mx-auto'>
        <div className='flex flex-col justify-center items-center gap-5 md:text-xl'>   
              <img src="https://front.com/assets/icons/shared-inbox-2.svg"></img>
              <p className=''>Shared inbox</p>
          </div>
        
          <div className='flex flex-col justify-center items-center gap-5 md:text-xl'>   
              <img src="https://front.com/assets/icons/team-collab.svg"></img>
              <p className=''>Team collaboration</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5 md:text-xl'>   
              <img src="https://front.com/assets/icons/knowledge-base.svg"></img>
              <p className=''>Knowledge Base</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5 md:text-xl'>   
              <img src="https://front.com/assets/icons/omnichannel-2.svg"></img>
              <p className=''>Omnichannel</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5 md:text-xl'>   
              <img src="https://front.com/assets/icons/analytics.svg"></img>
              <p className=''>Insights & analytics</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5 md:text-xl'>   
              <img src="https://front.com/assets/icons/auto-workflows.svg"></img>
              <p className=''>Automated workflows</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5 md:text-xl'>   
              <img src="https://front.com/assets/icons/live-chat-2.svg"></img>
              <p className=''>Live chat</p>
          </div>

          <div className='flex flex-col justify-center items-center gap-5 md:text-xl'>   
              <img src="https://front.com/assets/icons/integrations-2.svg"></img>
              <p className=''>Integrations</p>
          </div>
    </div>
  )
}

export default Feature