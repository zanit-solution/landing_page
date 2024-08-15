import React from 'react';
import ContactForm from '@/components/Contact/ContactForm';
import ContactMap from '@/components/Contact/ContactMap';
import Image from 'next/image';

const Page = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <img className='w-full' width={1000} height={1000} src={"/image/contact-banner.webp"} alt='loading'/>
            </div>
            <ContactForm></ContactForm>
            <ContactMap></ContactMap>
        </div>
    );
};

export default Page;