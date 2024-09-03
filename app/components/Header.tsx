import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full m-3 text-black z-10 flex items-center justify-between'>
      {/* <nav className='conainer relative flex flex-wrap items-center justify-between mx-auto p-8'></nav> */}
      <div className='flex flex-col items-center'>
        <Link href='/' className='font-bold text-2xl'>Baked Lazy</Link>
        <h1 className=' bg-red-200'>Logo Here</h1>
      </div>
      <div className='space-x-4 text-xl'>
        {/* <Link href='/home-cleaning-services/house-cleaning'>"Page Name"</Link> */}
        <Link href='/shop'>Shop</Link>
        <Link href='/about'>About</Link>
      </div>
    </div>
  )
}