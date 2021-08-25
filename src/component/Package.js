import React from 'react'
import { Packdata } from '../data/Packdata'
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import {FaMapMarkerAlt} from "react-icons/fa"

const Package = () => {
    return (
        <div className="bg-gray-100 justify-center flex flex-col items-center">
            <h1 className="text-5xl font-extrabold font-dosis text-gray-300 my-10 space-x-1">
                <span className="text-gray-900">P</span>
                <span className="text-gray-900">a</span>
                <span className="text-gray-900">c</span>
                <span className="text-gray-900">k</span>
                <span className="text-gray-900">a</span>
                <span className="text-gray-900">g</span>
                <span className="text-gray-900">e</span>
                <span className="text-gray-900">s</span>
            </h1>
            
            <div className="container  flex flex-wrap overflow-hidden space-y-5 md:space-y-0">
                {Packdata.map ((item, index) =>{
                    return(
                        <div className="flex md:flex-col justify-center items-center " style={{
                            flex:"1 1 1mm"
                        }}>
                            
                            <img src={item.img} className="object-cover rounded-t-xl" style={{
                                width:"23rem",
                                height:"17rem"
                            }}></img>
                            <div className="flex flex-col -mt-9 px-2 md:mb-3 shadow-2xl rounded-b-xl" style={{
                                width:"23rem",
                       
                            }}>
                                <h3 className="text-gray-200 font-semibold flex inline-block m-2"><FaMapMarkerAlt className="text-yellow-300 mr-2"/>{item.name}</h3>
                                <p className="">{item.desc}</p>
                                <div className="flex text-yellow-300 text-xl ml-2 mb-2 mt-2 "> 
                                    <i><AiFillStar/></i>
                                    <i><AiFillStar/></i>
                                    <i><AiFillStar/></i>
                                    <i><AiFillStar/></i>
                                    <i><AiOutlineStar/></i>
                                </div>
                                <div>
                                <button to="" className=" bg-yellow-400 text-white font-sans hover:bg-transparent hover:text-yellow-400 border-2 hover:border-yellow-400  w-32 h-10 mt-2 ml-2 mb-2">{item.but}</button>
                                </div>
                               
                            </div>
                        
                        </div>
                        
                    )
                }
                
                )}
               
            </div>
        </div>
    )
}

export default Package
