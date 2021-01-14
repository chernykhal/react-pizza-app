import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Categories,
  PizzaBlock,
  SortPopup,
  PizzaLoadingBlock,
} from "../components";

import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

const categoryName = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "aplhabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch, category]);

  const onClickCategory = React.useCallback(
    (category) => {
      dispatch(setCategory(category));
    },
    [dispatch]
  );

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onClickCategory}
          activeCategory={category}
          items={categoryName}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
