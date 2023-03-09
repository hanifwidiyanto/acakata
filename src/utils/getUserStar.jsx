import React from 'react'
import useSWR from 'swr'

const fetcher = (uuid) => fetch('http://localhost:8000/user/getStar/' + uuid).then((res) => res.json());

export default function getUserStar(uuid) {
    const {data, error} = useSWR(uuid, fetcher)
    return data
}
