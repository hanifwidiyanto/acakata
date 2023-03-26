"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Loading from './loading'

function Footer() {
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    function handleClick(href){
        setIsLoading(true)
        router.push(href)
    }
    if(isLoading){
        return (
            <Loading />
        )
    }
    return (
        <motion.div
            initial={{ y: "200%" }}
            animate={{ y: "0%" }}
            className='flex w-full justify-between px-3 mb-2'>
            <div onClick={()=>handleClick('/leaderboard')} className='bg-btn-footer w-[142px] h-[72px] bg-center bg-contain bg-no-repeat
        relative flex justify-center items-center active:scale-90 duration-100 cursor-pointer'>
                <Image src="/assets/img/icon-papanperingkat.png" width={68} height={64} priority className="absolute -top-10 " alt="papan peringkat" />
                <div className='flex flex-col text-center mt-4 z-10'>
                    <span className='font-cubano outline-title text-white mt-0.5'>papan</span>
                    <span className='font-cubano outline-title text-white -mt-1 '>peringkat</span>
                </div>
            </div>
            <div className='bg-btn-footer w-[142px] h-[72px] bg-center bg-contain bg-no-repeat
        relative flex justify-center items-center active:scale-90 duration-100 cursor-pointer'>
                <Image src="/assets/img/icon-carabermain.png" width={66} height={66} priority className="absolute -top-10 " alt="cara bermain" />
                <div className='flex flex-col text-center mt-5 z-10'>
                    <span className='font-cubano outline-title text-white mt-0.5'>cara</span>
                    <span className='font-cubano outline-title text-white -mt-1 '>bermain</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer