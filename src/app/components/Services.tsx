import React from 'react'
import { FaCode, FaYoutube } from 'react-icons/fa'
import { RiComputerLine } from 'react-icons/ri'

const Services = () => {
  return (
    <div id='services'>
      <section className="text-purple-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-medium title-font font-serif text-center text-purple-800 mb-20">
       My Services
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 text-2xl inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4 flex-shrink-0">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <FaCode />
          </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-purple-800 text-lg title-font font-serif mb-2">
            Web Development
          </h2>
          <p className="leading-relaxed text-gray-600 text-base">
            As a skilled web developer, I craft robust, scalable, and efficient web applications that meet your 
            business needs. With expertise in HTML, CSS, and JavaScript, I deliver high-quality solutions that drive
             results. From e-commerce platforms to custom web applications, I ll help you achieve your online goals.
          </p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 text-2xl inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4 flex-shrink-0">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <RiComputerLine />

          </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-purple-800 text-lg title-font font-serif  mb-2">
          UI/UX Designer
          </h2>
          <p className="leading-relaxed  text-gray-600 text-base">
            As a seasoned UI/UX designer, I specialize in creating intuitive and user-centered interfaces 
            that enhance user experience. My designs are tailored to meet your business goals and ensure seamless 
            interactions between your users and your digital products. From wireframing to prototyping, I ll work 
            closely with you to bring your vision to life.
          </p>
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex">
        <div className="w-12 h-12 text-2xl inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-4 flex-shrink-0">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <FaYoutube />
          </svg>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="text-purple-800 text-lg title-font font-serif mb-2">
            Making Thumbnail
          </h2>
          <p className="leading-relaxed text-gray-600 text-base">
            As a skilled thumbnail maker, I create eye-catching and engaging thumbnails that capture the essence of 
            your content. My thumbnails are designed to increase click-through rates and drive more traffic to your
            website. With my expertise, you can elevate your brand s online presence and make a lasting impression on
            your audience.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Services
