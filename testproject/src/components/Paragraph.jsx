import React from "react";

const Paragraph = (props) => {
  return (
    <>
      <h1>My First Paragraph</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolore
        deleniti repellendus voluptatum unde tenetur quod delectus porro
        recusandae vel, repellat error natus officia voluptatem aut nulla sit
        rem eius.
      </p>

      <h1>{props.test}</h1>
    </>
  );
};

export default Paragraph;
