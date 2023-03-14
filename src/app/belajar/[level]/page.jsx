import React from 'react'
import Footer from './footer'
import Game from './game'
import Gameplay from './gameplay'
import Header from './header'

function page({ params }) {
  return (
    <div className='bg-gameplay h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between'>
      <Header level={params.level} />
      <Game level={params.level}/>
    </div>
  )
}

export default page