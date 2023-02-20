"use client"

import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

function Login() {
    return (
        <>
            <motion.div
                initial={{ y: "200%" }}
                animate={{ y: "0%" }}
            >
                <div className='bg-container-login w-full h-full bg-contain bg-no-repeat bg-center'>
                    <div className='flex justify-center w-full pt-5'>
                        <h1 className='font-cubano text-3xl text-white outline-title'>login</h1>
                    </div>

                    <div className='px-10 pt-8'>
                        <h2 className='outline-title text-white font-cubano text-lg'>Tanggal Lahir</h2>
                        <form className='mt-3'>
                            <div className='flex w-full justify-between'>
                                <input type="text" className='w-10 h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center text-center font-cubano placeholder-bingu text-bingu focus:outline-bingu' placeholder='01' />
                                <input type="text" className='w-24 h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center text-center font-cubano placeholder-bingu text-bingu focus:outline-bingu' placeholder='Januari' />
                                <input type="text" className='w-12 h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center text-center font-cubano placeholder-bingu text-bingu focus:outline-bingu' placeholder='2000' />
                            </div>
                            <div className='flex justify-center w-full mt-5 active:scale-90 duration-100 cursor-pointer'>
                                <div className='w-fit'>
                                    <button type='button' className='bg-btn-login font-cubano w-[110px] h-[36px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title text-lg'>masuk</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className='px-6 pt-2 flex justify-between w-full'>
                    <span className='font-cubano outline-title text-white text-lg '>belum punya akun? </span>
                    <div className='active:scale-90 duration-100 cursor-pointer'>
                           
                        <Link href="./daftar" className='bg-btn-nologin font-cubano w-[70px] h-[24px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title  text-sm'>daftar</Link>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Login