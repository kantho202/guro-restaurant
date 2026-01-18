"use client"
import React, {  } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
// import image5 from '../../assets/image5.png'
import Image from 'next/image';
const Banner = () => {
    return (
        <div>
             <Swiper  autoplay={{delay:3000,disableOnInteraction:false}}
        slidesPerView={'1'}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide> <Image src={image1} alt="" /></SwiperSlide>
        <SwiperSlide><Image src={image2} alt="" /></SwiperSlide>
        <SwiperSlide><Image src={image3} alt="" /></SwiperSlide>
        <SwiperSlide><Image src={image4} alt="" /></SwiperSlide>
        {/* <SwiperSlide><Image src={image5} alt="" /></SwiperSlide> */}
        
      </Swiper>
        </div>
    );
};

export default Banner;