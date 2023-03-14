import React from 'react'
import useSWR from 'swr'

const fetcher = (level) => fetch('http://localhost:8000/game/' + level).then((res) => res.json());

export default function getGamesByLevel(level) {
    const {data, error} = useSWR(level, fetcher)
    return data
}
