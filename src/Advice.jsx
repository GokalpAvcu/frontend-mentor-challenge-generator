import React from "react";

const Advice = ({advice, setClick}) => {

  const clickHandler = () => {
    setClick((prev) => !prev); // click'i tersine çevir
  };

  return <button onClick={() => clickHandler()}>PUSH</button>;
};

export default Advice;
