import React from "react";

const About = () => {
  return (
    <div style={aboutStyle}>
      <h2>About Page</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </div>
  );
};

const aboutStyle = {
  background: "#ffffff",
  color: "#000",
  textAlign: "center",
  padding: "2rem",
};

export default About;
