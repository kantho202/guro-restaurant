import React from 'react';

const Menu = () => {
    return (
        <div >
            <h1 className='font-bold text-4xl text-center font-mono'>Restaurant Menu</h1>
            <div className='flex gap-15 flex-wrap lg:gap-25 justify-center py-5'>
                <h2 className='font-semibold text-xl p-3 border-2 border-[#8f9779]'>Starters</h2>
                <h2 className='font-semibold text-xl p-3'>Mains</h2>
                <h2 className='font-semibold text-xl p-3'>Salads</h2>
                <h2 className='font-semibold text-xl p-3'>Wine </h2>
                <h2 className='font-semibold text-xl p-3'>Breakfast </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 space-y-5  gap-10 pt-15'>
                <div>
                    <div className='flex gap-5 justify-between border-b-2   border-dashed border-[#8f9779] pb-3'>
                        <h1 className='font-semibold text-2xl'>Mozzarella Dippers</h1>
                        <span className='font-normal text-2xl'>27$</span>

                    </div>
                    <p className='pt-3 font-normal text-base'>Fried mozzarella sticks, marinara sauce
                    </p>
                </div>
                <div>
                    <div className='flex gap-5 justify-between border-b-2  border-[#8f9779] border-dashed pb-3'>
                        <h1 className='font-semibold text-2xl'>Buffalo Wings</h1>
                        <span className='font-normal text-2xl'>37$</span>

                    </div>
                    <p className='pt-3 font-normal text-base'>Spicy chicken wings, blue cheese sauce, carrot, celery


                    </p>
                </div>
                <div>
                    <div className='flex gap-5 justify-between border-b-2  border-[#8f9779] border-dashed pb-3'>
                        <h1 className='font-semibold text-2xl'>Onion Rings</h1>
                        <span className='font-normal text-2xl'>32$</span>

                    </div>
                    <p className='pt-3 font-normal text-base'>Fried onion rings, smoked aioli


                    </p>
                </div>
                <div>
                    <div className='flex gap-5 justify-between border-b-2  border-[#8f9779] border-dashed pb-3'>
                        <h1 className='font-semibold text-2xl'>Chilli Con Carne</h1>
                        <span className='font-normal text-2xl'>30$</span>

                    </div>
                    <p className='pt-3 font-normal text-base'>Spicy ground beef, bacon, kidney beans


                    </p>
                </div>
                <div>
                    <div className='flex gap-5 justify-between border-b-2  border-[#8f9779] border-dashed pb-3'>
                        <h1 className='font-semibold text-2xl'>Fried Jalapeno</h1>
                        <span className='font-normal text-2xl'>52$</span>

                    </div>
                    <p className='pt-3 font-normal text-base'>Fried jalapeno pickles, cheddar sauce


                    </p>
                </div>
                <div>
                    <div className='flex gap-5 justify-between border-b-2  border-[#8f9779] border-dashed pb-3'>
                        <h1 className='font-semibold text-2xl'> Potato Skins</h1>
                        <span className='font-normal text-2xl'>40$</span>

                    </div>
                    <p className='pt-3 font-normal text-base'>Crispy potato skins; bacon & cheddar or vegetables


                    </p>
                </div>


            </div>
        </div>
    );
};

export default Menu;