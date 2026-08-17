import { useState } from "react";
function App() {

  // let value = 0;

  // const incCount = () => {
  //   console.log('Add func', value);
  //   value = value+1;
  // }

  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>Chai Aur Code: {counter}</h1>
      <button onClick={() => {if(counter<20) setCounter(counter+1)}}>Increase Count</button>
      <br />
      <br />
      <button 
        onClick={() => {
          if(counter>0) setCounter(counter-1);
        }}>Decrease Count</button>
    </>
  )
}

export default App
