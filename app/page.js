"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Typed from 'typed.js';
import React from "react";  
import { useEffect,useRef } from "react";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Coding','Web Developement','Software Developement','Open Source','Data Science','Machine Learning','Artificial Intelligence'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  // <span ref={el} />
  return (
    <div>
     <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
  <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
    <h1 className="text-2xl leading-snug text-gray-800 dark:text-gray-200 md:text-3xl lg:text-4xl">
      A <span className="font-semibold">free repository</span> for
      community <br className="hidden lg:block" /> components using{" "}
      <span className="font-semibold underline decoration-primary">
      <span ref={el} />
      </span>
    </h1>{" "}
    <p className="mt-4 text-base text-gray-500 dark:text-gray-300 md:text-lg">
      Open source Tailwind UI components and templates to{" "}
      <br className="hidden lg:block" /> bootstrap your new apps, projects
      or landing sites!
    </p>{" "}
    <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
      
    </div>
  </div>{" "}
  <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
    <img
      src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
      alt="tailwind css components"
      className="w-full h-full max-w-md mx-auto"
    />
  </div>
</section>
      <section className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-black dark:text-white uppercase tracking-wide">
              Pricing
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-black dark:text-white sm:text-4xl">
              Choose the plan that’s right for you
            </p>
          </div>
          <div className="mt-10">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-12">
              <div className="bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden w-full lg:w-1/3 mb-8 lg:mb-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-purple-500">
                <div className="px-6 py-8 text-center">
                  <h3 className="text-lg leading-6 font-medium text-white bg-purple-500 p-2 rounded">
                    Basic
                  </h3>
                  <p className="mt-4 text-sm text-black dark:text-white">
                    For individuals just getting started
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-black dark:text-white">
                      $10
                    </span>
                    <span className="text-base font-medium text-black dark:text-white">
                      /month
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-200 dark:bg-gray-700">
                  <ul className="list-disc list-inside text-sm text-black dark:text-white text-center">
                    <li className="line-through">Feature 1</li>
                    <li className="line-through">Feature 2</li>
                    <li className="line-through">Feature 3</li>
                    <li>Feature 4</li>
                    <li>Feature 5</li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="block w-full text-center bg-white dark:bg-black text-purple-500 py-2 rounded-md font-bold hover:bg-blue-500 hover:text-white"
                    >
                      Choose Basic
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden w-full lg:w-1/3 mb-8 lg:mb-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-purple-500">
                <div className="px-6 py-8 text-center">
                  <h3 className="text-lg leading-6 font-medium text-white bg-purple-500 p-2 rounded">
                    Pro
                  </h3>
                  <p className="mt-4 text-sm text-black dark:text-white">
                    For professionals who need more features
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-black dark:text-white">
                      $30
                    </span>
                    <span className="text-base font-medium text-black dark:text-white">
                      /month
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-200 dark:bg-gray-700">
                  <ul className="list-disc list-inside text-sm text-black dark:text-white text-center">
                    <li className="line-through">Feature 1</li>
                    <li className="line-through">Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                    <li>Feature 5</li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="block w-full text-center bg-white dark:bg-black text-purple-500 py-2 rounded-md font-bold hover:bg-blue-500 hover:text-white"
                    >
                      Choose Pro
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden w-full lg:w-1/3 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border hover:border-purple-500">
                <div className="px-6 py-8 text-center">
                  <h3 className="text-lg leading-6 font-medium text-white bg-purple-500 p-2 rounded">
                    Enterprise
                  </h3>
                  <p className="mt-4 text-sm text-black dark:text-white">
                    For large organizations
                  </p>
                  <div className="mt-6">
                    <span className="text-4xl font-extrabold text-black dark:text-white">
                      $50
                    </span>
                    <span className="text-base font-medium text-black dark:text-white">
                      /month
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-200 dark:bg-gray-700">
                  <ul className="list-disc list-inside text-sm text-black dark:text-white text-center">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                    <li>Feature 4</li>
                    <li>Feature 5</li>
                  </ul>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="block w-full text-center bg-white dark:bg-black text-purple-500 py-2 rounded-md font-bold hover:bg-blue-500 hover:text-white"
                    >
                      Choose Enterprise
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-800 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
        Our Features
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-4xl">
        What We Offer
      </p>
    </div>
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-100 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="px-6 py-8 text-center">
            <div className="text-4xl text-purple-500 mb-4">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Fast Performance
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Experience lightning-fast load times and smooth interactions.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="px-6 py-8 text-center">
            <div className="text-4xl text-purple-500 mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Secure
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Your data is protected with industry-leading security measures.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="px-6 py-8 text-center">
            <div className="text-4xl text-purple-500 mb-4">
              <i className="fas fa-sync-alt"></i>
            </div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Always Updated
            </h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              We ensure our platform is always up-to-date with the latest features.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-50 dark:bg-gray-900 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
        Top Blog Posts
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-4xl">
        Insights and Updates
      </p>
    </div>
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 hover:border-b-4 hover:border-purple-800">
          <img className="w-full h-48 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcUt04R_8GISbVc3puyNI9Puuyv2fBZ8Z5AR-i78B7JYCs5UPJTC0ZtlzPmSsSpYcsk&usqp=CAU" alt="Blog Post 1" />
          <div className="px-6 py-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Mastering JavaScript: Tips and Tricks
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Discover the secrets to becoming a JavaScript pro with these essential tips and tricks for web developers.
            </p>
          </div>
          <div className="px-6 py-4">
            <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 hover:border-b-4 hover:border-purple-800">
          <img className="w-full h-48 object-cover" src="https://cdn.britannica.com/30/199930-131-B3D1D347/computer.jpg" alt="Blog Post 2" />
          <div className="px-6 py-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              The Future of Web Development
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Explore the latest trends and technologies shaping the future of web development in 2023 and beyond.
            </p>
          </div>
          <div className="px-6 py-4">
            <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">
              Read More
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 hover:border-b-4 hover:border-purple-800">
          <img className="w-full h-48 object-cover" src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" alt="Blog Post 3" />
          <div className="px-6 py-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              Building Responsive Websites
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Learn how to create responsive websites that look great on any device with these practical tips.
            </p>
          </div>
          <div className="px-6 py-4">
            <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
