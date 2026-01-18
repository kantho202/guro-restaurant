"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Logo from '../Logo/Logo';
import Link from 'next/link';

const LoginForms = () => {
  const router =useRouter()
  const [error,setError]=useState("")
      const handleLogIn = (e) => {
          e.preventDefault()
          const email =e.target.email.value;
          const password=e.target.password.value;
          console.log(email,password)
          if(email=='kohli@gmail.com' && password=='12345'){
              document.cookie="auth =true; path=/"
              router.push('/products')
              toast.success('Successfully login')
          }
          else{
            toast.error('Please correct email & password')
          }
  
      }
  return (
    <form onSubmit={handleLogIn} className="lg:hero  min-h-screen ">
                <div className="lg:hero-content  flex-col lg:flex-row-reverse min-h-screen px-5">
          

                    <div className="card lg:w-xl shrink-0 shadow-2xl border  border-gray-200">
                        <div className="card-body ">
                            <fieldset className="fieldset ">
                                <h1 className='text-center text-2xl font-semibold py-7'>Log in to your Account</h1>
                                {/* <p className='text-center'>
                                    Get started with our app, just create an account and enjoy the experience.
                                </p> */}
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input w-full outline-0 text-black" 
                                placeholder="Email Address" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full outline-0 text-black" name='password' 
                                placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                {
                                  error && <p className='text-red-500'> {setError}</p>
                                }
                                <button className="btn bg-[#8f9779] text-white border-0 outline-0 mt-4">Login</button>
                                <p className='font-semibold py-3 '>Don't have a account yet?
                                     <Link href={'/register'} className='link link-primary pl-3'>Register</Link></p>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </form>
    
  );
};

export default LoginForms;