import React ,{ useState, useEffect } from 'react'
import ReactPlayer from "react-player"
import "./Home.css"
import showreel from "./Images/Showreel.mp4"
import loadinggif from "./Images/loading.gif"
import logo from "./Images/logo.png"
import icon1 from "./Images/scrolltopicon.png"

const Home = () => {

  const disableScrolling = () =>{
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}
  const enableScrolling = () =>{
    window.onscroll=function(){};
}
  const [ loading, setLoading ] = useState(true)
  const loadingfunc = () =>{
    setLoading(false)
    enableScrolling()
    document.body.style.overflowY = "scroll";
  }
  useEffect(()=>{
    document.body.style.overflowY = "hidden";
    disableScrolling()
    setTimeout( loadingfunc , 1000)
    // eslint-disable-next-line
  },[])

  const handleTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <>
      <div id='homepage' className='homepageContainer'>
      <ReactPlayer className="homevideoContainer" style={{pointerEvents:"none"}} url={showreel} width="100%" height="auto" muted playing={true} loop />
     </div>
     <div className='showreelButtonContainer'>
        <a href='https://www.youtube.com/watch?v=siXxsNosnGs' target="_blank" rel="noreferrer"><button id='showreelButton'>WATCH SHOWREEL</button></a>
     </div>
     <div className='scrolltotopContainer'>
      <img onClick={handleTop} src={icon1} alt={icon1} />
     </div>      
    { loading === true ?
      <div>
      <div className='loadingpageContainer'>
          <img id='logoImageLoading' src={logo} alt={logo} />
          <img src={loadinggif} alt={loadinggif} />
      </div>
      </div>
      :
      <div>
      </div>
    }
    </>
  )
}

export default Home