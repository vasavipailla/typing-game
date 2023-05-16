import { useState, useEffect } from "react";
import GameInput from "./GameInput";

const Game = () => {
  const [words, setWords] = useState([]);
  const [userinput, setUserInput] = useState("");

  const getRandomword = () => {
    fetch("https://random-word-api.herokuapp.com/all")
      .then((res) => res.json())
      .then((data) => {
        let randomword = Math.floor(Math.random() * data.length);
        setWords(data[randomword]);
        //  console.log(randomword);
      });
  };

  useEffect(() => {
    getRandomword();
  }, []);

  // create function for handling the submit, this shoudl be a check if the word is correct
  const handleSubmit = () => {
    console.log("Handle submit");
  };

  return (
    <>
      <h1>Wellcome To The Typing</h1>
      <div className="game-container">
        <div className="game-container2">
          <h2>Typing Game</h2>
          <h3>Type The Following Word :</h3>
          <h1> {words} </h1>
          {/* <input
            type="text"
            autoFocus
            placeholder="Type the word here"
            onClick={getRandomword}
            />  */}

          <GameInput
            handleSubmit={handleSubmit}
            userinput={userinput}
            handleChange={(e) => setUserInput(e.target.value)}
          />
          <p>
            score:<span>0</span>
          </p>
          <p>
            Time Left:<span>0</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Game;
