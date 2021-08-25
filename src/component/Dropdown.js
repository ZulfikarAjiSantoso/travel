import React from 'react'
import { menuData } from '../data/Menudata'
import {FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom'
const Dropdown = ({isopen, toggle}) => {
    return (
        <div onClick={toggle} isopen={isopen} className="bar fixed z-50 w-full h-full grid items-center  top-0 left-0"
           
            >
            <div  onClick={toggle} className="absolute cursor-pointer top-5 right-5 ">
                <FaTimes />
            </div>
            <div>
                <div className="flex mt-20 flex-col gap-20">
                    {menuData.map((item, index ) =>(
                        <Link 
                        className="flex text-3xl font-semibold items-center justify-center text-white text-xl no-underline list-none
                        cursor-pointer 
                        " 
                        to={item.link} key={index}>{item.title}</Link>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <button to="/contact" className="bg-gray-200 hover:bg-yellow-300 hover:text-white font-semibold flex flex-col items-center  justify-center px-14 py-5">Contact us</button>
            </div>
        
        </div>
    )
}

export default Dropdown
