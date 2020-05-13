import React, { useState } from "react";
import ReactDOM from "react-dom";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import Home from "./components/Home";
// import ItemsList from "./components/ItemsList";
// import Item from "./components/Item";

import data from "./data";

import "./styles.css";

const App = () => {
  const [items, setItems] = useState(data);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Dan's Trinkets</h1>
        <div className="nav-links" />
        {/* <Link to="/items">Shop</Link>
          <Link to="/">Home</Link> */}
      </nav>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

{
  /* <Switch> }
<Route exact path="/">
<Home ourOwnProps={"asdfdsaf"} />
</Route>
<Route path="/items" component={ItemsList} />
<Route path="/items/:id" component={Item} />
{/* </Switch> */
}
