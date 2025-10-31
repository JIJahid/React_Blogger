import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

function Blogs({ blogs , categoryId }) {
  const filteredBlog = categoryId !== 6 ? blogs.filter((blog,i)=>{
    return blog.category_id == categoryId
  }) : blogs
  console.log(filteredBlog);
  
  return (
    <div>
      {filteredBlog.map((blog, i) => (
        <BlogCard key={i} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;
