import React from 'react'
import "./Projectsmobile.css"
import ReactPlayer from "react-player/youtube"
import useMediaQuery from "./useMediaQuery";

const Projectsmobile = () => {
  const matches = useMediaQuery("(min-width: 480px)");
  return (
    <div className='projectsmobilepageContainer'>
      <div className='projectsmobilepageHeading'>
        <p>OUR PROJECTS</p>
      </div>
      <div className='projectsmobilepageContent'>
        {(matches) 
          ?
          <>
          <ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=-bpQpsO7mWs' controls width="480px" height="360px" />
          <ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=qWxFXk5CWJQ' controls width="480px" height="360px"/>
          <ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=s2xr1_Pr_6U' controls width="480px" height="360px"/>
          <ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=IASy9tKBzlw' controls width="480px" height="360px"/>
          </>
          :
          <>
          <ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=-bpQpsO7mWs' controls width="300px" height="180px" />
          <ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=qWxFXk5CWJQ' controls width="300px" height="180px"/>
          <ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=s2xr1_Pr_6U' controls width="300px" height="180px"/>
          <ReactPlayer className='eachVideoMobile' url='https://www.youtube.com/watch?v=IASy9tKBzlw' controls width="300px" height="180px"/> 
          </>
         }
         <a href='https://www.youtube.com/channel/UCnWLao6UvXoNSupz5jiDMiA' target="_blank" rel="noreferrer"><button>View More</button></a>
        </div>  
      </div>
  )
}

export default Projectsmobile