import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";

function Home() {
  const user = useSelector((state) => state.user.name);
  return (
    <div className="childComponent">
      <h1> Redux State in second component:</h1>
      <h2> user: {user} </h2>
    </div>
  );
}

export default Home;
