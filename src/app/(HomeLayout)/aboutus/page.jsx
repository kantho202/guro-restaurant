import Image from 'next/image';
import React from 'react';
import image1 from '../../../assets/p1-img1.jpg'
import image2 from '../../../assets/p1-img2.jpg'
import image3 from '../../../assets/p1-img3.jpg'

const AboutUs = () => {
    return (
        <div className='space-y-20  py-10 lg:py-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 px-5  lg:px-10 '>
                <div>
                    <Image src={image1} className='rounded-tl-[150px]' alt='' />
                </div>
                <div className='flex flex-col justify-between gap-20'>
                    <div className='space-y-8 pl-15'>
                        <h1 className='text-5xl font-bold font-mono'>Our goals & <br /> history</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className='flex gap-15'>
                        <div>
                            <Image src={image2} className='w-[300px]' alt='' />
                        </div>
                        <div className='space-y-2 pt-5'>
                            <h1 className='font-bold text-xl pb-2'>opening hours</h1>
                            <p className='font-medium text-base'>Mon – thu: 10 am – 01 am</p>
                            <p className='font-medium text-base'>Fri – sun: 10 am – 020 am</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-20 items-center'>
                <div className='flex-1 space-y-5 items-center px-10'>
                    <h1 className='text-5xl font-bold font-mono'>   our food philosophy</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.

                        Conse qu atip sum, nec sagittis dolor sit amet, consectetur adipis eng elit
                    </p>

                </div>
                <div className='flex-2'>
                    <Image src={image3} alt=''></Image>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;