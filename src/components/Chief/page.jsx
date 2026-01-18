import Image from 'next/image';
import React from 'react';
import image1 from '../../assets/h1-img1-202x281.jpg'
import image2 from '../../assets/h1-img9.jpg'
const Cheifs = () => {
    return (
        <div>
            <div>
                <h1 className='font-extrabold text-3xl p-3 text-center font-mono' >
                    Fidalgo is for everyone who <br /> collects beautiful moments</h1>
                <p className='font-extrabold text-2xl text-center mask-l-from-accent-content italic text-[#8f9779]'>
                    For the best memories
                </p>
            </div>
            <div className='flex  flex-col lg:flex-row gap-10 py-20 items-center'>
                <div className='flex-1 space-y-4 '>
                    <h1 className='font-extrabold text-xl lg:text-3xl p-3 text-center font-mono' >
                        <span className='font-extrabold text-4xl lg:text-8xl pb-2
             text-center mask-l-from-accent-content italic text-[#8f9779]'>CHEF’S</span> <br />
                        ONLY THE FINEST FOOD & GREAT SERVICE</h1>
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="hidden lg:flex relative  h-[750px] flex-2">

                    {/* Main Background Image */}
                    <div className="absolute inset-0 mx-15">
                        <Image
                            src={image2}
                            alt="Food"
                            fill
                            className="object-cover "
                        />
                    </div>

                    {/* Overlay Side Image */}
                    <div className="absolute top-60 left-0 z-20 w-[200px] h-[260px]">
                        <Image
                            src={image1}
                            alt="Chef"
                            fill
                            className="object-cover rounded-"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cheifs;