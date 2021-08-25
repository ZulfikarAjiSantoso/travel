 import React from 'react'
import video from "../assets/videos/vid.mp4"

const Home = () => {
    return (
        <div className="flex  flex-col justify-center items-center h-screen z-0" >
            <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full overflow-hidden ">
                <video src={video} type="video/mp4" className='w-full h-full -object-cover object-cover' autoPlay muted loop playsInline  />
            </div>
            <div className="z-40 flex flex-col justify-center  items-center" >
                <h1 className="font-dosis font-bold text-4xl  text-white">Let's Travel with Me</h1>
                <p className="text-white mt-1">The other side of the world</p>
                <button to="/book" className=' bg-yellow-300 mt-4 py-3 w-40 ' id="">
                    Travel Now
                </button>   
            </div>
        </div>
    )
}

export default Home
 