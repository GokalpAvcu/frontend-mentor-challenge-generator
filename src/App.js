import axios from "axios";
import { useEffect, useState } from "react";
import Advice from "./Advice";

function App() {
  // click adında bir state oluşturduk ve true olarak başlattık useState şu işe yarıyor: bir state oluşturmak ve bu state'in ilk değerini belirlemek için kullanılır.
  const [click, setClick] = useState(true); 
  const [advice, setAdvice] = useState({}); 
  // advice adında bir state oluşturduk ve boş bir obje olarak başlattık

  async function getAdvice() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice"); // await: bu fonk. bir yanıt verene kadar bekle, yanıt geldiği zaman bu değişkeni oluştur
      setAdvice(response.data); // response.data.slip.advice: api'den gelen verilerin içinden advice kısmını aldık
      console.log(advice);
    } catch (error) {
      console.error(error);
    }
  }

  // useEffect neden kullanırız ? : bir state değiştiğinde veya bir component render olduğunda bir fonk. çalıştırmak için kullanılır
  useEffect(() => {
    getAdvice();
  }, [click]); // dependecy'nin içi boşsa sadece ilk renderda çalışır, içine bir şey yazarsak o değiştiğinde çalışır.


  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        <Advice advice={advice} setClick={setClick}/>
      </h1>
    </div>
  );
}

export default App;
