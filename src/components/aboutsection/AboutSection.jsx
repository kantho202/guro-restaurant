import Image from 'next/image';
import React from 'react';
import image from '../../assets/Red Pizza Photo Food Influencer Instagram Post Set.png' 
const AboutSection = () => {
    return (
        <div>
            <section className=" ">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

                    <div className=" flex-1">
                        <Image src={image} alt="Our Restaurant" className="rounded-xl shadow-lg w-full object-cover"/>
                    </div>


                    <div className="md:w-1/2 flex-1">
                        <h2 className="text-3xl font-bold  mb-4">About Us</h2>
                        <p className=" mb-4">
                            Welcome to <span className="font-semibold">Gurbo Restaurant </span>, where we serve more than just food — we serve experiences. Our chefs craft each dish with passion, blending fresh, local ingredients into unforgettable flavors.
                        </p>
                        <p className=" mb-6">
                            From our warm, inviting atmosphere to our friendly staff, every detail is designed to make your dining experience special. Whether you're joining us for a quick lunch or a festive dinner, we promise a memorable culinary journey.
                        </p>
                        <a href="/menu" className="inline-block bg-[#8f9779] text-white font-semibold px-6
                         py-3 rounded-lg transition">Explore Our Menu</a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutSection;