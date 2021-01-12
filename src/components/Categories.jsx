import React from "react";

const Categories = React.memo(({ items, onClick }) => {
  const [activeCategory, setActiveCategory] = React.useState(null);

  const onSelectCategory = (index) => {
    setActiveCategory(index);
    onClick(index);
  };
  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onSelectCategory(null)}
          className={activeCategory === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              onClick={() => onSelectCategory(index)}
              className={activeCategory === index ? "active" : ""}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
