"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import Loading from './loading'

function AuthCheck({ children }) {
    const { data: session, status } = useSession({ required: true })
    if (status === 'loading') {
        return <Loading />
    } else if (status === 'authenticated') {
        return (
            <>
                {children}
            </>
        )
    }
}

export default AuthCheck