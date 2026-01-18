// "use client"

// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }) => {
    // const router =useRouter()
    const { id } = await params;
    console.log(params)
    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let data = await res.json()
    const meals = data.meals?.[0];
    console.log(data, meals)
    return (
        <div className='flex justify-center flex-col px-10 lg:px- py-10 lg:py-
         lg:mx-10 lg:my-10 space-y-8  rounded-[5px]'>
            <Link href={'/products'} className='font-semibold btn w-50 bg-[#8f9779] border-0 text-white '>Go Back</Link>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 '>
                <div>

                    <img src={meals.strMealThumb} className='rounded-[5px]' alt="" />
                </div>
                <div className='space-y-5'>

                    <h1 className='font-bold text-6xl'>{meals.strMeal}</h1>
                    <p className='font-normal '>
                         <span className='font-semibold text-3xl'>Category : </span>  
                          <span className='font-normal text-xl'>{meals.strCategory}</span></p>
                    {/* <p className='font-normal text-2xl'> 
                        <span className='font-semibold text-3xl'>Category</span> 
                        {meals.strCategory}</p> */}
                    <p className='font-normal text-2xl'> 
                        <span className='font-semibold text-3xl'>Area : </span>
                         <span className='font-normal text-xl'>{meals.strArea}</span></p>
                    <a href='' className='font-normal text-2xl '> 
                        <span className='font-semibold text-3xl'> Watch the youtube :</span>
                        
                        <span className='link link-primary'> 
                            <span className='font-semibold text-3xl'></span>   
                            <span className='font-normal text-xl'>{meals.strYoutube}</span>
                             </span> </a>
                    <p className='font-normal text-2xl'>
                         <span className='font-semibold text-3xl'>Modified : </span>
                         <span className='font-normal text-xl'>{meals.dateModified}</span>
                          </p>
                    <p className='font-normal text-2xl'>
                         <span className='font-semibold text-3xl'>Equipment : </span>
                         <span className='font-normal text-xl'>{meals.strIngredient1},{meals.strIngredient2},
                            {meals.strIngredient3},{meals.strIngredient4},{meals.strIngredient5},{meals.strIngredient6},
                            {meals.strIngredient7},{meals.strIngredient8}
                         </span>
                          </p>
                </div>
            </div>
        </div>
    );
};

export default page;