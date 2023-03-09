import React from 'react'
import useSWR from 'swr'

const fetcher = (email) => fetch('http://localhost:8000/user/validate/' + email).then((res) => res.json());

export default function validateEmail(email) {
    const {data, error} = useSWR(email, fetcher)
    return data
}
