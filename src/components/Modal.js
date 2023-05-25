import React from 'react'

function Modal({close, score}) {
  return (
    <div className='modalcontainer'>
        <div className='modalcontainer-1'>
            {/* <button onClick={() => close(false)}>x</button> */}
            <h1 className='info'>Game Over</h1>
            <h2>Your Score is: {score}</h2>
            <h2>Click the button to play again </h2>
             <button className='rsgtr-btn' onClick={() => close()}> <p className='modal-btn'>continue</p></button>
        </div>
     </div>
  )
}

export default Modal;
