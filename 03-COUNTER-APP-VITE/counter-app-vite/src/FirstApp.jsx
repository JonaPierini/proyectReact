
import React from "react";

export const FirsApp = ({ titulo, subtitulo, nombre }) => {
  console.log(titulo);
  return (
    <>
      <h1 data-testid='test-title'>{titulo}</h1>
      <h2> {subtitulo} </h2>
      <p> {nombre} </p>
    </>
  );
};

export default FirsApp;
