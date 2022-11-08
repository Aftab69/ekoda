import React from 'react'
import "./Projects.css"
// import Youtube from "react-youtube";
// import Zoom from 'react-reveal/Zoom';
// import { Link } from 'react-router-dom';

const Projects = (props) => {
  // const opts = {
  //   height: '480',
  //   width: '720',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 0,
  //   },
  // };
  
  return (
    <>
    <div className='emptydivprojectspage'>
    </div>
      <div id='projects' className='projectspageContainer' ref={props.projects}>
        <div className='projectspageHeading'><span>OUR PROJECTS</span></div>
        <div className='videosContainer'>
            {/* <div className='videoCategoryHeading'><p>Music Videos :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton1'>
                  <Zoom><Youtube className='eachVideo' videoId='-bpQpsO7mWs' opts={opts} /></Zoom>
                  <Zoom><Youtube className='eachVideo' videoId='POuwAy2JTLk' opts={opts} /></Zoom>
                </div>
                <Link style={{textDecoration:"none"}} to="/musicvideos" target="_blank"><button name="button1" id="button1" style={{display:"block"}}>View more</button></Link>
            </div>
            <div className='videoCategoryHeading'><p>Ad Films :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton2'>
                <Zoom><Youtube className='eachVideo' videoId='qWxFXk5CWJQ' opts={opts} /></Zoom>
                <Zoom><Youtube className='eachVideo' videoId='BBItkycabOM' opts={opts} /></Zoom>
              </div>
              <Link style={{textDecoration:"none"}} to="/adfilms" target="_blank"><button name="button2" id="button2">View more</button></Link>
            </div>
            <div className='videoCategoryHeading'><p>Fashion Films :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton3'>
                <Zoom><Youtube className='eachVideo' videoId='s2xr1_Pr_6U' opts={opts} /></Zoom>
              </div>
              <Link style={{textDecoration:"none"}} to="/fashionfilms" target="_blank"><button name="button3" id="button3">View more</button></Link>
            </div>
            <div className='videoCategoryHeading'><p>Short/Documentary/Travel Films :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton4'>
                <Zoom><Youtube className='eachVideo' videoId='IASy9tKBzlw' opts={opts} /></Zoom>
                <Zoom><Youtube className='eachVideo' videoId='_yQ1rMLRpGk' opts={opts} /></Zoom>
              </div>
              <Link style={{textDecoration:"none"}} to="/shortdocumentarytravelfilms" target="_blank"><button name="button4" id="button4">View more</button></Link>
            </div>
            <div className='videoCategoryHeading'><p>Behind the Scenes :</p></div>
            <div className='videosOuterContainer'>
              <div className='videosInnerContainer' id='videosofbutton5'>
                <Zoom><Youtube className='eachVideo' videoId='0bqRgquI-0g' opts={opts} /></Zoom>
                <Zoom><Youtube className='eachVideo' videoId='H2UnUAGWGak' opts={opts} /></Zoom>
              </div>   
              <Link style={{textDecoration:"none"}} to="/behindthescenes" target="_blank"><button name="button5" id="button5">View more</button></Link>
            </div>       */}
        </div>
      </div>
    </>
  )
}

export default Projects