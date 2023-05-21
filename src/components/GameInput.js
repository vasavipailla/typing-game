import { useState } from "react";


  const GameInput =({getRandomword ,words}) => {
  const[userinput,setUserInput] = useState("")


  const handleSubmit = (e) => {
        e.preventDefault()
        const  insertedWord = userinput.trim();
        const  newWord = {words};
       
     if (insertedWord === newWord.words) {
         setUserInput("")
         getRandomword()
        //  console.log(insertedWord);
        //  console.log(newWord);
      
      }else (alert ("Please try again"))
      
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
