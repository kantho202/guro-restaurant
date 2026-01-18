import React from 'react';
import { IoMdTime } from "react-icons/io";

const Restaurant = () => {
    return (
        <div className='space-y-4 '>
            <h1 className='font-bold text-2xl font-mono'>The Restaurant</h1>
            <p className='barlow.className font-medium font-sans'>Led by Chef de Micheal Martin, The Restaurant is celebrated for its excellent cuisine and unique ambience.
                 The gorgeous dining room features three open studio kitchens, allowing you to enjoy the sights
                  and sounds of the culinary artistry on display. The menu showcases both Asian and European
                   influences, with a tempting selection of classic favorites and creative dishes for you to sample.
                    Cheese connoisseurs will be drawn to the The Wine and Cheese Cellar, housed in five-meter-high 
                    glass walls, where our knowledgeable staff can introduce you to some of New York's
                     greatest culinary treasures.</p>
                     <h1 className='font-bold text-2xl'>Hours</h1>
                     <p className='flex items-center font-medium'> <IoMdTime />Breakfast: 7.00 am – 11.00 am (daily)</p>
                     <p className='flex items-center font-medium'> <IoMdTime />Lunch: 12.00 noon – 2.00 pm (daily)</p>
                     <p className='flex items-center font-medium'> <IoMdTime />Dinner: open from 6.30 pm, last order at 10.00 pm (daily)
</p>
<h1 className='font-bold text-2xl'>Dress Code</h1>
<p className='font-medium'>Smart casual (no shorts, hats, or sandals permitted)
</p>
<h1 className='font-bold text-2xl'>Terrace</h1>
<p className='font-medium'>Open for drinks only
</p>

        </div>
    );
};

export default Restaurant;