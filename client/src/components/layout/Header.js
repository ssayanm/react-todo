import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>Sayan TodoList</h1>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </header>
    </div>
  );
};

const headerStyle = {
  background: "#00CED1",
  color: "#000",
  textAlign: "center",
  padding: "2rem",
};
export default Header;
