import React from 'react'
import Image from 'next/image';
import logoo from "../../../public/logoo.jpg"
import { FaArrowDown } from "react-icons/fa";
import Link from 'next/link';
// import { FaArrowAltCircleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className='sticky z-50 top-0'>
      <header className=" bg-purple-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
    <a className="flex title-font font-thin font-serif items-center text-white mb-4 md:mb-0">
       <Image src={logoo} alt='ok'  className="w-10 h-10  rounded-full"/>
      <span className="ml-3 text-xl">RADIYA KHAN</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex text-white flex-wrap items-center text-base justify-center font-serif" >
      <Link href={"/"} className="mr-5 hover:text-white">Home</Link>
      <Link href={"#skills"} className="mr-5 hover:text-white">Skills</Link>
      <Link href={"#services"} className="mr-5 hover:text-white">Services</Link>
      <Link href={"#projects"} className="mr-5 hover:text-white">Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-white">Contact</Link>
    </nav>
  </div>
</header>
    </div>
  )
}

export default Header;
