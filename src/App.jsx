import "./App";
import { useState } from "react";

function App(params) {

  const [name, SetName] = useState("Iqra_Khalid");
  console.log(name);


  const [Count, setCount] = useState(0);





  return(
    <div>
      <h1>Application Page</h1>
      <p>You clicked {Count} times</p>
      <button onClick = {() => setCount(Count+1) }>
      Click Me
      </button>
    </div>
  )
}
export default App;