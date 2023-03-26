'use client'

import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useState } from 'react'
import Loading from '../loading'
import { useRouter } from 'next/navigation'

function Footer({ level, mode, stars, uuid, totalTask, totalTrue }) {
    const [loading, setLoading] = useState(false)
    const [isPost, setIsPost] = useState(true)
    const post = async () => {
        const data = {
            level, stars
        }
        console.log(data)
        if (totalTrue / totalTask * 100 > 50 && isPost) {
            try {
                const res = await axios.post('http://localhost:8000/finish/' + uuid, data);
                console.log(res);

            } catch (err) {
                console.log(err);
            }
        }
    }
    const router = useRouter()
    const handleClick = (href) => {
        post()
        setLoading(true)
        setIsPost(false)
        router.push(href)
    }
    if (loading) {
        return (
            <Loading />
        )
    } else {
        return (
            <div className='z-20 flex flex-col items-center h-48'>
                <div onClick={()=> handleClick(`/play/${level}/${mode}`)} className='bg-btn-footer w-32 h-16 bg-center bg-contain bg-no-repeat
        relative flex justify-center items-center active:scale-90 duration-100 cursor-pointer'>
                    <span className='text-center z-10 font-cubano outline-title text-white text-md'>coba lagi</span>
                </div>
                <div onClick={()=> handleClick(`/`)} className='flex justify-center w-fit mt-5 active:scale-90 duration-100 cursor-pointer'>
                    <button type='submit' className='bg-btn-login font-cubano w-32 h-16 bg-contain bg-no-repeat bg-center text-center grid place-content-center text-white outline-title text-lmd' >lanjutkan</button>
                </div>
            </div>
        )
    }
}

export default Footer