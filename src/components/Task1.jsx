import { useState } from "react";

const Task1 = () => {
  const [state, setState] = useState(false);
  console.log('event');
  console.log('event');

  const toggler = () => {
    setState(!state);
  };

  return (
    <button onClick={toggler()} style={{ background: state ? "red" : "blue" }}>
      Click Me
    </button>
  );
};


export default Task1;