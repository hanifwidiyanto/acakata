'use client'

import React from 'react'
import Link from 'next/link'

function Footer({ level, mode }) {

    return (
        <div className='z-20 flex flex-col items-center h-48'>
            <Link href={`/play/${level}/${mode}`} className='bg-btn-footer w-32 h-16 bg-center bg-contain bg-no-repeat
        relative flex justify-center items-center active:scale-90 duration-100 cursor-pointer'>
                <span className='text-center z-10 font-cubano outline-title text-white text-md'>coba lagi</span>
            </Link>
            <Link href="/" className='flex justify-center w-fit mt-5 active:scale-90 duration-100 cursor-pointer'>
                <button type='submit' className='bg-btn-login font-cubano w-32 h-16 bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title text-lmd' >lanjutkan</button>
            </Link>
        </div>
    )
}

export default Footer