import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='grid justify-center  items-center h-screen w-full '>
            <Image className='w-[1000px]' width={200} height={200} src={'/image/notPage.gif'} />
        </div>
    )
}