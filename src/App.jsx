import Say,{Fruits,Name,} from "./ToDo.jsx"
import Abc from "./TestState.jsx"




function App() {
  const name = "Sayma Ruhi";
  let age = 23;
  let x = 10;
  let y = 20;
  let address = 20;
  let fruit = "litichi";
  

  function Rock(){
    alert("...function called Java Script...")
}
  const UserObj= {
    Name: "Saima",
    Age: 23,
    Email: "saima@gmail.com"

  }
  const UserArray= ['Sam', 'Ram', 'Raj']

  function operation(a,b, op){
    if(op =="+"){
      return a+b;

    }else if(opp=="-"){
      return a-b;
    }else{
      return a*b
    }
  }

 

  return (
    <div>
      <h1>S.Ruhi : This is my App file </h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{x * y}</h2>
      <h2>{fruit}</h2>
      
      <Fruit />
      <city />
     
      
      <h2> {operation(50,20,"+")}</h2>
      <h2>{UserObj.Email}</h2>
      <h2>{UserObj.Name}</h2>
      <h2>{UserArray[1, 0]}</h2>

      <button onClick= {Rock}>On Click</button>
      <Abc />
      
    </div>
  );
}


function Fruit() {
  return (
    <div> 
      <h2>Apple, Banana</h2>
    </div>
  );

}
export default App;
