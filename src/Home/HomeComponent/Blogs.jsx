import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

function Blogs() {
  const [blogs, setBlogs]=useState([])
  useEffect(()=>{
    fetch("blog.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div>
      {blogs.map((blog,i)=>(<BlogCard key={i} blog={blog}/>))}
    </div>
  )
}

export default Blogs