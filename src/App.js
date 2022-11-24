import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";

import "./scss/app.scss";

//https://637c882872f3ce38eaa4fa33.mockapi.io/items

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  console.log(searchValue);
  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
