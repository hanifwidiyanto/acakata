'use client'

import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Footer({ isCountdownActive, taskGame, uuid, level, mode, countTrue }) {
  const router = useRouter()
  const [countdown, setCountdown] = useState('5:00'); // waktu awal 5 menit

  useEffect(() => {
    let intervalId;
    if (isCountdownActive > 1) {
      intervalId = setInterval(() => {
        const [minutes, seconds] = countdown.split(':').map(Number);
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          router.push(`/finish?true=${countTrue}&task=${taskGame.length}&uuid=${uuid}&level=${level}&mode=${mode}`)
        } else {
          const totalSeconds = minutes * 60 + seconds - 1;
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          setCountdown(`${newMinutes}:${newSeconds.toString().padStart(2, '0')}`);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [countdown, isCountdownActive]);

  return (
    <div className='flex w-full justify-between p-4'>
      <div className='w-24 bg-ping rounded-full px-4 py-2 border-2 border-bingu flex gap-2 font-cubano text-white outline-title justify-center'>
        {countdown}
      </div>
      <Image src="/assets/img/btn-sound.png" alt="btn sound" width={34} height={34} className="active:scale-90 duration-100 cursor-pointer" />
    </div>
  )
}

export default Footer