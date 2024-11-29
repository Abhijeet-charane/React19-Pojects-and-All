import { useState } from "react";

export const LiftingState = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
      <DisplayComponent inputValue={inputValue} />
    </>
  );
};
const InputComponent = ({inputValue, setInputValue}) => {
  
  return (
    <>
      <input type="text" placeholder="type your name" value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)}/>
    </>
  );
};

const DisplayComponent = ({inputValue}) => {
  return <p>The Current input value is: {inputValue} </p>;
};
