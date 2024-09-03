import Link from 'next/link';

export default function Header() {
  return (
    <div className='w-full text-black z-10 flex items-center justify-between'>
      {/* <nav className='conainer relative flex flex-wrap items-center justify-between mx-auto p-8'></nav> */}
      <div className='flex items-center'>
        <h1 className=' bg-red-200'>Logo Here</h1>
          <Link href='/' className='font-bold text-3xl'>"Company Name"</Link>
      </div>
      <div className='space-x-4 text-xl'>
        <Link href='/home-cleaning-services/house-cleaning'>"Page Name"</Link>
        <Link href='/home-cleaning-services/deep-cleaning'>"Page Name"</Link>
        <Link href='/about'>"Page Name"</Link>
      </div>
    </div>
  )
}