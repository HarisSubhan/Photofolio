import React, { useRef } from 'react'
import { IoCameraOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import '../globals.css'
import { CiBoxList } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Header = () => {

    const showMenu = useRef();

    const show = () =>{
        showMenu.current.style.transform= 'translateX(0)'
    }

    const hide = () =>{
        showMenu.current.style.transform= 'translateX(100%)'
    }



  return (
    <>
    <div className='d-flex justify-content-between p-3 align-items-center' >
        <div className='logo d-flex justify-content-center align-items-center' >
        <IoCameraOutline size={40} color='#27A750'/>
        <h4>PhotoFolio</h4>

        </div>
        <div className='menu ' >
            <ul ref={showMenu} className='d-flex my-menu p-0 m-0 gap-3 list-unstyled align-items-center' >
            <IoMdClose onClick={hide} className='close ms-auto text-danger' size={30} cursor="pointer" />
                <li>Home</li>
                <li>About</li>
                <li className='gallery' >
                    Gallery
                    <div  className='position-relative gallery-1' >
                        <ul className='list-unstyled bg-secondary position-absolute  p-1' >
                            <li>Nature</li>
                            <li>People</li>
                            <li>Architecture</li>
                            <li>Animals</li>
                            <li>Sports</li>
                            <li>Travels</li>
                            <li className='sub position-relative ' >
                                SubMenu
                                    <ul style={{ width:100, transform:'translate(-104%, -18px)' }} className='list-unstyled gallery-2 position-absolute left-0  bg-secondary ' >
                                        <li>SubMenu-1</li>
                                        <li>SubMenu-1</li>
                                        <li>SubMenu-1</li>
                                    </ul>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>Service</li>
                <li>Contact</li>
            </ul>

        </div>
        <div className='icon d-flex gap-2' >
        <FaInstagram color='#27A750' />
        <FaFacebook  color='#27A750'/>
        <FaTwitter  color='#27A750'/>
        <FaLinkedin  color='#27A750'/>


        </div>
        <CiBoxList onClick={show} className='list' />
    </div>
    </>
  )
}

export default Header