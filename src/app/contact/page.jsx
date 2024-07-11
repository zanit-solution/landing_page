import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';
import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Image className='w-full' width={1000} height={1000} src={"/image/contact-banner.webp"} />
            </div>
            <ContactForm></ContactForm>
            <ContactMap></ContactMap>
        </div>
    );
};

export default Page;