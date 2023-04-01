import React from 'react'
import useSWR from 'swr'

const fetcher = (d) => fetch('https://cdn.acakata.app/users/').then((res) => res.json());

export default function getAllUsers() {
    const d = ''
    const { data, error } = useSWR(d, fetcher)
    return data
}
