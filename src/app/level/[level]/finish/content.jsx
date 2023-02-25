import React from 'react'

function Content() {
    return (
        <div className='flex w-full justify-center'>
            <div className='h-64 w-72 bg-bggameplay rounded-xl border-2 border-bingu relative overflow-hidden'>
                <div className='absolute top-0 -left-1 w-full bg-effect-cfinish-top bg-no-repeat bg-center bg-cover h-16'></div>
                <div className='absolute bottom-0 h-9 bg-biru w-full'></div>
                <div className='absolute -bottom-3 -right-1 w-full bg-effect-cfinish-bottom  bg-no-repeat bg-right bg-contain h-20'></div>
            </div>
        </div>
    )
}

export default Content