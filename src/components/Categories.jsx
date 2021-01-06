import React, { useState } from "react";

const Categories = ({ items, onClick }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => setActiveCategory(null)}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => setActiveCategory(index)}
              className={activeCategory === index ? "active" : ""}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
