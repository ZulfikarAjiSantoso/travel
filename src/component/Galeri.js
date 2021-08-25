import React from 'react'
import { Galeridata } from '../data/Galeridata'

const Galeri = () => {
    return (
        <div className=" w-screen bg-gray-100"  >
             <h1 className="text-center text-5xl font-extrabold font-dosis text-gray-400 pt-9 pb-3 space-x-1">
                <span className="text-gray-900">G</span>
                <span className="text-gray-900">a</span>
                <span className="text-gray-900">l</span>
                <span className="text-gray-900">e</span>
                <span className="text-gray-900">r</span>
                <span className="text-gray-900">i</span>

            </h1>
            <div className="bg-transparent flex-wrap flex justify-center">
                    {Galeridata.map((item, index) => {
                        return(
                            <div className=" flex justify-center items-center px-3 py-3" style={{
                                flex:"1 1 25rem"
                            }}>
                               <img className="object-cover " src={item.img} style={{
                                   width:"600px",
                                   height:"300px"

                                   
                               }} />
                            </div>
                        )
                    })}
                 

            </div>
        </div>
    )
}

export default Galeri
