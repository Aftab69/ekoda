import React, { useEffect, useState } from 'react'
import "./About.css"

const About = () => {
  const [ background, setBackground ] = useState("background1")

  useEffect(() => {
    setInterval(() => {
      setBackground("background2");
    }, 8000);
    setInterval(() => {
      setBackground("background1");
    }, 16000);
  }, []);
  return (
    <>
    <div id='about'>
      <div className='aboutpageContainer' id={background}>
        <div className='aboutpageHeading'><span>ABOUT US</span></div>
        <div className='aboutpageText'>
          {background==="background1"?
          <div className='aboutpagetext1'><p>EKODA is a Guwahati-based production house. We are the creators who love to tell stories through visual medium. Our services include video production like music videos, short films, documentaries, event videos, TV commercials, wedding films, photoshoots, logo designs, poster designs and artworks.
          </p></div> 
          :
          <div className='aboutpagetext2'><p>We provide production details starting from planning to coordination and finally the execution and post production. Let us help you craft your stories through our reels. Let's create together.
          </p></div>  
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default About