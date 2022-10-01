import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import "./Navbar.css"
import logo from "./Images/logo.png"
import facebook from "./Images/facebookicon.png"
import instagram from "./Images/instagramicon.png"
import whatsapp from "./Images/whatsappicon.png"

const Navbar = () => {
  const [ active, setActive ] = useState(false)
  const handleHamburger = () =>{
    setActive(true)
    document.getElementById("bar2").style.opacity = 0
    // eslint-disable-next-line
    document.getElementById("bar1").style.transform = "translateY(8px)"+"rotate(45deg)"
    // eslint-disable-next-line
    document.getElementById("bar3").style.transform = "translateY(-8px)"+"rotate(-45deg)"
  }
  const revertHamburger = () =>{
    setActive(false)
    document.getElementById("bar2").style.opacity = 1
    // eslint-disable-next-line
    document.getElementById("bar1").style.transform = "translateY(0)"+"rotate(0)"
    // eslint-disable-next-line
    document.getElementById("bar3").style.transform = "translateY(0)"+"rotate(0)"
  }
  return (
    <>
        <nav id='home'>
          <div className='logoContainer'>
            <HashLink smooth to="#home" style={{textDecoration:"none"}}><img src={logo} alt={logo} /></HashLink>
          </div>
          <div className='linksContainer'>
            <HashLink smooth to="#services" style={{textDecoration:"none"}}><span>SERVICES</span></HashLink>
            <HashLink smooth to="#projects" style={{textDecoration:"none"}}><span>PROJECTS</span></HashLink>
            <HashLink smooth to="#about" style={{textDecoration:"none"}}><span>ABOUT</span></HashLink>
            <HashLink smooth to="#contact" style={{textDecoration:"none"}}><span>CONTACT</span></HashLink>
          </div>
          <div className='sociallinksContainer'>
            <a href="https://www.facebook.com/ekodaproductions" target="_blank" rel="noreferrer"><img src={facebook} alt={facebook} /></a>
            <a href="https://www.instagram.com/ekodaproductions?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><img src={instagram} alt={instagram} /></a>
            <a href='https://wa.me/+917002401695/' target="_blank" rel="noreferrer"><img src={whatsapp} alt={whatsapp} /></a>
          </div>
          <div className='hamburger' onClick={()=>{
            if(active===false){
              handleHamburger()
            } else if(active===true){
              revertHamburger()
            }
          }}>
            <span className='bar' id='bar1'></span>
            <span className='bar' id='bar2'></span>
            <span className='bar' id='bar3'></span>
          </div>
        </nav>
        {(active===true) ?
        <div className='hamburgermenuContainer'>
          <HashLink smooth to="#services" onClick={()=>{setActive(false);revertHamburger()}} style={{textDecoration:"none",color:"white"}}><p>SERVICES</p></HashLink>
          <HashLink smooth to="#projects" onClick={()=>{setActive(false);revertHamburger()}} style={{textDecoration:"none",color:"white"}}><p>PROJECTS</p></HashLink>
          <HashLink smooth to="#about" onClick={()=>{setActive(false);revertHamburger()}} style={{textDecoration:"none",color:"white"}}><p>ABOUT</p></HashLink>
          <HashLink smooth to="#contact" onClick={()=>{setActive(false);revertHamburger()}} style={{textDecoration:"none",color:"white"}}><p>CONTACT</p></HashLink>
        </div>
        :
        <>
        </>
        }
    </>
  )
}

export default Navbar