import React from 'react'

function Play() {
  return (
    <div className='flex w-full justify-center'>
        <div className='w-fit'>
            <div className='bg-playbtn w-44 h-14 bg-center bg-contain bg-no-repeat relative '>
                <div className='bg-btn-play w-44 h-14 bg-center bg-contain bg-no-repeat absolute -top-2 cursor-pointer z-10 active:scale-90 duration-100 grid place-content-center'>
                    <h2 className='text-4xl font-cubano outline-title text-white'>play</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Play