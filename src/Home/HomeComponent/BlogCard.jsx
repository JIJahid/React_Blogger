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
            <p>{blog.date}</p>
          </div>
          <p>{blog.short_description}</p>
          <div className="flex">
            <p>Total Views : {blog.views}</p>
            <p>Read Time : {blog.read_time}</p>
          </div>
          <div className="card-actions justify-end">
            <button  onClick={() => document.getElementById("my_modal_3").showModal()} className="btn btn-error text-white">Read More</button>
          </div>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
     
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
}

export default BlogCard;
