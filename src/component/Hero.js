import React, { useEffect, useRef, useState } from 'react'
import {IoMdArrowRoundForward} from "react-icons/io"
import {CgCalendarDates} from "react-icons/cg"
import { IoArrowForward, IoArrowBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import {AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'

const Hero = ({slides}) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 3000)
        return function () {
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    })

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0){
        return null
    }

    return (
        <section className="h-screen relative overflow-hidden">
            <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
                {slides.map((slide, index) => {
                    return(
                        <div key={index} className=" z-10 w-full h-full ">
                            {index === current && (
                            <div className="absolute top-0 left-0 w-full h-full flex items-center">
                                <img src={slide.image} className="absolute top-0 left-0 w-screen h-screen object-cover" />
                                    <div className=" z-10 font-sans  ml-10 mt-72 md:ml-48  text-gray-200">
                                        <h1 className="font-semibold text-6xl md:text-7xl ">{slide.title}</h1>
                                        <p className="text-3xl font-thin">{slide.price}</p> 
                                        <p className="text-2xl flex items-center"><CgCalendarDates className="mr-3"/>{slide.time}</p>
                                        <button to={slide.path}
                                        className="mt-3 flex items-center justify-center bg-yellow-400 w-40 py-3 text-black hover:transform">
                                            {slide.detail}
                                        <IoArrowForward className="ml-3 transform hover:translate-x-2 " />
                                        </button>
                                    </div>
                                  
                            </div>
                            )}
                        </div>
                    )
                })}
                  <div className="z-10 mr-8 text-white">
                                        <ul className="space-y-10 text-3xl ">
                                            <li className="hover:text-3xl">
                                                <Link to=""><AiFillInstagram /></Link>
                                            </li>
                                     
                                            <li>
                                                <Link to=""><AiFillFacebook /></Link>
                                            </li>
                                        
                                            <li>
                                                <Link to=""><AiOutlineTwitter /></Link>
                                            </li>
                                        </ul>
                                    </div>
                <div className="z-20 absolute b-20 flex justify-end bottom-10 right-32 space-x-5  ">
                    <IoArrowBack onClick={nextSlide} className=" cursor-pointer bg-yellow-400 w-10 h-10 rounded-full transform hover:-translate-x-3 ss" />
                    <IoArrowForward onClick={prevSlide} className="cursor-pointer bg-yellow-400 w-10 h-10 rounded-full transform hover:translate-x-3 ss" />
                </div>
            </div>
         </section>
    )
}

export default Hero
