import React from 'react'
import useSWR from 'swr'

const fetcher = (level) => fetch('http://localhost:8000/materi/' + level).then((res) => res.json());

export default function getMateriByLevel(level) {
    const {data, error} = useSWR(level, fetcher)
    return data
}
