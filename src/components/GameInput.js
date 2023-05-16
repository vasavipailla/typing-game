import { useState } from "react"


const GameInput =({getRandomword ,setwords}) => {
     
  const[userinput,setUserInput] = useState("")
  // const getRandomword = props.getRandomword()
    console.log(userinput);
   
  const handelInputChange = (e) =>{
    e.preventDefault();
      setUserInput (userinput );
   
      if (userinput === setwords){

        setUserInput("");
        getRandomword();
      
       // randomword( Math.floor(Math.random() * data.length));
       // props.getData(userinput)
      } else (alert ("Please try again"))
  
  };
//   useEffect(() =>{
//     handelInputChange();
//  },[]);

  return (
   
    <div>
      <form  onSubmit= {handelInputChange}> 
      <input
      type="text"
      autoFocus
      placeholder="Type the word"
      value={userinput}
       onChange={(e) => setUserInput (e.target.value)}
      //  onClick={ ()=> {getRandomword (handelInputChange)} }
      />
       </form> 
      {/* <button onClick={ ()=> handelInputChange()  }> add</button> */}
    </div>
  )
}

export default GameInput
