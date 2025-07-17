import React from "react";

// // input[type="file"] {
//   display: none;
// }

function App() {
  const filePicker = React.useRef();

  const handleClick = () => {
    filePicker.current.click();
  };

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          ref={filePicker}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={handleClick}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
