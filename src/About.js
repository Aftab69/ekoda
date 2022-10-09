import React from 'react'
import "./About.css"
import Fade from 'react-reveal/Fade'


const About = () => {
  return (
    <>
    <div id='about'>
      <div className='aboutpageContainer1' id='background1'>
        <div className='aboutpageHeading'><span>ABOUT US</span></div>
        <div className='aboutpageText'>
          <Fade bottom><div className='aboutpagetext1'><p>EKODA is a Guwahati-based production house. We are the creators who love to tell stories through visual medium. Our services include video production like music videos, short films, documentaries, event videos, TV commercials, wedding films, photoshoots, logo designs, poster designs and artworks.We provide production details starting from planning to coordination and finally the execution and post production. Let us help you craft your stories through our reels. Let's create together.
          </p></div></Fade>
        </div>
      </div>
    </div>
    </>
  )
}

export default About