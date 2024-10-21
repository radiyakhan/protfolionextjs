import React from 'react'
import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {
  return (
    <div>
      <section className="text-purple-600 body-font">
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-1">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-0 text-purple-900 font-serif">
       Skills
      </h1>
    </div>
    </div>
    </section>
    <div className="grid lg:grid-cols-3 lg:grid-rows-2 grid-cols-3 sm:grid sm:grid-cols-10 sm:grid-rows-2  text-center xl:gap-x-0  text-purple-500 lg:ml-36 lg:gap-1 ">
        <div className="text-6xl flex gap-20 group-hover:text-accent mb-14 border-2 w-20 border-purple-300 bg-purple-100  rounded-full  h-20 pt-3 pl-2"><FaHtml5/></div>
        <div className="text-6xl group-hover:text-accent  mb-11 border-2 w-20 border-purple-300 bg-purple-100 rounded-full h-20 pt-3 pl-2"><FaCss3/></div>
        <div className="text-5xl group-hover:text-accent  mb-11 border-2 w-20 border-purple-300 bg-purple-100 rounded-full h-20 pt-3 pl-3"><SiTypescript/></div>
        <div className="text-5xl group-hover:text-accent  mb-11 border-2 w-20 border-purple-300 bg-purple-100  h-20 rounded-full pt-3 pl-3"> <FaJs/></div>
        <div className="text-6xl group-hover:text-accent  mb-11 border-2 w-20 border-purple-300 dark:border-purple-300 bg-purple-100   h-20 rounded-full  pt-3 pl-2"> <SiTailwindcss/></div>
        <div className="text-6xl group-hover:text-accent  mb-11 border-2 w-20 border-purple-300 dark:border-purple-300 bg-purple-100   h-20 rounded-full  pt-2 pl-2"> <RiNextjsFill /></div>
          </div>


    </div>
  )
}

export default Skills
