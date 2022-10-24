import axios from "axios";
import { useEffect, useState } from "react";
import Advice from "./Advice";

function App() {
  const [click, setClick] = useState(true); // click adında bir state oluşturduk ve true olarak başlattık
  const [advice, setAdvice] = useState(); // advice adında bir state oluşturduk ve boş bir obje olarak başlattık

  async function getAdvice() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice"); // await: bu fonk. bir yanıt verene kadar bekle, yanıt geldiği zaman bu değişkeni oluştur
      setAdvice(response.data.slip.advice); // response.data.slip.advice: api'den gelen verilerin içinden advice kısmını aldık
      console.log(advice);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAdvice();
  }, [click]); // dependecy'nin içi boşsa sadece ilk renderda çalışır, içine bir şey yazarsak o değiştiğinde çalışır.

  const clickHandler = () => {
    setClick(!click); // click'i tersine çevir
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        <Advice />
        <button onClick={() => clickHandler()}>PUSH</button>
      </h1>
    </div>
  );
}

export default App;
