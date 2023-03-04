"use client"

import React from 'react'
import { useSession } from 'next-auth/react'

function AuthCheck() {
    const { data: session, status } = useSession({ required: true })
    console.log(session)
    console.log(status)
}

export default AuthCheck