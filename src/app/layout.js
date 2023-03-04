"use client"

import './globals.css'
import AuthContext from './Auth'
import AuthCheck from './AuthCheck'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='w-full flex justify-center'>
        <AuthContext>
            <main className='sm:w-96 w-full overflow-hidden'>
              {children}
            </main> 
          </AuthContext>
      </body>
    </html>
  )
}
