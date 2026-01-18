import Logo from '@/components/Logo/Logo';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Logo></Logo>
            <main className=" lg:flex lg:items-center lg:justify-center">
      {children}
    </main>
        </div>
    );
};

export default layout;