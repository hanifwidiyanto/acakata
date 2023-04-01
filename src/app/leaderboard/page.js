'use client'

import React, { useState, useEffect } from 'react'
import Header from './header'
import Leaderboard from './leaderboard'

function page() {

    const [dataAlluser, setDataAllUsers] = useState([])
    function calculateScore(item) {
        const score = (item.level + item.totalStars) / 2;
        return score;
      }
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://cdn.acakata.app/users');
            const data = await response.json();
            // Hitung skor untuk setiap item dan tambahkan properti "score" pada setiap item
            data.forEach(item => {
              const score = calculateScore(item);
              item.score = score;
            });
            // Sort data berdasarkan skor
            data.sort((a, b) => b.score - a.score);
            setDataAllUsers(data);
          }
          fetchData();
    }, [])
    return (
        <div className='bg-info h-screen w-full bg-center bg-cover bg-no-repeat flex flex-col justify-between relative'>
            <Header />
            <Leaderboard data={dataAlluser} />
        </div>
    )
}

export default page