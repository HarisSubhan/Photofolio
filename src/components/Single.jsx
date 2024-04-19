import React from 'react'
import { FaLink } from "react-icons/fa";
import { FaExpandAlt } from "react-icons/fa";
import Expand from './Expand';

const Single = ({id, image, show, setShow, showPhoto }) => {
  return (
    <>
    <div className='position-relative touch rounded-3'  >
      <img className='rounded-3 photo' width='100%' src={image} alt="" />
      <div className='overlay d-flex fs-3 justify-content-center align-items-center rounded-3 position-absolute top-0' style={{ 
      width:'100%' , height:'100%', background:'rgba(0,0,0,0.6)', opacity: '0'
     }} >
      <div className='d-flex gap-3 icons'style={{ color: 'white' }} >
      <FaLink  />
     <FaExpandAlt onClick={() => {
      showPhoto(id)
      setShow(true)
      }}
       style={{ cursor:'pointer' }} />

      </div>
      
     </div>
     
    </div>
    </>
  )
}

export default Single