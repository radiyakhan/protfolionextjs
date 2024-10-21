import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div id='projects'>
      <section className="text-purple-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-900 font-serif">
       My Projects
      </h1>

    </div>
    <div className="flex flex-wrap -m-4 cursor-pointer">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative ">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/p1.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
              STATIC RESUME BUILDER
            </h1>
            <p className="leading-relaxed text-purple-500">
              Successfully created a HTML static resume 
            </p>
            <Link target="_blank" href={"https://hackthon1-2.vercel.app/"}>
            <p className="leading-relaxed text-indigo-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/p2.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
              DYNAMIC RESUME BUILDER
            </h1>
            <p className="leading-relaxed text-purple-500">
              Successfully created a HTML dynamic resume
            </p>
            <Link target="_blank" href={"https://hackthon3.vercel.app/"}>
            <p className="leading-relaxed text-indigo-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/p3.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
              EDITABLE RESUME BUILDER
            </h1>
            <p className="leading-relaxed text-purple-500">
              Successfully created a HTML Editable resume 
            </p>
            <Link target="_blank" href={"https://hackthon3-sgax.vercel.app/"}>
            <p className="leading-relaxed text-indigo-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/p4.jpg")}
          />
          <div className="px-8 py-7 relative z-10 w-full border-4 border-purple-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
              UNIQUE PATH & SHAREABLE LINK
            </h1>
            <p className="leading-relaxed text-purple-500">
              Successfully created a HTML unique path & shareable link 
            </p>
            <Link target="_blank" href={"https://hackthon005.vercel.app/"}>
            <p className="leading-relaxed text-indigo-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/p5.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-purple-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
              HTML PROTFOLIO
            </h1>
            <p className="leading-relaxed text-purple-500">
              Successfully created Protfolio by HTML 
            </p>
            <Link target="_blank" href={"https://html-protfolio-six.vercel.app/"}>
            <p className="leading-relaxed text-indigo-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects
