import Image from 'next/image';
import React from 'react';
import image from '../../assets/h1-img3-828x1024.jpg'
const BookNow = () => {
    return (
        <div className='pb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center flex-col-reverse'>

                <div className='w-full order-2 md:order-1'>
                   <div className='mx-0 lg:mx-20 '>
                    <h1 className='font-extrabold text-4xl lg:text-8xl font-mono p-3 text-center uppercase'>Reserve</h1>
                    <h1 className='font-extrabold text-3xl font-mono p-3 text-center uppercase'>book a table</h1>
                    <p className='font-medium text-center'>*reservations recommended</p>
                     <fieldset className="fieldset space-y-10  border-base-300 ">
                        

                        {/* <label className="label">Email</label> */}
                        <input type="number" className="input w-full bg-[#102b2a] outline-0 border-0  border-b-2 border-[#8f9779]" 
                        placeholder="Person" />

                        {/* <label className="label">Password</label> */}
                        <input type="date" className="input w-full bg-[#102b2a] outline-0 border-0  border-b-2 border-[#8f9779]" 
                        placeholder="Select a Date" />
                        <input type="time" className="input w-full bg-[#102b2a] outline-0 border-0  border-b-2 border-[#8f9779]" 
                        placeholder="Select a Time" />

                        <button className="btn bg-[#8f9779] border-0 mt-4">Book Now</button>
                    </fieldset>
                   </div>
                </div>
                <div className='order-1 md:order-2'>
                    <Image src={image} className='rounded-tl-[200px]' alt='' />
                </div>
            </div>
        </div>
    );
};

export default BookNow;