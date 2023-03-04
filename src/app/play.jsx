"use client"

import React, { useEffect, useState } from 'react'
import Level from './level'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'


export default function Play() {
    const { data: session, status } = useSession({ required: true })

    const [displayLevel, setDisplayLevel] = useState(false);
    function handleOpen() {
        setDisplayLevel(true)
    }
    function handleClose() {
        setDisplayLevel(false)
    }

    return (
        <>
            <motion.div
                initial={{ y: "80%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                className='flex w-full justify-center'>
                <div className='w-fit'>
                    <div className='bg-playbtn w-44 h-14 bg-center bg-contain bg-no-repeat relative '>
                        <div className='bg-btn-play w-44 h-14 bg-center bg-contain bg-no-repeat absolute -top-2 cursor-pointer z-10 active:scale-90 duration-100 grid place-content-center' onClick={handleOpen}>
                            <h2 className='text-4xl font-cubano outline-title text-white'>play</h2>
                        </div>
                    </div>
                </div>
            </motion.div>
            {displayLevel && (
                <Level onCloseClick={handleClose} />
            )}
        </>
    )

}
