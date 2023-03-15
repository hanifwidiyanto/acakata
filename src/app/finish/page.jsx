'use client'

import React from 'react'
import Header from './header'
import Effect from './effect'
import Content from './content'
import Footer from './footer'
import { useSearchParams } from 'next/navigation'

function page() {
    const searchParams = useSearchParams();

    const uuid = searchParams.get('uuid')
    const level = searchParams.get('level')
    const mode = searchParams.get('mode')
    const totalTask = searchParams.get('task')
    const totalTrue = searchParams.get('true')
    return (
        <div className='bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between relative'>
            <Effect />
            <Header totalTrue={totalTrue} totalTask={totalTask} level={level} />
            <Content totalTrue={totalTrue} totalTask={totalTask} level={level} mode={mode} />
            <Footer />
        </div>
    )
}

export default page