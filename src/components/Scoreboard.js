import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

function compareScore(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compareName(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const [sortBy, setSortBy] = useState("score");

  const playersSorted =
    sortBy === "name"
      ? [...players].sort(compareName)
      : [...players].sort(compareScore);

  function changeSorting(event) {
    console.log(`Change the sorting!`);
    setSortBy(event.target.value);
  }

  const incrementScore = (playerId) => {
    console.log("Incremeeeeeeeent!!!!!!", playerId);
    const updatedPlayers = players.map((player) => {
      if (player.id === playerId) {
        return {
          ...player,
          score: player.score + 1,
        };
      }
      return player;
    });
    set_players(updatedPlayers);
  };

  function scoreReset() {
    const resetScore = players.map((player) => {
      return {
        ...player,
        score: 0,
      };
    });
    set_players(resetScore);
  }

  function scoreRandomize() {
    const randomScore = players.map((player) => {
      return {
        ...player,
        score: Math.floor(Math.random() * 100),
      };
    });
    set_players(randomScore);
  }

  const addPlayer = (name) => {
    const newPlayer = {
      id: players.length + 1,
      name: name,
      score: 0,
    };

    const newPlayers = [...players, newPlayer];
    console.log("Let's add a new player with the name:", name);
    set_players(newPlayers);
  };

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <button onClick={scoreReset}>Reset the score of all players</button>
      <button onClick={scoreRandomize}>
        Randomize the score of each player
      </button>
      <p>
        Sort order:
        <select onChange={changeSorting} value={sortBy}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      {playersSorted.map((player) => (
        <p>
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        </p>
      ))}
      <p>
        <AddPlayerForm addPlayer={addPlayer} />
      </p>
    </div>
  );
}
