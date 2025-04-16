import { useCallback } from "react";
import { useState } from "react";

function Abc() {
  const [fruit, setFruit] = useState("Apple");
  const [city, setCity] = useState("Patna");
  const [name, setName] = useState("Sayma");
  const [grade, setGrade] = useState("Grade-A");

  const handleFruit = () => {
    setFruit("Litichi");
  };
    
    const handleCity = () => {
      setCity("USA");
  };

  

  const handleClass =() => {
    setGrade("Grade- B");
  }

  

  return (
    <div>
      <h1> date 4/16/2025</h1>
      <h3>Todat is Wednesday.</h3>
      <h1>Practicing State</h1>
      <h2>{fruit}</h2>
      <button onClick={handleFruit}>Change Fruits Name</button>
      <h2>{grade}</h2>
      <button onClick= {handleClass}>Change Grade</button>
      <h2>{city}</h2>
      <button onClick={handleCity}>Change City Name</button>
      <h2>{name}</h2>
      <button onClick={() =>setName ("Wajid")}>Change Name</button>
    </div>
  );
}
export default Abc;
