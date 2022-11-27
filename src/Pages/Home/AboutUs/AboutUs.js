import React from 'react';
import person from '../../../assets/person/1.jpg'

const AboutUs = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col  lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt='person img' className="sm:w-full md:w-full lg:w-4/5 h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className=" text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">We are Realiable <br />
                     & known for best
                     deals</h1>
                    <p className="py-6">TVs for sale in Bangladesh at best price only on tv-bazarbd marketplace. Explore used smart TV, HD, andriod, LED, LCD televisions from top brands.</p>
                    <p className="py-3">Meet the seller directly from anywhere in Bangladesh.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;