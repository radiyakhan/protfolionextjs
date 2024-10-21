import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-serif text-purple-900 ">
        RADIYA KHAN
      </h1>
      <p className="mb-8 leading-relaxed ">
      Hello, I'm Radiya khan, 19-year-old. Recently I complete my second year with commerce. Now I learning skills by enrolling 
      in GIAIC IT course. This exciting journey has equipped me with a solid foundation in web development, including HTML, 
      CSS, TypeScript, and JavaScript. 
      Currently, I'm diving deeper into Next.js to create seamless and scalable web applications.Through GIAIC program, 
      I've gained valuable insights and expertise that have opened doors to new opportunities. I'm eager to continue learning, 
      exploring, and adapting to the ever-evolving tech landscape. With each new skill and experience, I'm confident in my ability 
      to make a meaningful impact in the digital world.

      </p>
      <div className="flex justify-center target:_blank">
      <a target='_blank' href="/cv/cv.pdf">
        <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg ">
          View CV
        </button>
        </a>
      </div>
    </div>
    <div className="w-96 h-auto">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        src={require("../../../public/pic.jpg")}
        width={300}
        height={300}
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default About
