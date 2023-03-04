"use client"

import React, { useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { useSession, signIn, getProviders } from "next-auth/react"
import Image from 'next/legacy/image'


function Auth({providers})  {



    // const onSubmit = async (values, actions) => {
    //     // push db
    //     console.log('submitted')
    //     console.log(actions)
    // }



    // const SchemaForm = yup.object().shape({
    //     dd: yup.string().required('Tanggal Lahir Kamu Harus Diisi Ya!'),
    //     month: yup.string().required('Bulan Lahir Kamu Harus Diisi Ya!'),
    //     year: yup.string().required('Tahun Lahir Kamu Harus Diisi Ya!'),
    // })

    // const { values, handleBlur, handleChange, handleSubmit, errors, isSubmitting, touched } = useFormik({
    //     initialValues: {
    //         dd: '',
    //         month: '',
    //         year: '',
    //     },
    //     validationSchema: SchemaForm,
    //     onSubmit

    // })
    return (
        <>
            <audio autoPlay>
                <source src="/assets/sound/sfx-jump.mp3" type="audio/mpeg" />
            </audio>
            {/* {errors && Object.keys(errors).length > 0 && (
                <div className='absolute top-20 flex justify-center sm:w-fit w-full'>
                    <div>
                        {Object.values(errors).map((error, index) => (

                            <motion.div
                                initial={{ y: "30%", opacity: "0" }}
                                animate={{ y: "0%", opacity: "1" }}
                                transition={{ delay: index * 1.2, duration: .2 }}

                                key={index}
                                className='bg-errorsign p-4 bg-center bg-contain bg-no-repeat grid place-content-center font-cubano text-sm text-white outline-title'>{error}</motion.div>
                        ))}

                    </div>
                </div>
            )} */}
            <motion.div
                initial={{ y: "250%" }}
                animate={{ y: "0%" }}
            >
               <div className='bg-container-login w-72 h-64 bg-contain bg-no-repeat bg-center'>
                    <div className='flex justify-center w-full pt-5'>
                        <h1 className='font-cubano text-3xl text-white outline-title'>masuk</h1>
                    </div>

                  <div className='w-full flex flex-col pt-12 gap-6 h-full items-center'>
                    <h4 className='font-cubano text-white outline-title text-lg'>masuk dengan google</h4>
                    {/* <button onClick={() => signIn('google')}>Sign in</button> */}

                    <button className='bg-white border-2 rounded-md border-kuning w-24 items-center justify-center h-8 flex gap-2'  onClick={() => signIn('google')}>
                        <Image src="/assets/img/logo-google.png" width={12} height={12} priority />
                        <span className='font-medium'>
                            Login
                        </span>
                    </button>
                  </div>
                </div>
                {/* <div className='px-3 pt-2 flex justify-between w-full'>
                    <span className='font-cubano outline-title text-white text-lg '>belum punya akun? </span>
                    <div className='active:scale-90 duration-100 cursor-pointer' >
                        <Link href="./daftar" className='bg-btn-nologin font-cubano w-[70px] h-[24px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title  text-sm'>daftar</Link>
                    </div>
                </div> */}
            </motion.div>
        </>
    )
}

export default Auth

