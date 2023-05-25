import { useState } from "react";
 import Modal from "./Modal.js";

const GameInput =({getRandomword, words, updateScore}) => {
  const[userinput,setUserInput] = useState("")
  const [color, setColor] = useState("black");
  const [openmodal,setOpenModal] = useState(false)
  
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
  //  A function to do clear  input feild if the user typed word is same as generated random word from api.
  const handleSubmit = (e) => {
        e.preventDefault()
        const  insertedWord = userinput.trim();
        const  newWord = {words};
     if (insertedWord === newWord.words) {
         toggleColor("green")
         updateScore();      
      } else {
        setOpenModal(true)
        //  toggleColor("red")
        setUserInput("")
      }
      getRandomword()
  };
     
  return (
    //  A modal is used to pop  up  a message if the users typed the wrong word 
    <div>
       {openmodal && <Modal close={setOpenModal} />}  
      <form  onSubmit= {handleSubmit}> 
        <input 
        className="game-input"
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
