

 const Game = () => {


  return (
   <>
   
   <h1>Wellcome To The Typing</h1>
   <div className="game-container">
        <div className="game-container2">
        <h2>Typing Game</h2>
            <h3>Type The Following Word :</h3>
            <h1>"Word"</h1>
            <input
            type="text"
            autoFocus
            placeholder="Type the word here"
            />
            <p>score:<span>0</span></p>
            <p>Time Left:<span>0</span></p>
        </div>

    </div>
   

   </>
  )
}
export default Game;
