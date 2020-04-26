import React from "react";

const Header = () => {
  return (
    <div>
      <header style={headerStyle}>
        <h1>TodoList</h1>
      </header>
    </div>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  paddding: "10px",
};
export default Header;
