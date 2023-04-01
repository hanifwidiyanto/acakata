import React from 'react'
import useSWR from 'swr'

const fetcher = (uuid) => fetch('https://cdn.acakata.app/user/getStar/' + uuid).then((res) => res.json());

export default function getUserStar(uuid) {
    const {data, error} = useSWR(uuid, fetcher)
    return data
}
