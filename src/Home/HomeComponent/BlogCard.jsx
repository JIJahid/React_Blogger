import React from "react";

function BlogCard({ blog }) {
  return (
    <div className=" mb-5 border-2 border-gray-200 rounded-xl">
      <div className="card card-side bg-base-100 shadow-sm p-5">
        <figure>
          <img className="w-40" src={blog.image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <div className="flex font-semibold">
            <p className="font-bold">{blog.author}</p>
            <p >{blog.date}</p >
          </div>
          <p>{blog.short_description}</p>
          <div className="flex">
            <p>Total Views : {blog.views}</p>
            <p>Read Time : {blog.read_time}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-error text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
