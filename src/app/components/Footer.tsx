import React from 'react'
import Image from 'next/image'
import logoo from "../../../public/logoo.jpg"
import { RiInstagramFill } from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <footer className=" bg-purple-600 body-font">
  <div className="container px-2 py-2 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white font-serif">
      <Image src={logoo} alt='ok' className='w-10 h-10 rounded-full bg-black-900'/>
      <span className="ml-2 text-xl">RADIYA KHAN</span>
    </a>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-96 justify-center sm:justify-start">
      <Link 
      target='_blank'
      href={"https://www.instagram.com/radiya._.345?igsh=NzQ5MTZnMTNxN2lv"} className="text-gray-800 text-2xl hover:text-pink-600">
      <RiInstagramFill />
      </Link >

      <Link 
      target='_blank'
      href={'https://www.facebook.com/profile.php?id=100083278800324&mibextid=ZbWKwL'} className="ml-4 text-gray-800  text-2xl hover:text-blue-800">
      <SiFacebook />
      </Link >

      <Link 
      target='_blank'
      href={"https://www.linkedin.com/in/radiya-khan-133b112ba"} className="ml-4 text-gray-800 text-2xl hover:text-blue-900">
      <FaLinkedin />
      </Link >

    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
