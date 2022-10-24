import axios from "axios";
import { useEffect, useState } from "react";


function App() {

const [click, setClick] = useState(true); // click adında bir state oluşturduk ve true olarak başlattık


  async function getAdvice() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice"); // await: bu fonk. bir yanıt verene kadar bekle, yanıt geldiği zaman bu değişkeni oluştur
      console.log(response); // eğer yanıt geldiyse, bu yanıtı konsola yazdır
    } catch (error) {
      console.error(error); 
    }
  }

  useEffect(() => {
     getAdvice();
  }, [click]); // dependecy'nin içi boşsa sadece ilk renderda çalışır, içine bir şey yazarsak o değiştiğinde çalışır.

const clickHandler = () => { 
    setClick(!click); // click'i tersine çevir
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        <button onClick={() => clickHandler()}>PUSH</button>
      </h1>
    </div>
  );
}


export default App;
