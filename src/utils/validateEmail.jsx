import React from 'react'
import useSWR from 'swr'

const fetcher = (email) => fetch('https://cdn.acakata.app/user/validate/' + email).then((res) => res.json());

export default function validateEmail(email) {
    const {data, error} = useSWR(email, fetcher)
    return data
}
