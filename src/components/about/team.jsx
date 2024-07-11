import React from 'react';
import Member from './Member';

const Team = () => {
    const data = [
        { id: 1, name: "A K M Badruzzoha", img: "/image/sir.jpg", title: "Founder's", description: "known for thrilling writing for more than 60 years, has upheld enduring principles like quality, innovation, customer understanding, and commercial ethics. Our complete product line reflects our unwavering standards for workmanship, materials, and design. I would want to thank all of our clients, consumers, business partners, and the whole Zan it family for helping to make this adventure legendary." },
        { id: 2, name: "Abdul Malek", img: "/image/sir.jpg", title: "Senior Software Engineer", description: "I am a passionate and skilled Full-Stack Developer with extensive experience in developing dynamic, high-performance web applications using the MERN stack. My expertise lies in creating robust and scalable applications that provide exceptional user experiences." },
        { id: 3, name: "MD Hasan miah", img: "/image/hasan.jpg", title: "Junior Software Engineer", description: "I am a passionate and skilled Full-Stack Developer with extensive experience in developing dynamic, high-performance web applications using the MERN stack. My expertise lies in creating robust and scalable applications that provide exceptional user experiences." },
        { id: 4, name: "MD Albith", img: "/image/albith.jpg", title: "Business Developer", description: "As a Marketing Specialist at Zan it, I’m passionate about crafting innovative marketing strategies that drive brand growth and connect with audiences.  I’ve led successful campaigns for companies and helped them achieve" },
        { id: 5, name: "MD Hasan miah", img: "/image/sir.jpg", title: "MERN stack developer", description: "some thing about me" },
        { id: 6, name: "MD Hasan miah", img: "/image/sir.jpg", title: "MERN stack developer", description: "some thing about me" },
    ]
    return (
        <div>
            <div className='grid gap-10 justify-center px-20'>
                {
                    data.map((item, index) => <Member key={item.id} index={index}
                        item={item}></Member>)
                }
            </div>
        </div>
    );
};

export default Team;