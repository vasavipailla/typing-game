import React from 'react'

function Modal({close}) {
  return (
    <div className='modalcontainer'>
        <div className='modalcontainer-1'>
            {/* <button onClick={() => close(false)}>x</button> */}
            <h1 className='info'>Sorry you typed wrong word </h1>
            <h2>want to continue  game click the button below </h2>
             <button className='rsgtr-btn' onClick={() => close(false)}> <p className='modal-btn'>continue</p></button>
        </div>
     </div>
  )
}

export default Modal;
