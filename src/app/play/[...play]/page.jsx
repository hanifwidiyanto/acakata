"use client"

import getGamesByLevel from '@/utils/getGamesBylevel'
import React, { useEffect, useState } from 'react'
import Game from './Game';
import Header from './header';
import Footer from './footer';

export default function page({ params }) {
  const dataGames = getGamesByLevel(params.play[0])
  const [taskGame, setTaskGame] = useState([]);

  useEffect(() => {
    if (dataGames) {

      const shuffledData = dataGames.sort(() => 0.5 - Math.random());

      // Calculate number of words based on percentage
      const easyCount = Math.round(shuffledData.length * 0.4);
      const mediumCount = Math.round(shuffledData.length * 0.7);

      // Split shuffled data into each mode based on percentage
      const easyWords = shuffledData.slice(0, easyCount);
      const mediumWords = shuffledData.slice(easyCount, easyCount + mediumCount);
      const hardWords = shuffledData.slice(easyCount + mediumCount);

      if (params.play[1] === 'easy') setTaskGame(easyWords)
      if (params.play[1] === 'medium') setTaskGame(mediumWords)
      if (params.play[1] === 'hard') setTaskGame(hardWords)

    }
  }, [dataGames])
  console.log(taskGame)
  return (
    <div className='bg-gameplay h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between'>
      <Header level={params.play[0]} />
      <Game taskGame={taskGame} />
      <Footer />
    </div>
  )
}
