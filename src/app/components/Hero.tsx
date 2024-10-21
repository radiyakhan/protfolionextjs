"use client";
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
      <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custome-image">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-1/6 md:w-3/6 w-[1000px] mb-10  object-cover object-center rounded"
      alt="hero"
      src={require('../../../public/pic.jpg')}
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-800 font-serif ">
        I am
        <br />
        <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <p className="mb-8 leading-relaxed text-black">
      Hey! Welcome to my portfolio! I am Radhiya Khan, a motivated web development student with a strong focus on HTML, CSS, TypeScript, JavaScript, and Next.js. Leveraging GIAIC resources, I am dedicated to continuous learning and skill-building. Explore my projects, witness my growth, and join me on this exciting journey into the world of web development.
      </p>
      
    </div>
  </div>
</section>

  )
}

export default Hero
