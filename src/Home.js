import React, { useState, useEffect } from 'react'
import "./Home.css"
import showreel from "./Images/Showreel.mp4"
import loadinggif from "./Images/loading.gif"

const Home = () => {
  const [ loading, setLoading ] = useState(true)
  const loadingfunc = () =>{
    setLoading(false)
    enableScrolling()
  }
  useEffect(()=>{
    setTimeout( loadingfunc , 4000)
    disableScrolling()
    // eslint-disable-next-line
  },[])
  const disableScrolling = () =>{
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

  const enableScrolling = () =>{
    window.onscroll=function(){};
}
  return (
    <>
    { loading === false ? 
       <div className='homepageContainer'>
        <video src={showreel} autoPlay loop muted />
       </div> :
       <></>
    }
    
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