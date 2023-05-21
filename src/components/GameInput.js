import { useState } from "react";


  const GameInput =({getRandomword, words, updateScore, toggleColor}) => {
  const[userinput,setUserInput] = useState("")


  const handleSubmit = (e) => {
        e.preventDefault()
        const  insertedWord = userinput.trim();
        const  newWord = {words};
     if (insertedWord === newWord.words) {
         toggleColor("green")
         updateScore();
         setUserInput("")      
      } else {
        toggleColor("red")
      }
      getRandomword()
  };

  return (
   
    <div>
      <form  onSubmit= {handleSubmit}> 
        <input
        type="text"
        autoFocus
        placeholder="Type the word"
        value={userinput}
        onChange={(e) => setUserInput(e.target.value)}
        />
      </form> 
     
    </div>
  )
}

export default GameInput
