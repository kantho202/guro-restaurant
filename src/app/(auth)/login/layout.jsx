import Logo from '@/components/Logo/Logo';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className="min-h-screen ">
             {/* <Logo className="text-center "></Logo> */}
      {children}
    
        </div>
    );
};

export default layout;