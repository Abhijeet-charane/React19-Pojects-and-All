import { useEffect, useState } from "react";
import "./index.css";

export const Challenge = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");


  useEffect(() => {
    document.title = `count: ${count}`
  }, [count])

  useEffect(() => {
    console.log(name);
    
  }, [name]);

  return (
    <div className="container effect-container">
      <h1>UseEffect Challenge</h1>
      <p>
        Count:<span> {count} </span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name: <span> {name} </span>
      </p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};
