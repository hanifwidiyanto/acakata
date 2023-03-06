"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'


function Setting({onCloseClick}) {
    


    return (
        <>
            <div className={displayForm ? 'fixed h-screen w-screen bg-black z-40 opacity-40' : 'fixed h-screen w-screen bg-black z-40 opacity-40 hidden'}>
            </div>
            <motion.div
                initial={{ opacity: 0, marginTop: '40%' }}
                animate={{ opacity: 1, marginTop: 0 }}
                exit={{ opacity: 0 }}
                className={displayForm ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-container-login w-72 h-64 bg-center bg-contain bg-no-repeat flex flex-col items-center py-4' : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-container-login w-72 h-64 bg-center bg-contain bg-no-repeat hidden flex-col items-center py-4'}>
                <div className='text-center pt-2'>
                    <span className='text-white font-cubano text-2xl outline-title'>Berapa usiamu?</span>
                </div>
                <div className="flex flex-col-gap-6 justify-center w-full mt-8 text-center">
                    <h6 className='text-white font-cubano text-md outline-title'>sebelum memulai permainan daftarkan usiamu dulu ya!</h6>
                </div>
                <form autoComplete='off' onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
                    <input type="number" placeholder='0' id="usia" onChange={handleChange} required value={values.usia} className="border-2 border-biru w-16 appearance-none rounded-md text-center" />
                    <button type='submit' className='bg-btn-login font-cubano w-[80px] h-[28px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title text-md mt-3' onClick={() => handleCloseClick()}>submit</button>
                </form>

            </motion.div>
        </>
    )
}

export default Setting