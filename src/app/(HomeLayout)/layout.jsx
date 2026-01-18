import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='bg-[#102b2a] text-white'>
            <Navbar></Navbar>
           <div className=''>
             {children}
           </div>
            <Footer></Footer>
        </div>
    );
};

export default layout;