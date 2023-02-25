import React from 'react'
import Header from './header'
import Leaderboard from './leaderboard'

function page() {
    return (
        <div className='bg-info h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between relative'>
            <Header />
            <Leaderboard />
        </div>
    )
}

export default page