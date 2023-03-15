"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/legacy/image'
import Link from 'next/link'



function Mode({ onCloseClick, star }) {
    function RenderMode({ star }) {
        if (star === 0) {
            return (
                <>
                    <Link href="/play/1/easy" className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>easy</span>
                    </Link>
                    <button type='button' className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg grayscale'>
                        <div className='flex'>
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>medium</span>
                    </button>
                    <button type='buttin' className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg grayscale'>
                        <div className='flex'>
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>hard</span>
                    </button>
                </>
            )
        }
        if (star === 1) {
            return (
                <>
                    <Link href="/play/1/easy" className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>easy</span>
                    </Link>
                    <Link href="/play/1/medium" className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>medium</span>
                    </Link>
                    <button type='buttin' className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg grayscale'>
                        <div className='flex'>
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>hard</span>
                    </button>
                </>
            )
        }
        if (star === 2 || star === 3) {
            return (
                <>
                    <Link href="/play/1/easy" className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>easy</span>
                    </Link>
                    <Link href="/play/1/medium" className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>medium</span>
                    </Link>
                    <Link href="/play/1/hard" className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>hard</span>
                    </Link>
                </>
            )
        }
    }
    console.log(star)
    return (
        <>
            <div className='fixed h-screen w-screen bg-black z-40 opacity-40'>
            </div>
            <motion.div
                initial={{ opacity: 0, marginTop: '40%' }}
                animate={{ opacity: 1, marginTop: 0 }}
                exit={{ opacity: 0 }}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-container-listlevel w-[300px] h-[370px] bg-center bg-contain bg-no-repeat flex flex-col justify-between items-center pt-5 pb-16'>
                <div className='absolute right-8 top-8 cursor-pointer active:scale-90 duration-100'>
                    <Image src="/assets/img/icon-close.png" alt="" className="" onClick={onCloseClick} width={24} height={24} />
                </div>
                <div className='text-center pt-2 pb-4'>
                    <span className='text-white font-cubano text-3xl outline-title'>PILIH MODE</span>
                </div>
                <RenderMode star={star} />
            </motion.div>
        </>
    )
}

export default Mode