import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='w-full flex justify-center'>
        <main className='sm:w-96 w-full'>
          {children}
        </main> 
      </body>
    </html>
  )
}
