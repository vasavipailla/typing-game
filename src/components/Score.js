 import { useState } from "react"

const Score = () =>{
    let [score,setScore]=useState(0)
   
     
    const [inputValue,setInputValue]= useState("")
    const randomWord = "vasavi"
    
    const handleSubmit = () => {
        if (inputValue === randomWord){
            score = score + 1;
             setScore(score)
        }
    }

    return(
        <div>
          {/* <label> <input type="test" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/></label>
          <button onClick={handleSubmit}>submit</button> */}
          
            <p>Score:{score}</p>
        </div>
    )

}

export default Score;