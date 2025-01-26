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

      Hello, I'm Radiya khan, 19-year-old. Recently I complete my second year with commerce. Now I learning skills by enrolling 
      in GIAIC IT course. This exciting journey has equipped me with a solid foundation in web development, including HTML, 
      CSS, TypeScript, Next.js, Tailwindcss, React, Figma and JavaScript. 
      Currently, I'm diving deeper into Next.js to create seamless and scalable web applications.Through GIAIC program, 
      I've gained valuable insights and expertise that have opened doors to new opportunities. I'm eager to continue learning, 
      exploring, and adapting to the ever-evolving tech landscape. With each new skill and experience, I'm confident in my ability 
      to make a meaningful impact in the digital world.

      </p>
      
    </div>
  </div>
</section>

  )
}

export default Hero
