"use client"

import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Setting from './setting'
import DevProfile from './DevProfile'


function Header(props) {
    const timeSpend = props.timeSpend
    const level = props.level
    const stars = props.stars
    const konversiWaktu = (ms) => {
        let detik = Math.floor(ms / 1000);
        let menit = Math.floor(detik / 60);
        detik = detik % 60;
        let jam = Math.floor(menit / 60);
        menit = menit % 60;

        if (jam === 0) {
            return `${menit} menit, ${detik} detik`;
        } else {
            return `${jam}j, ${menit}m, ${detik}d`;
        }
    }
    const waktuBelajar = konversiWaktu(timeSpend)
    // const waktuBelajar = `${minutes}m, ${(seconds < 10 ? "0" : "")}${seconds}d`;

    const [playing, setPlaying] = useState(false);
    const [audio] = useState(new Audio("/assets/sound/home.mp3"));
    const [showSetting, setShowSetting] = useState(false)
    const [showDev, setShowDev] = useState(false)
    const togglePlay = () => {
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    };

    function handleCloseClick() {
        setShowSetting(false)
        setShowDev(false)
    }
    return (
        <>
            {showSetting && <Setting initValue={props} onCloseClick={handleCloseClick} />}
            {showDev && <DevProfile onCloseClick={handleCloseClick} />}

            <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                    <motion.div
                        initial={{ x: "-200%" }}
                        animate={{ x: "0%" }}

                        className='bg-container-timevisit w-52 h-12 bg-center bg-contain bg-no-repeat -ml-4 mt-6 relative flex items-center'>
                        <div className="absolute -top-3 left-16">
                            <span className='font-cubano italic text-sm text-kuning shadow-inner outline-title'>lama belajar</span>
                        </div>
                        <Image src="/assets/img/icon-time.png" width={20} height={24} priority className="relative left-7" alt="icon time" />
                        <span className='font-cubano text-white text-sm outline-title relative left-10'>{waktuBelajar}</span>
                    </motion.div>
                    <motion.div
                        initial={{ x: "200%" }}
                        animate={{ x: "0%" }}
                        className='flex gap-2 mt-6 mr-3'>
                        <div className='bg-container-level shadow-md w-20 h-6 bg-cover rounded-md bg-no-repeat bg-center relative flex justify-end'>
                            <Image src="/assets/img/icon-level.png" width={33} height={22} priority className=" absolute -top-1 left-1.5" alt="icon level" />
                            <span className='text-white font-cubano outline-title relative right-5'>{level}</span>
                        </div>
                        <div className='bg-container-level shadow-md w-20 h-6 bg-cover rounded-md bg-no-repeat bg-center relative flex justify-end'>
                            <Image src="/assets/img/icon-stars.png" width={26} height={21} priority className="absolute -top-2 left-2" alt="icon stars" />
                            <span className='text-white font-cubano outline-title relative right-5'>{stars}</span>
                        </div>
                    </motion.div>
                </div>
                <div className='flex justify-between items-center mx-3 mt-4'>
                    <motion.div
                        initial={{ x: "-200%" }}
                        animate={{ x: "0%" }}
                        className='flex gap-2 h-fit'>
                        <Image src="/assets/img/btn-setting.png" width={34} height={34} priority className="active:scale-90 duration-100 cursor-pointer" alt="btn setting" onClick={() => setShowSetting(true)} />
                        <Image src={playing ? '/assets/img/btn-sound.png' : '/assets/img/btn-nosound.png'} width={34} height={34} priority className="active:scale-90 duration-100 cursor-pointer" alt="btn sound" onClick={togglePlay} />
                    </motion.div>
                    <motion.div
                        initial={{ x: "200%" }}
                        animate={{ x: "0%" }}
                        className='bg-profildev bg-right bg-contain bg-no-repeat w-24 h-10 relative active:scale-90 duration-100 cursor-pointer' onClick={() => setShowDev(true)}>
                        <Image src="/assets/img/icon-dev.png" width={20} height={30} className="absolute right-2 -top-4" priority alt="icon dev" />
                        <div className='flex flex-col absolute right-1 top-1'>
                            <span className='outline-dev  font-cubano text-white text-xs'>Profil</span>
                            <span className='outline-dev  font-cubano text-white text-xs'>Pengembang</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default Header