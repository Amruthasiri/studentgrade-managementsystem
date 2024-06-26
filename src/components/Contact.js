import React from 'react'
import th from './Images/th.jpg.jpg'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
    
   <div className="p-16 bg-black">
    <div className=" text-white text-center text-5xl font-serif hover:text-orange-400">Contact Us</div>
   </div>
   <div>
    <ul className="flexs mx-28">
      <li className="pt-5 m-5 w-80 pb-28 mt-10 mx-28 p-3 rounded-lg text-orange-400 mb-5 bg-white text-center text-2xl  hover:bg-slate-200">
       <img className=" rounded-full p-10 "src={th} alt="person" />
       <p className=" font-serif text-xl">G.AMRUTHA SIRI</p>
      <p className=" font-serif text-lg text-slate-400">2200031206</p>
      <Link className="text-black mt-4" to="https://t.me/veerreddy1">contactus</Link>
      </li>
      <li className="pt-5 m-5 w-80 pb-28 mt-10 mx-28 p-3 rounded-lg text-orange-400 mb-5 bg-white text-center text-2xl  hover:bg-slate-200">
      <img className=" rounded-full p-10 "src={th} alt="person" />
      <p className=" font-serif text-xl">B.AKSHAYA</p>
      <p className=" font-serif text-lg text-slate-400">2200031208</p>
      <Link className="text-black  mt-4" to="https://t.me/veerreddy1">contactus</Link>
      </li>
      <li className="pt-5 m-5 w-80 pb-28 mt-10 mx-28 p-3 rounded-lg text-orange-400 mb-5 bg-white text-center text-2xl hover:bg-slate-200">
      <img className=" rounded-full p-10 "src={th} alt="person" />
      <p className=" font-serif text-xl">A.SAVYA SAI SRI</p>
      <p className=" font-serif text-lg text-slate-400">2200031205</p>
      <Link className="text-black  mt-4" to="https://t.me/veerreddy1">contactus</Link>
      
      </li>
    </ul>
   </div>
   </>
  )
}