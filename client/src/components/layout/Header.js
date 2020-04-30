import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>My TodoList</h1>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </header>
    </div>
  );
};

const headerStyle = {
  background: "#FDBD2C",
  color: "#000",
  textAlign: "center",
  paddding: "10px",
};
export default Header;
