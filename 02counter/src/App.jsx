import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useState(); //the value inside "useState()" could be anything :- it could be '[]', '{}', 'true', 'false' and many more etc... , as for now we're putting "15" as we need it as default value.

  let [counter, setCounter] = useState(1); //on 0th index the value could be anything 'counter' or 'SuperMan' and on the 1st index it is Function. and because of name-Convention we've put the name 'setCounter' not necessary, it could be
  // "let [counter, 'HiteshCounter'] " hitesh counter also ****.

  // The "setCounter" is a function responsible to Update the "counter" (variable) value.

  // let counter = 15; now we don't need this part as it won't be propagating into the UI.

  const addValue = () => {
    // console.log("Value Added !", Math.random()) for first trial, as just for checking !!
    // console.log("Clicked !", counter);
    // counter = counter + 1;
    // setCounter(counter) OR
    setCounter(counter + 1);
  };

  // const singuClicku = () => {
  //   console.log(`OO bhai single click kar rha hain tu, Double Click kar phir Jaadu dekh 😂😂${Math.random()}`);
  // }  Just for Fun 😂😂

  const removeValue = () => {
    if (counter > 0)
    // console.log(`The Value has been Removed or Decreased by 1 ${counter}`)
    setCounter(counter - 1);
  };

  return (
    <>
      //just for fun I've put this "{counter}" in different places !
      <h1> Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        // onClick={singuClicku}
        onClick={addValue}
      >
        Add Value {counter}
      </button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
