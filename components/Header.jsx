import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <nav className='bg-slate-800 py-8 flex justify-center items-center gap-10 text-white'>
      <Link href='/'>Home</Link>
      <Link href='/recipes'>Recipe Details</Link>
      <Link href='/recipes/new'>Add Recipe Page </Link>
    </nav>
  )
}
