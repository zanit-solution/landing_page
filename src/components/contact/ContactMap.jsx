import React from 'react';

const ContactMap = () => {
    return (
        <div className='p-44'>
            <iframe className='w-full h-[calc(100vh-30vh)]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273.07892505450855!2d90.36489564819193!3d23.77042451345906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1000ec4579b%3A0xf67bb32afcb2c4ff!2sZan%20info%20tech!5e1!3m2!1sen!2sbd!4v1720609994771!5m2!1sen!2sbd"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default ContactMap;