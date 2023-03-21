"use client"

import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'

function Header({ level, totalTrue, totalTask }) {
    const [isLolos, setIsLolos] = useState(false)

    useEffect(() => {
        if (totalTrue / totalTask * 100 > 50) {
            setIsLolos(true)
        }
    }, [])

    function CheckLolos() {
        if (isLolos) {
            return (
                <div className='flex w-full justify-center'>
                    <span className='text-white outline-title text-center w-8/12 text-xl font-cubano'>Yey, kamu berhasil!<br />kamu dapat melanjutkan ke level selanjutnya</span>
                </div>
            )
        } else {
            <div className='flex w-full justify-center'>
                <span className='text-white outline-title text-center w-8/12 text-xl font-cubano'>Yah, kamu gagal!<br />kamu dapat melanjutkan ke level selanjutnya</span>
            </div>
        }
    }
    return (
        <div className="flex flex-col gap-6">
            <div className="flex w-full justify-center gap-2 px-4 pt-6">
                <Image src="/assets/img/icon-bigstars.png" alt="big stars" width={72} height={56} priority />
                <div className='-skew-y-2'>
                    <h2 className='text-4xl italic font-cubano text-white outline-title'> HASIL BELAJAR</h2>
                </div>
            </div>
            <div className='flex w-full justify-center italic'>
                <h4 className='text-kuning font-cubano outline-title text-2xl'>Level {level} Selesai</h4>
            </div>
            <CheckLolos />
        </div>
    )
}

export default Header