import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";

import { setPizzas } from "./redux/actions/pizzas";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact component={Home} path="/" />
        <Route exact component={Cart} path="/cart" />
      </div>
    </div>
  );
};

export default App;
