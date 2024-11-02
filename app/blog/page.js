import React from 'react';
import fs,{readFileSync} from 'fs';
import matter from 'gray-matter';
const dirContent = fs.readdirSync("content", "utf8");
const blogs=dirContent.map((file)=>{

  const fileContent = fs.readFileSync(`content/${file}`, "utf8");
  const { data } = matter(fileContent);
  return data;
});
// const blogs = [
//   {
//     title: "Mastering JavaScript: Tips and Tricks",
//     description: "Discover the secrets to becoming a JavaScript pro with these essential tips and tricks for web developers.",
//     slug: "mastering-javascript-tips-and-tricks",
//     date: "2024-11-01",
//     author: "John Doe",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcUt04R_8GISbVc3puyNI9Puuyv2fBZ8Z5AR-i78B7JYCs5UPJTC0ZtlzPmSsSpYcsk&usqp=CAU"
//   },
//   {
//     title: "The Future of Web Development",
//     description: "Explore the latest trends and technologies shaping the future of web development in 2023 and beyond.",
//     slug: "the-future-of-web-development",
//     date: "2024-10-15",
//     author: "Jane Smith",
//     image: "https://cdn.britannica.com/30/199930-131-B3D1D347/computer.jpg"
//   },
//   {
//     title: "Building Responsive Websites",
//     description: "Learn how to create responsive websites that look great on any device with these practical tips.",
//     slug: "building-responsive-websites",
//     date: "2024-09-10",
//     author: "Alice Johnson",
//     image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
//   }
// ];

const BlogPage = () => {
  return (
<section className="bg-gray-50 dark:bg-gray-900 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
        Blog
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-4xl">
        Latest Articles
      </p>
    </div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {blogs.concat([
        {
          title: "Mastering JavaScript: Tips and Tricks",
          description: "Discover the secrets to becoming a JavaScript pro with these essential tips and tricks for web developers.",
          slug: "mastering-javascript-tips-and-tricks",
          date: "2024/11/01",
          author: "John Doe",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnkcUt04R_8GISbVc3puyNI9Puuyv2fBZ8Z5AR-i78B7JYCs5UPJTC0ZtlzPmSsSpYcsk&usqp=CAU"
        }
      ]).map((blog, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 hover:border-b-4 hover:border-purple-800">
          <img className="w-full h-48 object-cover" src={blog.image} alt={blog.title} />
          <div className="px-6 py-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
              {blog.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {blog.description}
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              By {blog.author} on {new Date(blog.date).toLocaleDateString()}
            </p>
          </div>
          <div className="px-6 py-4">
            <a href={`/blog/${blog.slug}`} className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default BlogPage;