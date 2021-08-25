import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, {
    Pagination
  } from 'swiper/core';

import { Link } from "react-router-dom"; 
import { trip } from "../data/trip";
import {SiGooglemaps} from "react-icons/si"

SwiperCore.use([Pagination]);


const Info = () => {
    return (
        <div className=" 
         h-screen w-screen  md:mt-16
        ">
         <h1 className="flex justify-center py-10 font-semibold text-3xl" >Our Favorite Destinations</h1>
            <div className="">
                <Swiper  
                className="mySwiper"
                slidesPerView={1} spaceBetween={10}  breakpoints={{
                    "@0.00": {
                        "slidesPerView": 1,
                        "spaceBetween": 10
                    },
                    "@0.75": {
                        "slidesPerView": 2,
                        "spaceBetween": 20
                    },
                    "@1.00": {
                        "slidesPerView": 3,
                        "spaceBetween": 30
                    },
                    "@1.50": {
                        "slidesPerView": 4,
                        "spaceBetween": 10
                    }
                    }}>
                        {trip.map((item, index) => {
                           return(
                            <SwiperSlide key={item.id} className="pr-5">
                                 <Link to="" className="">
                                    <img src={item.img} className="rounded-2xl hover:scale-150" /> 
                                </Link>
                                <div className="">
                                <h3 className="flex transform -translate-y16 z-50 text-white"><SiGooglemaps className="mx-3" />{item.name}</h3>
                                    <button to="" className="px-10 rounded-3xl bg-yellow-300 py-3 font-thin hover:bg-yellow-500 text-black">View Details</button> 
                                </div>
                            </SwiperSlide> 
                           )
                        })}




                        
                    </Swiper>

            </div>
            
        </div>
    )
}

export default Info
