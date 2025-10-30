import React, { useEffect, useState } from "react";

function Category() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((category, i) => (
        <button
          className="btn btn-error text-white m-1 w-48"
          key={i}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default Category;
