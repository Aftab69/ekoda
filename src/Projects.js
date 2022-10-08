import React from 'react'
import "./Projects.css"
import Youtube from "react-youtube"

const Projects = () => {
  const opts = {
    height: '480',
    width: '720',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleView = (e) =>{
    document.getElementById(e.target.name).style.display = "none";
    document.getElementById("videosof"+e.target.name).style.height = "auto";
    document.getElementById("videosof"+e.target.name).style.overflow = "visible";
  }
  return (
    <>
    <div className='emptydivprojectspage'>
    </div>
      <div id='projects' className='projectspageContainer'>
        <div className='projectspageHeading'><span>OUR PROJECTS</span></div>
        <div className='videosContainer'>
            <div className='videoCategoryHeading'><p>Music Videos :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton1' style={{height: 500,overflow:"hidden"}}>
                  <Youtube className='eachVideo' videoId='-bpQpsO7mWs' opts={opts} />
                  <Youtube className='eachVideo' videoId='POuwAy2JTLk' opts={opts} />
                  <Youtube className='eachVideo' videoId='iDy4xBHq2C4' opts={opts} />
                  <Youtube className='eachVideo' videoId='h_62Ocagwtc' opts={opts} />
                  <Youtube className='eachVideo' videoId='Du-zBAUasJc' opts={opts} />
                  <Youtube className='eachVideo' videoId='NsxCsKlbkZE' opts={opts} />
                </div>
                <button name="button1" id="button1" onClick={handleView} style={{display:"block"}}>View more</button>
            </div>
            <div className='videoCategoryHeading'><p>Ad Films :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton2' style={{height: 500,overflow:"hidden"}}>
                <Youtube className='eachVideo' videoId='qWxFXk5CWJQ' opts={opts} />
                <Youtube className='eachVideo' videoId='BBItkycabOM' opts={opts} />
                <Youtube className='eachVideo' videoId='7Wpuc5J3GjQ' opts={opts} />
                <Youtube className='eachVideo' videoId='R8GBM5hsvik' opts={opts} />
                <Youtube className='eachVideo' videoId='LQ-KFYaVZ20' opts={opts} />
              </div>
              <button name="button2" id="button2" onClick={handleView}>View more</button>
            </div>
            <div className='videoCategoryHeading'><p>Fashion Films :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton3' style={{height: 500,overflow:"hidden"}}>
                <Youtube className='eachVideo' videoId='s2xr1_Pr_6U' opts={opts} />
              </div>
              <button name="button3" id="button3" onClick={handleView}>View more</button>
            </div>
            <div className='videoCategoryHeading'><p>Short/Documentary/Travel Films :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton4' style={{height: 500,overflow:"hidden"}}>
                <Youtube className='eachVideo' videoId='IASy9tKBzlw' opts={opts} />
                <Youtube className='eachVideo' videoId='_yQ1rMLRpGk' opts={opts} />
                <Youtube className='eachVideo' videoId='6J1WnGOqZdc' opts={opts} />
                <Youtube className='eachVideo' videoId='mxxpgQ25mig' opts={opts} />
                <Youtube className='eachVideo' videoId='CVd4SyXQUgc' opts={opts} />
              </div>
              <button name="button4" id="button4" onClick={handleView}>View more</button>
            </div>
            <div className='videoCategoryHeading'><p>Behind the Scenes :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton5' style={{height: 500,overflow:"hidden"}}>
                <Youtube className='eachVideo' videoId='0bqRgquI-0g' opts={opts} />
                <Youtube className='eachVideo' videoId='H2UnUAGWGak' opts={opts} />
                <Youtube className='eachVideo' videoId='geUDPq9YGNM' opts={opts} />
                <Youtube className='eachVideo' videoId='uo7p2hy-MU8' opts={opts} />
                <Youtube className='eachVideo' videoId='5tRULFPSVBo' opts={opts} />
                <Youtube className='eachVideo' videoId='bcSEZ-5vUk8' opts={opts} />
                <Youtube className='eachVideo' videoId='4wYIsgjaCIA' opts={opts} />
              </div>   
              <button name="button5" id="button5" onClick={handleView}>View more</button>
            </div>      
        </div>
      </div>
    </>
  )
}

export default Projects