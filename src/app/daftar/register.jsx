"use client"

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import Loading from '../loading'
import { useRouter } from 'next/navigation'
import validateEmail from '@/utils/validateEmail'


function Register({ name, email, avatar }) {

    const router = useRouter()
    const data = validateEmail(email)

    useEffect(() => {
        if (data && typeof data.msg === 'object' && Object.keys(data.msg).length === 0) {
            const a = 'a'
        } else {
            router.push('/')
        }
    }, [data])
    const [loading, setLoading] = useState(false)
    const onSubmit = async (values, actions) => {
        await axios.post('https://cdn.acakata.app/user/', values)
            .then(res => {
                console.log(res)
                setLoading(true)
                router.push('/')
            }).catch(err => {
                console.log(err)
            })

    }

    const SchemaForm = yup.object().shape({
        // name: yup.string().required('Nama Kamu Harus Diisi Ya!'),
        usia: yup.number().required('Usia kamu harus diisi ya')
    })

    const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            name: name,
            email: email,
            avatar: avatar,
            usia: '',
            timeSpend: 0,
            level: 1,
            totalStars: 0
        },
        validationSchema: SchemaForm,
        onSubmit
    })
    if (loading) {
        return <Loading />
    } else {
        return (
            <>
                <audio autoPlay>
                    <source src="/assets/sound/sfx-jump.mp3" type="audio/mpeg" />
                </audio>
                {errors && Object.keys(errors).length > 0 && (
                    <div className='absolute top-10 flex justify-center sm:w-fit w-full'>
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
                )}
                <motion.div
                    initial={{ y: "250%" }}
                    animate={{ y: "0%" }}
                >
                    <div className='bg-container-daftar w-72 h-96 bg-contain bg-no-repeat bg-center'>
                        <div className='flex justify-center w-full pt-10'>
                            <h1 className='font-cubano text-3xl text-white outline-title'>daftar</h1>
                        </div>

                        <div className='px-8 pt-8'>

                            <form autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-2'>
                                <label className='outline-title text-white font-cubano text-lg'>Nama Lengkap</label>
                                <div className='flex w-full justify-between'>
                                    <input type="text" className='w-full h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center font-cubano placeholder-bingu text-bingu focus:outline-bingu pl-2' placeholder='nama lengkap kamu' name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />

                                </div>
                                <label className='outline-title text-white font-cubano text-lg'>Usia</label>
                                <div className='flex w-full justify-between'>
                                    <input type="text" className='w-full h-8 border-2 border-bingu rounded-md bg-bgform grid place-content-center font-cubano placeholder-bingu text-bingu focus:outline-bingu pl-2' placeholder='usia' name="usia" onChange={handleChange} onBlur={handleBlur} />

                                </div>

                                <div className='flex justify-center w-full mt-3 active:scale-90 duration-100 cursor-pointer'>
                                    <div className='w-fit'>
                                        <button type='submit' className='bg-btn-login font-cubano w-[110px] h-[36px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title text-lg'>daftar</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className='px-4 -mt-3 flex justify-between w-full'>
                        <span className='font-cubano outline-title text-white text-lg '>sudah punya akun?</span>
                        <div className='active:scale-90 duration-100 cursor-pointer'>
                            <Link href="./masuk" className='bg-btn-nologin font-cubano w-[70px] h-[24px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title  text-sm'>masuk </Link>
                        </div>
                    </div>
                </motion.div>
            </>
        )
    }
}

export default Register