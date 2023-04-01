"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/legacy/image'
import Loading from './loading'
import { useRouter } from 'next/navigation'



function Mode({ onCloseClick, star, level }) {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const handlePlay = (href) => {
        setIsLoading(true)
        router.push(href)
    }
    function RenderMode({ star }) {
        if (star === 0) {
            return (
                <>
                    <button onClick={() => handlePlay(`play/${level}/easy`)} className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>easy</span>
                    </button>
                    <button type='button' className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg grayscale'>
                        <div className='flex'>
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>medium</span>
                    </button>
                    <button type='button' className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg grayscale'>
                        <div className='flex'>
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>hard</span>
                    </button>
                </>
            )
        }
        if (star === 1) {
            return (
                <>
                    <button onClick={() => handlePlay(`play/${level}/easy`)} className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>easy</span>
                    </button>
                    <button onClick={() => handlePlay(`play/${level}/medium`)} className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>medium</span>
                    </button>
                    <button type='button' className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg grayscale'>
                        <div className='flex'>
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>hard</span>
                    </button>
                </>
            )
        }
        if (star === 2 || star === 3) {
            return (
                <>
                    <button  onClick={()=> handlePlay(`play/${level}/easy`)} className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>easy</span>
                    </button>
                    <button onClick={() => handlePlay(`play/${level}/medium`)} className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>medium</span>
                    </button>
                    <button onClick={() => handlePlay(`play/${level}/hard`)} className='bg-btn-done font-cubano w-[192px] h-[48px] bg-contain bg-no-repeat bg-center text-center flex items-center justify-center gap-4 text-white outline-title text-lg'>
                        <div className='flex'>
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                            <Image alt="star" src="/assets/img/icon-star.png" width={24} height={24} />
                        </div>
                        <span className='text-xl'>hard</span>
                    </button>
                </>
            )
        }
    }
    if (isLoading) {
        return (
            <Loading />
        )
    }
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
                    <Image alt="close" src="/assets/img/icon-close.png" className="" onClick={onCloseClick} width={24} height={24} />
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