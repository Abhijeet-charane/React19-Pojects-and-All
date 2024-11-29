import "./EV.css" ;
export const EventPropagation = () => {
  const handleGrandParent = () => {
    console.log("GrandParent clicked");
    
  };

  const handleParentClick = (event) => {
    console.log("Parent Clicked");
    event.stopPropagation();
  };

  const handleChildClick = (event) => {
    console.log(event);
    event.stopPropagation();
    console.log("child clicked");
  };
  return (
    <section className="main-div">
      <div className="g-div" onClickCapture={handleGrandParent}>
        <div className="p-div" onClickCapture={handleParentClick}>
          <button className="c-div" onClickCapture={handleChildClick}>
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};
