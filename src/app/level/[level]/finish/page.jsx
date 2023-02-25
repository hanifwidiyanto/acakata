import React from 'react'
import Header from './header'
import Effect from './effect'
import Content from './content'
import Footer from './footer'

function page() {
    return (
        <div className='bg-home h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between relative'>
           <Effect />
           <Header />
           <Content />
           <Footer />
        </div>
    )
}

export default page