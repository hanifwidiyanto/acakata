'use client'

import React from 'react'
import Header from './header'
import Effect from './effect'
import Content from './content'
import Footer from './footer'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import axios from 'axios'

function page() {
   
    useEffect(() => {
        if (totalTrue / totalTask * 100 > 50) {
            const post = async () => {
                const data = {
                    uuid, level, mode
                }
                await axios.post('http://localhost:8000/finish/' + uuid, data)
            }
            post()
        }
    }, [])

    const searchParams = useSearchParams();

    const uuid = searchParams.get('uuid')
    const level = searchParams.get('level')
    const mode = searchParams.get('mode')
    const totalTask = searchParams.get('task')
    const totalTrue = searchParams.get('true')
    const time = searchParams.get('time')

    useEffect(() => {

    })
    return (
        <div className='bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between relative'>
            <Effect />
            <Header totalTrue={totalTrue} totalTask={totalTask} level={level} />
            <Content totalTrue={totalTrue} totalTask={totalTask} level={level} mode={mode} time={time} />
            <Footer level={level} mode={mode} />
        </div>
    )
}

export default page