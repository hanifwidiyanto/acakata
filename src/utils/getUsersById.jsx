import React from 'react'
import useSWR from 'swr'

const fetcher = (uuid) => fetch('https://cdn.acakata.app/user/getDetail/' + uuid).then((res) => res.json());

export default function GetUsersByID(uuid) {
    const {data, error} = useSWR(uuid, fetcher)
    return data
}
