import Banner from '@/components/Banner/Banner';
import Berger from '@/components/Berger/Berger';
import Menu from '@/components/Menu/Menu';
import Restaurant from '@/components/Restaurant/Restaurant';
import React from 'react';

const page = () => {
    return (
        <div>

            <Banner></Banner>
            <div className='px-10 pt-20 space-y-30'>
                <Restaurant></Restaurant>
                <Menu></Menu>
                <Berger></Berger>
            </div>
        </div>
    );
};

export default page;