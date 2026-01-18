"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Logo from '../Logo/Logo';
import Link from 'next/link';

const RegisterForms = () => {
    const router = useRouter()
    const [error, setError] = useState("")
    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        if (email == 'kohli@gmail.com' && password == '12345') {
            document.cookie = "auth =true; path=/"
            router.push('/products')
            toast.success('Successfully login')
        }
        else {
            toast.error('Please correct email & password')
        }

    }
    return (
        <form onSubmit={handleRegister} className="hero   ">
            <div className="hero-content flex-col lg:flex-row-reverse min-h-screen">


                <div className="card  lg:w-xl shrink-0 shadow-2xl border border-gray-200">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <div className='py-7'>
                                <h1 className='text-center text-2xl font-semibold'>Create an Account </h1>
                            <p className='text-center text-base font-medium'>
                              Join us today for delicious food, easy ordering, and special offers.
                            </p>
                            </div>
                            <div className='flex gap-5 '>
                                <div className='w-full'>
                                    <label className="label pb-1">First Name</label>
                                    <input type="email" name='first name' className="input w-full outline-0 text-black " placeholder="First Name" />
                                </div>
                                <div className='w-full'>
                                    <label className="label pb-1">Last Name</label>
                                    <input type="email" name='last name' className="input w-full outline-0 text-black" placeholder="Last Name" />
                                </div>

                            </div>
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
                            <button className="btn bg-[#8f9779] text-white border-0 outline-0 mt-4">Register</button>
                            <p className='font-semibold py-3'>Already have a account ?
                                <Link href={'/login'} className='link link-primary pl-3'>Login</Link></p>
                        </fieldset>
                    </div>
                </div>
            </div>
        </form>

    );
};

export default RegisterForms;