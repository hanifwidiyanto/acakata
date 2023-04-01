import React from 'react'
import useSWR from 'swr'

const fetcher = (level) => fetch('https://cdn.acakata.app/materi/' + level).then((res) => res.json());

export default function GetMateriByLevel(level) {
    const {data, error} = useSWR(level, fetcher)
    return data
}
