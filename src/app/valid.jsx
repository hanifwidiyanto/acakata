import React from 'react'

async function getValidUser(email) {
   const res = await fetch('http://locahost:8000/user/' + email)
   return res.json()
}


export default async function Validate() {
    console.log()
    return (
        d
    )
}
