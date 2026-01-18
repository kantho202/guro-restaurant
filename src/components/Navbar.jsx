"use client"
import Link from 'next/link';
import React, { act } from 'react';
import Logo from './Logo/Logo';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathName = usePathname();
  const activeClass = (path) => {
    return pathName.startsWith(path)
      ? 'text-xl font-bold   border border-[#8f9779]'
      : 'text-xl ';
  }
  return (
    <div className="navbar  shadow-sm lg:px-10 sticky top-0 z-10 bg-[#102b2a]  px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn bg-[#8f9779] border-0 mr-3 lg:mr-0 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#102b2a]  space-y-8 rounded-box z-1 mt-3 w-50 p-4 shadow">
            <div className='grid grid-cols-1 justify-between  py-8'>
              <div className='space-y-8'>
                <li><Link href={'/home'} className={activeClass("/home")} >Home</Link></li>
                <li><Link href={'/aboutus'} className={activeClass("/aboutus")}>About Us</Link></li>
                <li><Link href={'/products'} className={activeClass("/products")}>Products</Link></li>
                <li><Link href={'/contact'} className={activeClass("/contact")}>Contact</Link></li>
              </div>
              <div className='w-full grid grid-cols-1 space-y-8 '>

                <Link href={'/login'} className='mt-8 btn bg-[#8f9779] text-white border-0 outline-0 '>Log in </Link>
                <Link href={'/register'} className='btn bg-[#8f9779] text-white border-0 outline-0 '>Register</Link>
              </div>

            </div>
          </ul>

        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10">
          <li><Link href={'/home'} className={activeClass("/home")}>Home</Link></li>
          <li><Link href={'/aboutus'} className={activeClass("/aboutus")} >About Us</Link></li>
          <li><Link href={'/products'} className={activeClass("/products")}>Products</Link></li>
          <li><Link href={'/contact'} className={activeClass("/contact")}>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end space-x-2.5 hidden lg:flex">
        <Link href={'/login'} className='btn bg-[#8f9779] text-white border-0 outline-0 '>Log in </Link>
        <Link href={'/register'} className='btn bg-[#8f9779] text-white border-0 outline-0 '>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;