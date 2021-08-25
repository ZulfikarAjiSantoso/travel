import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="w-screen pt-20 flex flex-col justify-center " >
                <div className="container flex flex-wrap justify-center md:pl-32 px-20 py-3 gap-x-3 gap-y-5 md:ml-12">
                    <div style={{flex:'1 1 19rem'}}>
                        <h3 className="font-bold">Travelx</h3>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Assumenda Quas Magni Pariatur Est Accusantium Voluptas Enim Nemo Facilis Sit Debitis.</p>
                    </div>
                    <div className="flex flex-col" style={{
                        flex:'1 1 15rem'}}>
                        <h3 className="flex flex-row font-bold">Quick Links</h3>
                        <Link>Packages</Link>
                        <Link>Galeri</Link>
                        <Link>Book</Link>
                    </div>
                    <div className="flex flex-col" style={{flex:'1 1 15rem'}}>
                        <h3 className="font-bold">Support</h3>
                        <Link>Pesona Indonesia</Link>
                        <Link>Travel.id</Link>
                        <Link>Wonderfulindonesia</Link>
                    </div>
                    <div className="flex flex-col" style={{flex:'1 1 15rem'}}>
                        <h3 className="font-bold">Social Media</h3>
                        <Link>Facebook</Link>
                        <Link>Instagram</Link>
                        <Link>Twitter</Link>
                    </div>
               </div>
               <div className="px-20">
                   <h6 className="flex justify-center tracking-wide"><AiOutlineCopyrightCircle className="flex flex-col items-center justify-center mt-1 mr-1" />2021 <b className="mx-2"> by</b> <span className="mr-1"> Zulfikar Aji S</span> | All Rights Reserved!</h6>
               </div>

        </div> 
    )
}

export default Footer
