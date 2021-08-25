import React from 'react'
import { Link } from 'react-router-dom'
import { menuData } from '../data/Menudata'
import {FaBars} from 'react-icons/fa'
const Navbar = ({toggle}) => {
    return (
        <nav className="h-14 flex justify-between px-2 py-3 z-20 fixed w-full bg-gray-900">
            <Link className="text-gray-300 italic cursor-pointer h-full flex items-center font-bold font-dosis">TRAVELX</Link>
            <div className="text-gray-300  md:flex md:items-center md:space-x-4 hidden">
                {menuData.map((item,index) =>(
                    <Link className="text-yellow-300 hover:text-white" to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </div>
            <div className=" flex items-center ">
            <button to="/contact" className="outline-none whitespace-nowrap border-none text-yellow-300 
            cursor-pointer transform  hover:-translate-y-0.5  py-2 items-center justify-center 
            md:flex md:items-center hidden  "> Contact Us </button>
            </div>
            <i className="flex items-center h-8 w-6  cursor-pointer  md:hidden " onClick={toggle}><FaBars className="text-white"  /></i>
           
        </nav>
    )
}

export default Navbar
