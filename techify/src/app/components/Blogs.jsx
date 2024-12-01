'use client'
import React from 'react'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa";

function Blogs() {

    const [sliderRef,slider] = useKeenSlider({
        loop: false,
        breakpoints: {
          "(min-width: 0px)": {
            slides: { perView: 1, spacing: 16 },
          },
          "(min-width: 768px)": {
            slides: { perView: 2, spacing: 16 },
          },
          "(min-width: 1024px)": {
            slides: { perView: 3, spacing: 24 },
          },
        },
      });

    const blogPosts = [
        {
          title: "Latin derived from Cicero’s 1st-century BC",
          date: "13 Feb, 2023",
          comments: "3 Comments",
          excerpt:
            "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate",
          author: "Webteck",
          authorImage:
            "/blog/author.webp",
          image:
            "/blog/blogs1.webp",
          link: "#",
        },
        {
          title: "Latin derived from Cicero’s 1st-century BC",
          date: "13 Feb, 2023",
          comments: "3 Comments",
          excerpt:
            "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate",
          author: "Webteck",
          authorImage:
            "/blog/author.webp",
          image:
            "/blog/blogs2.webp",
          link: "#",
        },
        {
          title: "Latin derived from Cicero’s 1st-century BC",
          date: "13 Feb, 2023",
          comments: "3 Comments",
          excerpt:
            "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate",
          author: "Webteck",
          authorImage:
            "/blog/author.webp",
          image:
            "/blog/blogs1.webp",
          link: "#",
        },
        {
            title: "Latin derived from Cicero’s 1st-century BC",
            date: "13 Feb, 2023",
            comments: "3 Comments",
            excerpt:
              "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate",
            author: "Webteck",
            authorImage:
              "/blog/author.webp",
            image:
              "/blog/blogs2.webp",
            link: "#",
          },
          {
            title: "Latin derived from Cicero’s 1st-century BC",
            date: "13 Feb, 2023",
            comments: "3 Comments",
            excerpt:
              "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate",
            author: "Webteck",
            authorImage:
              "/blog/author.webp",
            image:
              "/blog/blogs1.webp",
            link: "#",
          },
          {
            title: "Latin derived from Cicero’s 1st-century BC",
            date: "13 Feb, 2023",
            comments: "3 Comments",
            excerpt:
              "Rapidiously repurpose leading edge growth strategies with just in time web readiness service Objectively communicate",
            author: "Webteck",
            authorImage:
              "/blog/author.webp",
            image:
              "/blog/blogs2.webp",
            link: "#",
          },
      ];

  return (
    <section className="">
      <div className="container relative mx-auto px-5 md:px-14 xl:px-32 py-20 ">

      <div className="absolute inset-0 bg-[url('/blog/blog_bg.png')] bg-cover bg-center bg-no-repeat bg-opacity-70"></div>
      
        <div className="text-center mb-8">
          <p className="text-sm text-[#684df4] font-semibold mb-2">
            <img
              src="/blog/shape.svg"
              alt="Icon"
              className="inline-block mr-2 "
            />
            NEWS & ARTICLES
          </p>
          <h2 className="text-3xl font-bold">
            Get Every Single Update{" "}
            <span className="text-[#684df4]">Blog</span>
          </h2>
        </div>
        
      
        <div ref={sliderRef} className="keen-slider">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="keen-slider__slide flex flex-col bg-white rounded-lg  overflow-hidden"
            >
             
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
         
              <div className="p-6 shadow-4xl shadow-black border border-slate-100 rounded-b-lg">
                <div className="flex justify-between text-sm text-gray-400 mb-3">
                  <span className='flex items-center gap-1 hover:text-[#684df4]'>
                  <FaCalendarDays /> {post.date}
                  </span>
                  <span className='flex items-center gap-1 hover:text-[#684df4]'>
                  <FaRegComments /> {post.comments}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 border-b border-b-gray-300 py-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.authorImage}
                      alt={post.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm text-gray-500">By {post.author}</span>
                  </div>
                  <a
                    href={post.link}
                    className="text-[#684df4] hover:underline text-sm"
                  >
                    Read More <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
                className="absolute left-1 md:left-5 transform -translate-y-60 bg-white rounded-full p-1 md:p-3 shadow-md z-20 hover:bg-gray-200"
                onClick={() => slider?.current?.prev()}
            >
                &#x276E;
            </button>
     

          <button
                className="absolute right-1 md:right-5  transform -translate-y-60 bg-white rounded-full p-1 md:p-3 shadow-md z-20 hover:bg-gray-200"
                onClick={() => slider?.current?.next()}
            >
                &#x276F;
            </button>

        
      </div>
    </section>
  )
}

export default Blogs