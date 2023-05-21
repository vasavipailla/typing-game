import { useState } from "react";



const GameInput =({getRandomword, words, updateScore}) => {
  const[userinput,setUserInput] = useState("")
  const [color, setColor] = useState("black");

  const mystyle = {
    fontSize: 16,
    color: color,
  };

  const toggleColor = (c) => {
    console.log("toggleColor called")
    setColor(c)
    setTimeout(() => {
      setUserInput("");
      setColor("black")
    }, 500);
  }

  const handleSubmit = (e) => {
        e.preventDefault()
        const  insertedWord = userinput.trim();
        const  newWord = {words};
     if (insertedWord === newWord.words) {
         toggleColor("green")
         updateScore();      
      } else {
        toggleColor("red")
      }
      getRandomword()
  };

  return (
   
    <div>
      <form  onSubmit= {handleSubmit}> 
        <input
        style={mystyle}
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
