import React, { useEffect, useState } from "react";
import Blogs from "./HomeComponent/Blogs";
import Category from "./HomeComponent/Category";

function Home() {
  const [categoryId, setCategoryID] = useState(6)
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="container mx-auto py-5 grid grid-cols-12 gap-8">
      <div className=" col-span-8 rounded-xl">
        <Blogs categoryId={categoryId} blogs={blogs} />
      </div>
      <div className="border-2 col-span-4 rounded-xl border-gray-300 p-2">
        <Category  setCategoryID={setCategoryID}/>
        <Blogs categoryId={categoryId} blogs={blogs} />
      </div>
    </div>
  );
}

export default Home;
