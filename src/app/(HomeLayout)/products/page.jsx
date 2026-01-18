import Link from 'next/link';
import React from 'react';

const page = async () => {
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    let posts = await data.json()
    console.log(posts)
    return (
       <div className='px-5 py-10 lg:px-10 lg:py-20'>
       <div className='flex items-center justify-center'>
         <h1 className='text-2xl font-semibold text-center py-5'>All Products</h1>
        <h1 className='text-2xl font-semibold text-center py-5'>({posts.meals.length})</h1>
       </div>
         <div className='grid grid-cols-1 xl:grid-cols-3 justify-center  gap-6 '>
            {
                posts.meals.map((post) => (
                    <Link href={`/products/${post.idMeal}`} key={post.idMeal}
                    className='p-3 rounded-[5px] border space-y-3.5 border-[#8f9779]'>

                        <img src={post.strMealThumb} className='rounded-[5px]' alt={post.strMeal} />
                    
                        <h1 className='font-semibold text-xl text-center'>{post.strMeal.slice(0,30)}</h1>
                        <p>{post.strInstructions.slice(0,90)}....</p>
                        <button className='btn w-full border-0 bg-[#8f9779]'>See details</button>
                        {/* <Link href={`/products/${post.idMeal}`} className='btn w-full'>See details</Link> */}
                    </Link>
                )

                )}

           
        </div>
       </div>
    );
};

export default page;