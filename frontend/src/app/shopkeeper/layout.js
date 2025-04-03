import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/sonner'
import React from 'react'
 

export default function layout({children}) {
  return (
    <div className='overflow-hidden'>
      {children}
      <Toaster />
    </div>
  )
}
