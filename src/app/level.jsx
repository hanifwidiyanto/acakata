"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/legacy/image'

function Level({ onCloseClick }) {
    const [display, setDisplay] = useState(false)
    const [level, setLevel] = useState(true)
    const [loadingLevel, setLoadingLevel] = useState(false)

    const changeLevel = (bool) => {
        if (bool !== level) {
            setLoadingLevel(true)
            setTimeout(() => {
                setLoadingLevel(false)
                setLevel(bool)
            }, 200);
        } else {
            console.log('Oktober')
            navigator.vibrate(500);
        }
    }
    return (
        <>
            <div className='fixed h-screen w-screen bg-black z-40 opacity-40'>
            </div>
            <motion.div
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-container-listlevel w-[300px] h-[370px] bg-center bg-contain bg-no-repeat flex flex-col justify-between items-center py-5'>
                <div className='absolute right-8 top-8 cursor-pointer active:scale-90 duration-100'>
                    <Image src="/assets/img/icon-close.png" alt="" className="" onClick={onCloseClick} width={24} height={24} />
                </div>
                <div className='text-center pt-2'>
                    <span className='text-white font-cubano text-3xl outline-title'>level</span>
                </div>
                {level ?
                    <div
                        className='grid grid-cols-2 grid-rows-2 gap-6 -mt-4'>
                        <motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-level bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'>
                            <span className='text-white outline-title text-2xl font-cubano'>1</span>
                        </motion.div>
                        <motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'></motion.div>
                        <motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'></motion.div>
                        <motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'></motion.div>
                    </div>
                    :
                    <div className='grid grid-cols-2 grid-rows-2 gap-6 -mt-4'>
                        <motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'></motion.div>
                        <motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'></motion.div>
                        <motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'></motion.div>
                        <motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'></motion.div>
                    </div>
                }
                <div className='flex relative -top-6 gap-4'>
                    <div className='bg-btn-left bg-center bg-contain bg-no-repeat h-12 w-12 grid place-content-center cursor-pointer active:scale-90 duration-100' onClick={() => changeLevel(true)}></div>
                    <div className='bg-btn-right bg-center bg-contain bg-no-repeat h-12 w-12 grid place-content-center cursor-pointer active:scale-90 duration-100' onClick={() => changeLevel(false)}></div>
                </div>
            </motion.div>
        </>
    )
}

export default Level