import React from 'react'
import Footer from './footer'
import Game from './game'
import Gameplay from './gameplay'
import Header from './header'

function page() {
  return (
    <div className='bg-gameplay h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between'>
        <Header />
        <Gameplay />
        <Footer />
   </div>
  )
}

export default page