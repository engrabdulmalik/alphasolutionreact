import React from "react";
import Button from "./Button";
import "./Paragraph.css";
import img from "../../public/image.jpeg";

const Paragraph = (props) => {
  return (
    <>
      <p className="mypara">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ex omnis?
        Magnam est quo animi aperiam possimus blanditiis veniam esse, pariatur,
        aut cupiditate necessitatibus eum suscipit fugiat labore quia a.
      </p>
      <img src={img} alt="This is image" />

    </>
  );
};

export default Paragraph;
