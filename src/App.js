import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";

import setPizzas from "./redux/actions/pizzas";

// function App() {
//   useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route exact render={() => <Home items={pizzas} />} path="/" />
//         <Route exact component={Cart} path="/cart" />
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route
            exact
            render={() => <Home items={this.props.items} />}
            path="/"
          />
          <Route exact component={Cart} path="/cart" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
