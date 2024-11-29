import "./EV.css"

export const EventHandling = () => {

  function handleButtonClick() {
    alert("Hey I Am onClick Event")
  }
  return(
    <>
    <button onClick={handleButtonClick}>Click Me</button></>
  )
}