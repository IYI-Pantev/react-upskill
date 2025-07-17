import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  // const [submitedName, setSubmitedName] = useState(false);

  //Ref value
  const inputName = useRef(); //{ current: undefined } initially

  // const handleChange = (e) => {
  //   setSubmitedName(false);
  //   setPlayerName(e.target.value);
  // };

  const handleSubmit = () => {
    // setSubmitedName(true);
    setPlayerName(inputName.current.value); //value property comes from connected input with ref prop
    inputName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={inputName} //connects it to useRef
          type="text"
          // onChange={handleChange}
          // value={playerName}
          placeholder="Enter your name..."
        />

        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
