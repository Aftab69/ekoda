import React, { useState, useEffect } from 'react'
import "./Home.css"
import showreel from "./Images/Showreel.mp4"
import loadinggif from "./Images/loading.gif"

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
  return (
    <>
       <div id='homepage' className='homepageContainer'>
        <video src={showreel} autoPlay loop muted />
       </div>
    { loading === true ?
      <div className='loadingpageContainer'>
          <p>LOADING ...</p>
          <img src={loadinggif} alt={loadinggif} />
      </div> :
      <></>
    }
    </>
  )
}

export default Home