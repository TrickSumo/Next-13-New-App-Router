import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <>
    <div className='max-w-[300px] mx-auto py-9 text-center'><Link className='p-3 bg-aqua text-white' href="/todo">Go to TODOs -&gt;</Link></div>
    <div className='max-w-[300px] mx-auto py-9 text-center'><Link className='p-3 bg-aqua text-white' href="/search">Go to Search -&gt;</Link></div>
    </>
  )
}
