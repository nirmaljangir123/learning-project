import React from "react";
import { useDispatch } from "react-redux";
import { deleteTheme } from "../app/silce/themeSlice";

const About = () => {
  const dispatch = useDispatch();
  const handleColor = () => {
    dispatch(deleteTheme());
  };
  return (
    <>
      <div>You know very well the About page ......</div>
      <button onClick={handleColor}>Remove Global Color</button>
    </>
  );
};

export default About;
