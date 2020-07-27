import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");

  const addPlayer = () => {
    props.addPlayer(name);
    setName(" ");
  };

  return (
    <div className="AddPlayerForm">
      <p>
        New player:
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => {
            console.log("new input .value:", event.target.value);
            setName(event.target.value);
          }}
        />{" "}
        <button type="submit" onClick={addPlayer}>
          Add a new player
        </button>
      </p>
    </div>
  );
}
