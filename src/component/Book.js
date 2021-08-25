import React from 'react'
import t1 from "../img/tra1.png"


const Book = () => {
    return (
        <div className=" bg-gray-100 w-screen">
               <h1 className="text-center text-5xl font-extrabold font-dosis text-gray-400 pt-9 pb-3  space-x-1">
                <span className="text-gray-900">B</span>
                <span className="text-gray-900">O</span>
                <span className="text-gray-900">O</span>
                <span className="text-gray-900">O</span>
                <span className="text-gray-900">K</span>
                <span className="text-gray-900">I</span>
                <span className="text-gray-900">N</span>
                <span className="text-gray-900">G</span>

            </h1>
            
            <div className=" bg-gray-100 flex flex-col-reverse justify-center items-center px-20 md:pl-40 py-10 md:justify-between md:flex-row">
                        <form className="bg-white flex-col flex px-4 py-4 mt-2 w-full gap-y-5 justify-center shadow-2xl rounded-xl">
                            <div className="w-full rounded-3xl">
                                <h3>Where to</h3>
                                <input type="text" placeholder="place name" className="w-full flex border-2 h-10 px-3 mt-2"/>
                            </div>
                            <div className="">
                                <h3>How many</h3>
                                <input type="number" placeholder="number of guests"  className="w-full flex border-2 h-10 px-3 mt-2"/>
                            </div>
                            <div className="">
                                <h3>Arrivals</h3>
                                <input type="date"  className="w-full flex border-2 h-10 px-3 mt-2"/>
                            </div>
                            <div className="">
                                <h3>Leaving</h3>
                                <input type="date"  className="w-full flex border-2 h-10 px-3 mt-2" />
                            </div>
                            <div className="flex justify-center">
                            <input type="submit" className="btn flex flex-col justify-center items-center mt- h-10 w-32 cursor-pointer bg-yellow-300 font-medium hover:bg-yellow-600" value="book now"/>
                            </div>
                          
                        </form>

                <div className="flex justify-center ">
                    <img src={t1} className=" w-5/6" ></img>
                </div>
              
            </div>
           
        </div>
    )
}

export default Book
