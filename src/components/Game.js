import { useState,useEffect } from "react";
import GameInput from "./GameInput";

 const Game = () => {
   const [words,setWords] = useState([])
   const[userinput,setUserInput] = useState("")
    console.log(userinput);
  
   

    const getRandomword = () => {
     fetch("https://random-word-api.herokuapp.com/all")
     .then(res => res.json())
     .then(data => {
        let randomword = Math.floor(Math.random() * data.length);
         setWords(data[randomword]);
        //  console.log(setWords);
     });
    };
   
    useEffect(() =>{
       getRandomword();
     },[]);

     const handleSubmit = (e) => {

      e.preventDefault()
        const  insertedword = userinput.trim();
        console.log(insertedword);
        const  newword = getRandomword();

      // console.log(handleSubmit);
      

      if (insertedword === newword) {

        setUserInput("")
        getRandomword()

      }else (alert ("Please try again"))


     }
   
  return (
   <>
   
   <h1>Wellcome To The Typing</h1>
   <div className="game-container">
        <div className="game-container2">
        <h2>Typing Game</h2>
            <h3>Type The Following Word :</h3>
            <h1>  {words} </h1>
             {/* <input
            type="text"
            autoFocus
            placeholder="Type the word here"
            onClick={getRandomword}
            />  */}

              <GameInput  
               handleSubmit ={handleSubmit}
               userinput={userinput}
               handelChange={(e) => setUserInput(e.target.value)}
              /> 
            <p>score:<span>0</span></p>
            <p>Time Left:<span>0</span></p>
           
           
        </div>

    </div>
   

   </>
  )
}
export default Game;
