import Image from "next/image";
import Link from "next/link";
import React from "react";
import pic1 from "../../../public/pic1.jpg";
import pic2 from "../../../public/pic8.jpg";
import pic3 from "../../../public/pic3.jpg";
import pic4 from "../../../public/pic2.jpg";
import pic5 from "../../../public/pic9.jpg";
import pic6 from "../../../public/pic5.jpg";
import pic7 from "../../../public/pic6.jpg";
import pic8 from "../../../public/pic7.jpg";

const Projects = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-purple-900 font-serif">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link
                  target="_blank"
                  href={"https://html-protfolio-six.vercel.app/"}
                >
                  <Image
                    src={pic1}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:bg-purple-200 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
                      PROTFOLIO
                    </h1>
                    <p className="leading-relaxed text-sm">
                      I designed my first portfolio using HTML and CSS to
                      showcase my skills and creativity. It represents the
                      starting point of my journey in web development.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link target="_blank" href={"https://hackthon005.vercel.app/"}>
                  <Image
                    src={pic2}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:bg-purple-200 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
                      DYNAMIC RESUME BUILDER
                    </h1>
                    <p className="leading-relaxed text-sm">
                      I developed a dynamic resume builder within 24 hours,
                      showcasing my ability to create efficient and interactive
                      tools. It highlights my skills in rapid development and
                      problem-solving.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link target="_blank" href={"https://hackthon005.vercel.app/"}>
                  <Image
                    src={pic3}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:bg-purple-200 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
                      RESUME
                    </h1>
                    <p className="leading-relaxed text-sm">
                      I built a sleek and responsive resume using modern web
                      development techniques. This project showcases my
                      expertise in creating professional, user-friendly, and
                      well-structured designs.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link target="_blank" href={"https://mart-beta.vercel.app/"}>
                  <Image
                    src={pic4}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:bg-purple-200 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
                      MART
                    </h1>
                    <p className="leading-relaxed text-sm">
                      I created a mart showcasing a variety of items, focusing
                      on clean design and structured presentation. It highlights
                      my ability to create visually appealing and well-organized
                      layouts.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link
                  target="_blank"
                  href={"https://socialweb-ten.vercel.app/"}
                >
                  <Image
                    src={pic5}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:bg-purple-200 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
                      ABOUT SOCIAL MEDIA
                    </h1>
                    <p className="leading-relaxed text-sm">
                    I created a website using HTML and CSS, providing information about various social media apps. The project highlights my skills in designing visually engaging and informative web pages
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link
                  target="_blank"
                  href={"https://blog-website-self-one.vercel.app/"}
                >
                  <Image
                    src={pic6}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:bg-purple-200 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
                     FOOD AND RECIPES BLOG
                    </h1>
                    <p className="leading-relaxed text-sm">
                    I created a blog website dedicated to food and recipes, featuring an appealing design and easy navigation. It highlights my creativity in crafting content-focused platforms.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link
                  target="_blank"
                  href={"https://radiyas-clothing.vercel.app/"}
                >
                  <Image
                    src={pic7}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:bg-purple-200 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
                      CLOTHING E-COMMERCE
                    </h1>
                    <p className="leading-relaxed text-sm">
                    I developed a clothing e-commerce website with a clean design and intuitive layout. It showcases my skills in creating functional and visually appealing online stores.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Link
                  target="_blank"
                  href={"https://uiuxassigment.vercel.app/"}
                >
                  <Image
                    src={pic8}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:bg-purple-200 hover:opacity-100">
                    <h1 className="title-font text-lg font-medium text-purple-900 mb-3">
                     FURNITURE WEBSITE
                    </h1>
                    <p className="leading-relaxed text-sm">
                    I created a furniture marketplace website, offering a wide range of furniture products with an intuitive interface. It demonstrates my ability to build complex, user-centric platforms for seamless shopping experiences.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
