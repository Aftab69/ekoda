import React, { useState, useEffect } from 'react'
import "./Home.css"
import useMediaQuery from "./useMediaQuery";
import showreel from "./Images/Showreel.mp4"
import showreelmobile from "./Images/showreelmobile.mp4"
import loadinggif from "./Images/loading.gif"
import logo from "./Images/logo.png"

const Home = () => {

  const matches = useMediaQuery("(min-width: 769px)");

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
  return (
    <>
    {(matches) ?
      <div id='homepage' className='homepageContainer'>
      <video src={showreel} autoPlay loop muted />
     </div> :
      <div id='homepage' className='homepageContainer'>
      <video src={showreelmobile} autoPlay loop muted />
      </div>
    }
       
    { loading === true ?
      <div className='loadingpageContainer'>
          <img src={logo} alt={logo} />
          <img src={loadinggif} alt={loadinggif} />
      </div> :
      <></>
    }
    </>
  )
}

export default Home