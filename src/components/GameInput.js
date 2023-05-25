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

  //when this function invoked it changes the color of input text 
  const toggleColor = (c) => {
    console.log("toggleColor called")
    setColor(c)
    //when the time out the input field is cleared and sets the color to black
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
         //it changes the color of input text to 'green' when input is equal to randomword
         toggleColor("green")
         updateScore();      
      } else {
        setOpenModal(true)
        //it changes the color of input text to 'red' when input is not equal to randomword
        //  toggleColor("red")
        setUserInput("")
      }
      getRandomword()
  };
     
  return (
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
