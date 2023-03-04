"use client"

import React from 'react'
import { useSession, getSession } from 'next-auth/react'
import { signIn, signOut } from 'next-auth/react'

export default function AuthCheck({ children }) {
    const { data: session, status } = useSession()
    if (status == 'authenticated') {
        return (
           <div>
            you are signed in 
            <button onClick={()=>signOut()}>keluar</button>
           </div>
        )
    } else {
        return (
            <div>you are not signed in
              <button onClick={()=>signIn()}>masuk</button>
            </div>
        )
    }
}

