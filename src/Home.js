import React from 'react'
import "./Home.css"
import showreel from "./Images/Showreel.mp4"

const Home = () => {
  return (
    <>
    <div className='homepageContainer'>
      <video src={showreel} autoPlay loop muted />
    </div>
    </>
  )
}

export default Home