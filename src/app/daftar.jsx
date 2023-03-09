"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { useRouter } from 'next/navigation'


function Daftar({ onCloseClick }) {
    const { data: session, status } = useSession()
    const initValue = {
        "name": "",
        "email": "",
        "avatar": "",
        "usia": 0,
        "timeSpend": 0,
        "level": 1
    }
    if (status === 'authenticated') {
        initValue.name = session.user.name
        initValue.email = session.user.email
        initValue.avatar = session.user.image
    }
    const initState = { values: initValue }
    const [formData, setFormData] = useState(initState)

    const { values } = formData

    const handleChange = (e) => {
        const usia = e.target.value
        setFormData(prev => ({
            ...prev,
            values: {
                ...prev.values,
                usia: usia
            }
        }))
    }


   
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            "name": formData.values.name,
            "email": formData.values.email,
            "avatar": formData.values.avatar,
            "usia": formData.values.usia,
            "timeSpend": formData.values.timeSpend,
            "level": formData.values.level
        }

        await axios.post('http://localhost:8000/user/', data)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
            onCloseClick
    }
    console.log(values)
    return (
        <>
            <div className='fixed h-screen w-screen bg-black z-40 opacity-40'>
            </div>
            <motion.div
                initial={{ opacity: 0, marginTop: '40%' }}
                animate={{ opacity: 1, marginTop: 0 }}
                exit={{ opacity: 0 }}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-container-login w-72 h-64 bg-center bg-contain bg-no-repeat flex flex-col items-center py-4'>
                <div className='text-center pt-2'>
                    <span className='text-white font-cubano text-2xl outline-title'>Berapa usiamu?</span>
                </div>
                <div className="flex flex-col-gap-6 justify-center w-full mt-8 text-center">
                    <h6 className='text-white font-cubano text-md outline-title'>sebelum memulai permainan daftarkan usiamu dulu ya!</h6>
                </div>
                <form autoComplete='off' onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
                    <input type="number" placeholder='0' id="usia" onChange={handleChange} required value={values.usia} className="border-2 border-biru w-16 appearance-none rounded-md text-center" />
                    <button type='submit' className='bg-btn-login font-cubano w-[80px] h-[28px] bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title text-md mt-3' onClick={onCloseClick}>submit</button>
                </form>

            </motion.div>
        </>
    )
}

export default Daftar