import React from 'react'
import Image from 'next/image'

function Game() {
    return (
        <div className="flex w-full justify-center flex-col items-center">
            <div className="bg-container-gameplay w-[321px] h-[84px] bg-no-repeat bg-center bg-contain flex justify-center items-center relative text-center flex-col">
                <div className='font-cubano text-2xl outline-title text-white flex flex-col gap-0 relative -top-2'>
                    <span >Video</span>
                    <span className='-mt-1'>Pembelajaran</span>
                </div>
            </div>
            <div className='w-72 h-48 bg-bggameplay border-2 border-blue-900 rounded-lg mt-8 shadow-lg'></div>
            <div className='flex justify-center w-full mt-12 active:scale-90 duration-100 cursor-pointer'>
                <div className='w-fit'>
                    <button type='submit' className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <Image src="/assets/img/icon-done.png" alt="icondone" width={24} height={24} />
                        <span className='text-xl'>selesai</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Game