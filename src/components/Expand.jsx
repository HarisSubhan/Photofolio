import React from 'react'

const Expand = ({id, myImage, show, setShow}) => {
  return (
    <>
    <div onClick={() => setShow(false)} style={{ 
      scale:`${show ? '1': '0'}`,
      background:'rgba(0,0,0,0',
      width:'100vw' ,
    height:'100vh',
    position:'fixed',
    top:0,
    zIndex:'22222222',
    transition: 'all 0.8s',
    
    
     }} className=''>

        <img className='expand mx-auto d-block' style={{ objectFit:'cover', border:'2px' }} width="50%" height="80%" src={myImage?.image} />
        
    </div>
    

    </>
  )
}

export default Expand