import React from "react";

export default function Player(props) {
  const clickIncrement = () => {
    props.incrementScore(props.id);
  };

  return (
    <li className="Player">
      {props.name} (score: {props.score})
      <button onClick={clickIncrement}>+</button>
    </li>
  );
}
