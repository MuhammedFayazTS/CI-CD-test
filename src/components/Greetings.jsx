import React from "react";
const Greetings = ({ name }) => {
  return <div>Hello {name || "Guest"}</div>;
};

export default Greetings;
