"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <motion.div 
    initial={{ y:"200%" }}
    animate={{ y:"0%"}}
    className='flex w-full justify-between px-3 mb-2'>
        <Link href="/leaderboard" className='bg-btn-footer w-[142px] h-[72px] bg-center bg-contain bg-no-repeat
        relative flex justify-center items-center active:scale-90 duration-100 cursor-pointer'>
            <Image src="/assets/img/icon-papanperingkat.png" width={68} height={64} priority className="absolute -top-10 w-auto h-auto" alt="papan peringkat" />
            <div className='flex flex-col text-center mt-4 z-10'>
                <span className='font-cubano outline-title text-white mt-0.5'>papan</span>
                <span className='font-cubano outline-title text-white -mt-1 '>peringkat</span>
            </div>
        </Link>
        <div className='bg-btn-footer w-[142px] h-[72px] bg-center bg-contain bg-no-repeat
        relative flex justify-center items-center active:scale-90 duration-100 cursor-pointer'>
            <Image src="/assets/img/icon-carabermain.png" width={66} height={66} priority className="absolute -top-10 w-auto h-auto" alt="cara bermain" />
            <div className='flex flex-col text-center mt-5 z-10'>
                <span className='font-cubano outline-title text-white mt-0.5'>cara</span>
                <span className='font-cubano outline-title text-white -mt-1 '>bermain</span>
            </div>
        </div>
    </motion.div>
  )
}

export default Footer