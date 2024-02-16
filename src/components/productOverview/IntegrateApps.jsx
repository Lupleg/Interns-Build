import React from 'react'
import Button from '../Button'

const IntegrateApps = () => {
  return (
    <div className='w-full sm:w-2/3 lg:w-4/5  mx-auto relative grid grid-rows-3'> 

        
        <div className='flex flex-col gap-y-4 md:gap-y-8 text-center py-20 w-4/5 mx-auto'>
            <p className='font-semibold text-xl md:text-3xl'>Integrate your favorite apps</p>
            <p >Sync customer data, manage tasks, and connect every message with Front</p>
            <Button/>
        </div>

        <div className='sm:w-4/5 mx-auto'>
            <div className='absolute top-9 left-2   animate-bounce w-8 h-8 sm:w-[45px] lg:w-[70px]'>
                <img className='rounded-full shadow-xl' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fintercom.jpg&w=256&q=75" alt="" />
            </div>

            <div className='absolute top-0 left-20 sm:left-32 sm:pb-24 md:left-40 animate-bounce w-8 h-8 sm:w-[45px]  lg:w-[70px]'>
                <img className='rounded-full shadow-xl ' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fwhatsapp.jpg&w=256&q=75"  alt="whatsapp" />
            </div>

            <div className='absolute top-9 left-1/2 lg:left-20 lg:top-40 md:left-1/2 md:pb-24 animate-bounce w-8 h-8 sm:w-[45px] lg:w-[70px]'>
                <img className='rounded-full shadow-xl ' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fsalesforce.jpg&w=256&q=75"  alt="saleforces" />
            </div>

            <div className='absolute top-1 right-24 sm:right-28 lg:right-36 sm:pb-24 animate-bounce w-8 h-8 sm:w-[45px] lg:w-[70px]'>
                <img className='rounded-full shadow-xl ' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fslack.jpg&w=256&q=75"  alt="slack" />
            </div>

            <div className='absolute top-9 right-2 animate-bounce w-8 h-8 sm:w-[45px] lg:w-[70px]'>
                <img className='rounded-full shadow-xl ' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fasana.jpg&w=256&q=75"  alt="" />
            </div>

            {/* right part */}

            <div className='absolute top-64 md:pt-14 left-2 py-2 animate-bounce  w-8 h-8 sm:w-[45px] lg:w-[70px]'>
                <img className='rounded-full shadow-xl' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fjira.jpg&w=256&q=75" alt="" />
            </div>

            <div className='absolute top-64 md:pt-32 left-20 pt-12 md:left-40 sm:left-32 animate-bounce w-8 h-8 sm:w-[45px] lg:w-[70px]'>
                <img className='rounded-full shadow-xl' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fzoom.jpg&w=256&q=75"  alt="whatsapp" />
            </div>

            <div className='absolute top-64 md:pt-14 left-1/2 lg:top-36 lg:left-3/4 lg:ml-24 sm:left-1/2 py-2 animate-bounce w-8 h-8 sm:w-[45px] lg:w-[70px]'>
                <img className='rounded-full shadow-xl' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fshopify.jpg&w=256&q=75"  alt="" />
            </div>

            <div className='absolute top-64 md:pt-32 md:right-32 sm:right-28 lg:right-36 right-24 pt-12 animate-bounce w-8 h-8 sm:w-[45px] lg:w-[70px]'>
                <img className='rounded-full shadow-xl' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fgmail.jpg&w=256&q=75"  alt="whatsapp" />
            </div>

            <div className='absolute top-64 md:pt-14 right-1 py-2 animate-bounce w-8 h-8 sm:w-[45px] lg:w-[70px]'>
                <img className='rounded-full shadow-xl' src="https://front.com/_next/image?url=%2Fstaticwebassets%2Fmodules%2Fintegrationscloud%2Fzapier.jpg&w=256&q=75"  alt="" />
            </div>

        </div>

        
    </div>
  )
}

export default IntegrateApps