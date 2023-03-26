'use client'

import React from 'react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

function Footer({ isCountdownActive, taskGame, uuid, level, mode, countTrue }) {


  const router = useRouter()
  const [countdown, setCountdown] = useState('5:00'); // waktu awal 5 menitc

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

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const audio = audioRef.current;
    audio.play();
    audio.loop = true;

    return () => {
      audio.pause();
    };
  }, []);

  // Function to toggle play/pause
  function togglePlay() {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true)
    } else {
      audio.pause();
      setIsPlaying(false)
    }
  }

  let audioSrc = '';
  if (mode === 'easy') {
    audioSrc = '/assets/sound/game-1star.mp3';
  } else if (mode === 'medium') {
    audioSrc = '/assets/sound/game-2star.mp3';
  } else if (mode === 'hard') {
    audioSrc = '/assets/sound/game-3star.mp3';
  }



  return (
    <>
      <audio ref={audioRef} src={audioSrc} />
      <div className='flex w-full justify-between p-4'>
        <div className='w-24 bg-ping rounded-full px-4 py-2 border-2 border-bingu flex gap-2 font-cubano text-white outline-title justify-center'>
          {countdown}
        </div>
        <Image src={isPlaying ? '/assets/img/btn-sound.png' : '/assets/img/btn-nosound.png'} width={34} height={34} priority className="active:scale-90 duration-100 cursor-pointer" alt="btn sound" onClick={togglePlay} />
      </div>
    </>
  )
}

export default Footer