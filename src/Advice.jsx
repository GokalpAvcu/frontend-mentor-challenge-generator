import React from "react";

const Advice = ({ advice, setClick}) => {
  const clickHandler = () => {
    setClick((prev) => !prev); // click'i tersine çevir
  };

  return (
    <div>
      <h1>{advice?.slip?.id}</h1> {/* ?. operatörü ile null kontrolü, null değilse id'yi yazdır */}
      <h1>{advice?.slip?.advice}</h1> 
      <button onClick={() => clickHandler()}>Push</button>
    </div>
  );
};

export default Advice;
