import React, { useEffect, useState } from 'react'
import "./About.css"
import cofounder1 from "./Images/cofounder1.jpg"
import cofounder2 from "./Images/cofounder2.jpg"
import icon1 from "./Images/facebookicon2.png"
import icon2 from "./Images/instagramicon2.png"
import achievement1 from "./Images/achievement1.jpg"
import achievement2 from "./Images/achievement2.jpg"
import achievement3 from "./Images/achievement3.jpg"
import achievement4 from "./Images/achievement4.jpg"
import achievement5 from "./Images/achievement5.jpg"
import achievement6 from "./Images/achievement6.jpg"
import article1 from "./Images/article1.png"
import article2 from "./Images/article2.png"
import article3 from "./Images/article3.png"
import article4 from "./Images/article4.png"

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
    <div className='aboutpagesecondContainer'>
      <div className='cofoundersContainer'>
        <div className='cofoundersHeading'><p>CO-FOUNDERS</p></div>
        <div className='cofoundersContent'>
          <div className='cofounder1box'>
            <div className='cofounderImages'><img src={cofounder1} alt={cofounder1} /></div>
            <div className='cofoundersText'><p>Maaruf Bin Rafique</p></div>
            <div className='cofoundersText'><p>Cinematographer/Editor</p></div>
            <div className='iconImages'>
              <a href='https://www.facebook.com/maaruf21/' target="_black"><img src={icon1} alt={icon1} /></a>
              <a href='https://www.instagram.com/maaruf21/' target="_black"><img src={icon2} alt={icon2} /></a>
            </div>
          </div>
          <div className='cofounder2box'>
            <div className='cofounderImages'><img src={cofounder2} alt={cofounder2} /></div>
            <div className='cofoundersText'><p>Priyanka Sohoria</p></div>
            <div className='cofoundersText'><p>Writer/Director</p></div>
            <div className='iconImages'>
              <a href='https://www.facebook.com/priyanka.saharia.9' target="_black"><img src={icon1} alt={icon1} /></a>
              <a href='https://www.instagram.com/priyankasohoria/' target="_black"><img src={icon2} alt={icon2} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='achievementsContainer'>
        <div className='achievementsHeading'><p>ACHIEVEMENTS</p></div>
        <div className='achievementsContent'>
          <img src={achievement1} alt={achievement1} />
          <img src={achievement2} alt={achievement2} />
          <img src={achievement3} alt={achievement3} />
          <img src={achievement4} alt={achievement4} />
          <img src={achievement5} alt={achievement5} />
          <img src={achievement6} alt={achievement6} />
        </div>
      </div>
      <div className='articlesContainer'>
        <div className='articlesHeading'><p>ARTICLES</p></div>
        <div className='articlesContent'>
          <a href='https://www.instagram.com/p/CTwHOIBhpLs/?utm_medium=copy_link' target="_blank" rel="noreferrer" ><img src={article1} alt={article1} /></a>
          <a href='https://rupaliparda.com/archives/27692' target="_blank" rel="noreferrer" ><img src={article2} alt={article2} /></a>
          <a href='https://www.eastmojo.com/assam/2021/09/10/assamese-documentary-film-mon-pokhila-wins-global-recognition/' target="_blank" rel="noreferrer" ><img src={article3} alt={article3} /></a>
          <a href='https://assam.eastmojo.com/news/assam-news/assamese-documentary-film-mon-pokhila-wins-global-recognition/' target="_blank" rel="noreferrer" ><img src={article4} alt={article4} /></a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About