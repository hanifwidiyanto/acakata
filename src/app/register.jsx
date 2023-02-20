"use client"

import React from 'react'
import { motion } from "framer-motion"

function Register() {
    return (
        <>
            <motion.div
                initial={{ y: "200%" }}
                animate={{ y: "0%" }}
            >
                <div className='bg-container-daftar w-72 h-96 bg-contain bg-no-repeat bg-center'>
                    <div className='flex justify-center w-full pt-10'>
                        <h1 className='font-cubano text-3xl text-white outline-title'>daftar</h1>
                    </div>

                    <div className='px-8 pt-8'>

                        <form className='flex flex-col gap-2'>
                        <label className='outline-title text-white font-cubano text-lg'>Nama Lengkap</label>
                            <div className='flex w-full justify-between'>
                                <input type="text" className='w-full h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center font-cubano placeholder-bingu text-bingu focus:outline-bingu pl-2' placeholder='nama lengkap kamu' />
                             
                            </div>
                            <label className='outline-title mt-2 text-white font-cubano text-lg'>Tanggal Lahir</label>
                            <div className='flex w-full justify-between'>
                                <input type="text" className='w-10 h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center text-center font-cubano placeholder-bingu text-bingu focus:outline-bingu' placeholder='01' />
                                <input type="text" className='w-24 h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center text-center font-cubano placeholder-bingu text-bingu focus:outline-bingu' placeholder='Januari' />
                                <input type="text" className='w-12 h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center text-center font-cubano placeholder-bingu text-bingu focus:outline-bingu' placeholder='2000' />
                            </div>
                            <div className='flex justify-center w-full mt-3 active:scale-90 duration-100 cursor-pointer'>
                                <div className='w-fit'>
                                    <button type='button' className='bg-btn-login font-cubano w-[110px] h-[36px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title text-lg'>masuk</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className='px-4  flex justify-between w-full'>
                    <span className='font-cubano outline-title text-white text-lg '>sudah punya akun? </span>
                    <div className='active:scale-90 duration-100 cursor-pointer'>
                        <button type='button' className='bg-btn-nologin font-cubano w-[70px] h-[24px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title  text-sm'>login</button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Register