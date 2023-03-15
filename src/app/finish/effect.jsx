'use client'

import React from 'react'
import { motion } from 'framer-motion'

function Effect() {
  return (
    <>
      <motion.div
        initial={{ x: "-200%" }}
        animate={{ x: "0%" }}
        className='absolute top-0 w-full bg-effect-finish-top bg-no-repeat bg-center bg-cover h-36'>
      </motion.div>
      <motion.div 
        initial={{ x: "200%" }}
        animate={{ x: "0%" }}
      className='absolute bottom-0 w-full bg-effect-finish-bottom bg-no-repeat bg-center bg-cover h-36'>
      </motion.div>
    </>
  )
}

export default Effect