


const GameInput =({handelSubmit,userinput,handelChange}) => {
     
//   const[userinput,setUserInput] = useState("")
//   // const getRandomword = props.getRandomword()
//     console.log(userinput);
   
//   const handelInputChange = (e) =>{
//     e.preventDefault();
//       setUserInput (userinput );
   
//       if (userinput === setwords){

//         setUserInput("");
//         getRandomword();
      
//        // randomword( Math.floor(Math.random() * data.length));
//        // props.getData(userinput)
//       } else (alert ("Please try again"))
  
//   };
// //   useEffect(() =>{
// //     handelInputChange();
// //  },[]);

  return (
   
    <div>
      <form  onSubmit= {handelSubmit}> 
      <input
      type="text"
      autoFocus
      placeholder="Type the word"
      value={userinput}
       onChange={handelChange}
      //  onClick={ ()=> {getRandomword (handelInputChange)} }
      />
       </form> 
     
    </div>
  )
}

export default GameInput
