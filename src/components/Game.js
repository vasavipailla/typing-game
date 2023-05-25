import { useState,useEffect } from "react";
import Score from "./Score.js"
import Time from "./Time.js";
import GameInput from "./GameInput";
import Modal from "./Modal.js";

 const Game = () => {
   const [words,setWords] = useState([])
   let  [score,setScore] = useState(0);
   const [wordTimeLeft, setWordTimeLeft] = useState(10);
   const [gameTimeLeft, setGameTimeLeft] = useState(60);
   const [openmodal,setOpenModal] = useState(false)
  
    //  A function to get random word from external open api.
   const getRandomword = () => {
    fetch("https://random-word-api.vercel.app/api?words=100")
    // fetch("https://random-word-api.herokuapp.com/all")
    .then(res => res.json())
    .then(data => {
        let randomword = Math.floor(Math.random() * data.length);
        setWords(data[randomword]);
        setWordTimeLeft(10)
        console.log(setWords);
    });
   };

  const updateScore = () => {
    let previousScore = score
    previousScore++ ;
    setScore(previousScore);
  };

  const handleWordTimeOut = () => {
    getRandomword();
  };

  const handleGameTimeOut = () => {
     alert("Timeout GameOver ")
       window.location.reload();
  };

    // to stop page mount when ever a new random word gets generate
    useEffect(() =>{
        getRandomword();
    },[]);


    useEffect(() => {
      if (!wordTimeLeft) {
         handleWordTimeOut()
      }
      const intervalId = setInterval(() => {
        setWordTimeLeft(wordTimeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }, [wordTimeLeft]);
   
    useEffect(() => {
      if (!gameTimeLeft) {
        handleGameTimeOut()
         window.location.reload();
      }
      const intervalId = setInterval(() => {
        setGameTimeLeft(gameTimeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }, [gameTimeLeft]);
 
    return (
   <>
   
   <div className="game-container">
      <h1 className="gametitle">Welcome To The Typing Game</h1>
        <div className="game-container2">
          {openmodal && <Modal close={setOpenModal} />} 
          <h3>Type The Following Word :</h3>
          <h1 className="gametitle">  {words} </h1>
          <GameInput  
            getRandomword={getRandomword} words={words} updateScore={updateScore}
          /> 
          <div className="scorebox">
            <Score  score={score}/>
          </div>
          <div className="time-container">
            <div className="wordtimebox">
              <Time timeLeft={wordTimeLeft} title={"WordTime"}/>
            </div>
            <div className="wordtimebox">
                <Time timeLeft={gameTimeLeft} title={"GameTime"}/> 
            </div>
          </div>
        </div>
    </div>
   </>
  )
}
export default Game;
