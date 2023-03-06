"use client"

import React from 'react'
import { useSession } from 'next-auth/react'

function AuthCheck({ children }) {
    const { data: session, status } = useSession({ required: true })
    if (status === 'loading') {
        return <h1>loading</h1>
    } else if (status === 'authenticated') {
        return (
            <>
                {children}
            </>
        )
    }
}

export default AuthCheck