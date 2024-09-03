import Link from 'next/link';
export default function Footer() {
    return (
        <div className='mt-auto w-full h-44 p-8 bg-gray-800 text-white z-10 flex items-center justify-between'>
            <div className='flex items-center'>
                <Link href='/' className='font-bold text-3xl'>"Company Name"</Link>
            </div>
            <div className="ml-auto flex items-center justify-between lg:w-2/3">
                <div>
                    <h1>this is the footer</h1>
                </div>
                <div>
                    <h1>this is the footer</h1>
                </div>
                <div>
                    <h1>this is the footer</h1>
                </div>
            </div>
        </div>
    )
}