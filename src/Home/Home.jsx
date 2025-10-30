import React from "react";
import Blogs from "./HomeComponent/Blogs";
import Category from "./HomeComponent/Category";

function Home() {
  return (
    <div className="container mx-auto py-5 grid grid-cols-12 gap-8">
      <div className=" col-span-8 rounded-xl">
        <Blogs/>
      </div>
      <div className="border-2 col-span-4 rounded-xl border-gray-300 p-2">
        <Category/>
      </div>
    </div>
  );
}

export default Home;
