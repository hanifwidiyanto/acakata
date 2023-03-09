import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

function Header({ level }) {
    return (
        <div className="flex w-full justify-center mt-4">
            <div className="bg-level w-[285px] h-[64px] bg-no-repeat bg-center bg-contain flex justify-between items-center px-8 relative">
                <Link href="/">
                    <Image src="/assets/img/icon-back.png" alt="icon back" className='absolute left-0 cursor-pointer active:scale-90 duration-100' width={20} height={32} />
                </Link>
                <h2 className='font-cubano text-3xl outline-title text-white mx-auto'>level {level}</h2>
            </div>
        </div>
    )
}

export default Header