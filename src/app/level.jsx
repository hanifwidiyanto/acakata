"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/legacy/image'

function Level({ onCloseClick, level }) {

    const [loadingLevel, setLoadingLevel] = useState(false)
    const [slideLevel, setSlideLevel] = useState(true)
    const slideLevelFirst = []
    const slideLevelSecond = []
    for (let i = 1; i <= 4; i++) {
        if (i <= level) {
            slideLevelFirst.push(<motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-level bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'>
                <span className='text-white outline-title text-2xl font-cubano'>{i}</span>
            </motion.div>)
        } else {
            slideLevelFirst.push(<motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'></motion.div>)
        }
    }
    for (let i = 5; i <= 8; i++) {
        if (i <= level) {
            slideLevelSecond.push(<motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-level bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'>
                <span className='text-white outline-title text-2xl font-cubano'>{i}</span>
            </motion.div>)
        } else {
            slideLevelSecond.push(<motion.div animate={{ scale: loadingLevel ? 0 : 1 }} className='bg-btn-lock bg-center bg-contain bg-no-repeat h-16 w-16 grid place-content-center'></motion.div>)
        }
    }

    const changeLevel = (bool) => {
        if (bool !== slideLevel) {
            setLoadingLevel(true)
            setTimeout(() => {
                setLoadingLevel(false)
                setSlideLevel(bool)
            }, 200);
        } else {
            navigator.vibrate(225);
        }
    }
    return (
        <>
            <div className='fixed h-screen w-screen bg-black z-40 opacity-40'>
            </div>
            <motion.div
                initial={{ opacity: 0, marginTop: '40%' }}
                animate={{ opacity: 1, marginTop: 0 }}
                exit={{ opacity: 0 }}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-container-listlevel w-[300px] h-[370px] bg-center bg-contain bg-no-repeat flex flex-col justify-between items-center py-5'>
                <div className='absolute right-8 top-8 cursor-pointer active:scale-90 duration-100'>
                    <Image src="/assets/img/icon-close.png" alt="" className="" onClick={onCloseClick} width={24} height={24} />
                </div>
                <div className='text-center pt-2'>
                    <span className='text-white font-cubano text-3xl outline-title'>level</span>
                </div>
                {slideLevel ?
                    <div
                        className='grid grid-cols-2 grid-rows-2 gap-6 -mt-4'>
                        {slideLevelFirst}
                    </div>
                    :
                    <div className='grid grid-cols-2 grid-rows-2 gap-6 -mt-4'>
                        {slideLevelSecond}
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