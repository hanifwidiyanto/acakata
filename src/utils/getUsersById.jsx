import React from 'react'
import useSWR from 'swr'

const fetcher = (uuid) => fetch('http://localhost:8000/user/getDetail/' + uuid).then((res) => res.json());

export default function getUsersByID(uuid) {
    const {data, error} = useSWR(uuid, fetcher)
    return data
}
