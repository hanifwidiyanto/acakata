import React from 'react'

function Header({level}) {
    return (
        <div className="flex w-full justify-center mt-4">
            <div className="bg-level w-[285px] h-[64px] bg-no-repeat bg-center bg-contain flex justify-center items-center pl-12 relative">
                <img src="/assets/img/icon-back.png" alt="icon back" className='absolute left-6 w-6 cursor-pointer active:scale-90 duration-100' />
                <h2 className='font-cubano text-3xl outline-title text-white'>level {level}</h2>
            </div>
        </div>
    )
}

export default Header