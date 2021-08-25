import React from 'react'

const Subs = () => {
    return (
        <div className="bg-yellow-400 h-52 w-screen py-6 ">
            <div className="h-40 justify-center flex flex-col items-center  gap-x-32  md:flex-row   gap-y-5">
                <div className="flex-col flex justify-center items-center">
                <h1 className="flex justify-center font-bold text-3xl">Subscribe Our Website </h1>
                <p className="">Subscribe to our newsletter and get a special
                    <br/> <b className="flex justify-center items-center"> 30% discount.</b>
                </p>
                </div>
             
                <form action="" className="mt-4 bg-white w-96 flex justify-between items-center py-2 px-3 h-20   gap-x-1">
                    <input type="text" placeholder="Enter email" class= "px-3 py-5 h-10 w-60"/>
                    <button class="font-medium button flex flex-col items-center justify-center bg-yellow-300 px-3 py-5 h-10 w-60 ">
                        Subscribe
                    </button>
                 </form>
            </div>
        </div>
    )
}

export default Subs
