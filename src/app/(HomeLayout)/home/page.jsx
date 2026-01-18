import AboutSection from '@/components/aboutsection/AboutSection';
import Banner from '@/components/Banner/Banner';
import Berger from '@/components/Berger/Berger';
import BookNow from '@/components/BookNow/BookNow';
import Cheifs from '@/components/Chief/page';
import Menu from '@/components/Menu/Menu';
import Restaurant from '@/components/Restaurant/Restaurant';
import React from 'react';

const page = () => {
    return (
        <div>

            <Banner></Banner>
            <div className='px-5 lg:px-10 pt-20 space-y-30'>
                <Restaurant></Restaurant>
                <AboutSection></AboutSection>
                <Menu></Menu>
                <Berger></Berger>
                <Cheifs></Cheifs>
                <BookNow></BookNow>
                
            </div>
        </div>
    );
};

export default page;