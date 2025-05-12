import React from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FaCalendarAlt, FaComment } from "react-icons/fa";

import foodImage1 from '../assets/blog1.jpg';
import foodImage2 from '../assets/blog2.jpg';
import foodImage3 from '../assets/blog3.jpg';

function Blog() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Get Updates on Our Foods
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[{
            img: foodImage1,
            date: '12 Aug, 2023',
            comments: 2,
            title: 'New Restaurant Town Our Pie Award Contract',
            desc: 'Explore our latest milestone as we expand into new cities with award-winning flavors.'
          },
          {
            img: foodImage2,
            date: '13 July, 2023',
            comments: 4,
            title: 'Innovative Hot Cheesy Raw Pasta Make Creator',
            desc: 'Discover the innovation behind our signature hot cheesy pasta that everyone’s talking about.'
          },
          {
            img: foodImage3,
            date: '22 May, 2023',
            comments: 3,
            title: 'Best Hot Cheesy Raw in Pasta Making Trick',
            desc: 'Secrets from the kitchen: Learn the tricks to make your own cheesy pasta at home like a pro.'
          }].map((post, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={post.img} alt={`Blog ${idx + 1}`} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex flex-wrap items-center text-sm text-red-500 mb-3 space-x-6">
                  <span className="flex items-center">
                    <FaCalendarAlt className="mr-2" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <FaComment className="mr-2" /> {post.comments} Comments
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 hover:text-red-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.desc}</p>
                <a href="#" className="inline-flex items-center font-semibold text-red-500 hover:underline">
                  Read More
                  <MdArrowOutward className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
