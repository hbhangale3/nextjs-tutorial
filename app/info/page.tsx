import Link from 'next/link'
import React from 'react'

export default function InfoPage() {
  return (
    <div>
      <h1 className='text-7xl'>Info Page</h1>
      <Link href='/' className='text-xl text-blue-500 inline-block mt-5'> Back to Home Page</Link>
      </div>
  )
}
