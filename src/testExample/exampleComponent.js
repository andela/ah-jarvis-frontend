import React, { Component } from "react";

const Hello = ({ name = "Unknown" }) => {
  return <p>Hello, {name}!</p>;
};

export default Hello;
