import React from 'react'
import Link from 'next/link'

const Header = () => {

  return (
    <div className='flex justify-between bg-blue mb-6'>
        <div className='bg-black text-white px-2 py-1 rounded-lg'><Link href="/">Home</Link></div>
        <div className='bg-black text-white'>I&rsquo;m menu bar</div>
    </div>
  )
}

export default Header