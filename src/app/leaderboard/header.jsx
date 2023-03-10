"use client"

import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Header() {
    return (
        <motion.div
        initial={{ y:"-100%" }}
        animate={{ y:"0%"}}
        className="flex w-full justify-center mt-4">
            <div className="bg-level w-[285px] h-[64px] bg-no-repeat bg-center bg-contain flex justify-between items-center px-8 relative">
                <Link href="../">
                    <Image src="/assets/img/icon-back.png" alt="icon back" className='absolute left-0 cursor-pointer active:scale-90 duration-100' width={20} height={32} />
                </Link>
                <h2 className='font-cubano text-2xl outline-title text-white text-center relative right-10'>PAPAN<br />PERINGKAT</h2>
            </div>
        </motion.div>
    )
}

export default Header