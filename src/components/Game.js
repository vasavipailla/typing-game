import { useState,useEffect } from "react";
import Score from "./Score.js"
import Time from "./Time.js";
 const Game = () => {
   const [words,setWords] = useState([])
   let [score,setScore] = useState(0);
   const [color, setColor] = useState("black");
   const [userInput, setUserInput] = useState("");
   const [wordTimeLeft, setWordTimeLeft] = useState(10);
   const [gameTimeLeft, setGameTimeLeft] = useState(60);

   const mystyle = {
    fontSize: 16,
    color: color,
  };

   const getRandomword = () => {
    fetch("https://random-word-api.herokuapp.com/all")
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

  const toggleColor = (c) => {
    setColor(c)
    setTimeout(() => {
      setUserInput("");
      setColor("black")
    }, 500);
  }
  
  

  const handleWordTimeOut = () => {
    getRandomword();
  };

  const handleGameTimeOut = () => {
    alert("Timeout GameOver")
     window.location.reload();
  };


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
      }
      const intervalId = setInterval(() => {
        setGameTimeLeft(gameTimeLeft - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }, [gameTimeLeft]);
 
    return (
   <>
   
   <h1>Wellcome To The Typing</h1>
   <div className="game-container">
        <div className="game-container2">
        <h2>Typing Game</h2>
            <h3>Type The Following Word :</h3>
            <h1>  {words} </h1>
              <GameInput  
              getRandomword={getRandomword} words={words} updateScore={updateScore} toggleColor={toggleColor}
              /> 
            <Score  score={score}/>
            <Time timeLeft={wordTimeLeft} title={"WordTime"}/>
            <Time timeLeft={gameTimeLeft} title={"GameTime"}/> 
          
        </div>
    </div>
   </>
  )
}
export default Game;
