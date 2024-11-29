export const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Hey thanks For Hovering Me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Abhijeet")} // Fixed to onClick
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log("Hey User, Welcome");
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <>
      <button onClick={props.onClick}>Click</button>
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};

