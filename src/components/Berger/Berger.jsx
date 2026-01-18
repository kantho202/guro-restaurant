import Image from 'next/image';
import React from 'react';
import image1 from '../../assets/fish-burger.png'
import image2 from '../../assets/beef-burger.png'
import image3 from '../../assets/veggie-burger.png'
const Berger = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 '>
                <div>
                    <div className=' border-t-2 border-b-2'>
                        <h1 className='font-extrabold text-3xl p-3 text-center'>Don’t need a silver fork to eat a good burger</h1>
                    </div>
                    <div className='py-10 '>
                        <Image src={image1} alt='' />
                    </div>
                    <div className=' text-center space-y-5'>
                        <h1 className='font-extrabold text-7xl p-3 text-center'>Fish Berger</h1>
                        <p className='font-medium text-[18px]'>Life is like a burger the more you add to it, the better it becomes</p>
                    </div>
                </div>
                <div>
                    <div className=' border-t-2 border-b-2'>
                        <h1 className='font-extrabold text-5xl p-4.5 text-center'>Ours Burgers</h1>
                    </div>
                    <div className='py-12'>
                        <Image src={image2} alt='' />
                    </div>
                    <div className=' text-center  space-y-5'>
                        <h1 className='font-extrabold text-7xl p-3 text-center'>Beef Burger</h1>
                        <p className='font-medium text-[18px]'>Burger for the body is not enough there must be a burger for the soul

                        </p>
                    </div>
                </div>
                <div>
                    <div className=' border-t-2 border-b-2'>
                        <h1 className='font-extrabold text-3xl p-3 text-center'>Because we never play with someone’s health
                        </h1>
                    </div>
                    <div className='py-10'>
                        <Image src={image3} className='h-70' alt='' />
                    </div>
                    <div className='text-center  space-y-5 '>
                        <h1 className='font-extrabold text-7xl p-3 text-center '>Veggie Burger
                        </h1>
                        <p className='font-medium text-[18px]'>Roses are red, violets are blue. The burger costs less than dinner for two</p>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Berger;