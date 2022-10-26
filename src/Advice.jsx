import React from "react";

const Advice = ({ advice, setClick}) => {

  console.log(advice);

  const clickHandler = () => {
    setClick((prev) => !prev); // click'i tersine çevir
  };

  return (
    <div>
      <h1>{advice.slip.id}</h1>
      <h1>{advice.slip.advice}</h1>
      <button onClick={() => clickHandler()}>PUSH</button>;
    </div>
  );
};

export default Advice;
