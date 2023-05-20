import { useState } from "react";

// const GameInput =({handleSubmit,userinput,handelChange}) => {
 const GameInput =({getRandomword ,words}) => {
  const[userinput,setUserInput] = useState("")
//   const[userinput,setUserInput] = useState("")
//   
   

const handleSubmit = (e) => {
        e.preventDefault()
        const  insertedWord = userinput.trim();
        const  newWord = {words};
       
     if (insertedWord === newWord.words) {
         setUserInput("")
         getRandomword()
         console.log(insertedWord);
         console.log(newWord);
      
      }else (alert ("Please try again"))
      
  
  //  }
  
  };


  return (
   
    <div>
      <form  onSubmit= {handleSubmit}> 
      <input
      type="text"
      autoFocus
      placeholder="Type the word"
      value={userinput}
      // onChange={handelChange}
      //  handelChange={(e) => setUserInput(e.target.value)}
       onChange={(e) => setUserInput(e.target.value)}
              
     
      />
       </form> 
     
    </div>
  )
}

export default GameInput
