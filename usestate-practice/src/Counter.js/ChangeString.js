import React, { useState } from "react";

function ChangeString() {
  const [fruit, setFruit] = useState("apple");
  const [inputText, setInputText] = useState("");

  const updateText = (e) => {
    const inputTextValue = e.target.value.trim();
    setInputText(inputTextValue);
  };
  let hstyle = {};
  if (fruit === "Orange") {
    hstyle = {
      color: "orange",
    };
  } else if (fruit === "Strawberry") {
    hstyle = {
      color: "red",
    };
  } else if (fruit === "Banana") {
    hstyle = {
      color: "yellow",
    };
  }

  return (
    <>
      <div className="counter">
        This is <span style={hstyle}>{fruit}{/*{inputText}*/}</span>
      </div>
      <div>
        <input
          type="text"
          onChange={updateText}
          placeholder="please enter text.."
        ></input>
        <button onClick={() => setFruit(inputText)}>Submit</button>
      </div>
      <button onClick={() => setFruit("Orange")}>Change to Orange</button>
      <button onClick={() => setFruit("Strawberry")}>
        Change to Strawberry/red
      </button>
      <button onClick={() => setFruit("Banana")}>Change to banana/yellow</button>
    </>
  );
}

export default ChangeString;
