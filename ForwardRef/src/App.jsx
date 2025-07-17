import Input from "./Input";
import React from "react";

export const userData = {
  name: "",
  email: "",
};

export function App() {
  const userName = React.useRef();
  const userEmail = React.useRef();
  function handleSaveData() {
    userData.name = userName.current.value;
    userData.email = userEmail.current.value;
    userName.current.value = "";
    userEmail.current.value = "";

    console.log(userData);
  }

  return (
    <div id="app">
      <Input ref={userName} type="text" label="Your Name" />
      <Input ref={userEmail} type="email" label="Your E-Mail" />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>
    </div>
  );
}
