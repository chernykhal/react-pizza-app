import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact component={Home} path="/" />
        <Route exact component={Cart} path="/cart" />
      </div>
    </div>
  );
}

export default App;
