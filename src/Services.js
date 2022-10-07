import React from 'react'
import "./Services.css"

const Services = () => {
  return (
    <>
    <div id='services' className='servicespageContainer'>
      <div className='servicespageHeading'><p>OUR SERVICES</p></div>
      <div className='servicespageMaincontent'>
        <div className='servicespageInnercontent'>
          <div className='innerContainer' id='innerContainer1'></div>
          <div className='innerContainer' id='innerContainer2'>
            <p>CREATIVE-DEVELOPMENT</p>
            <p>As one of the most challenging stages in any project, we specialize in providing Creative Development to our clients. With our team of experts, rest assured that your visual content will be nothing short of exceptional.</p>
          </div>
          <div className='innerContainer' id='innerContainer3'></div>
          <div className='innerContainer' id='innerContainer4'>
            <p>PRE-PRODUCTION</p>
            <p>With a team dedicated to Pre-Production, we guarantee to provide the highest quality result for all of our clients. No matter what type of project you're looking to create, we're here to make it reality.</p>
          </div>
          <div className='innerContainer' id='innerContainer5'></div>
          <div className='innerContainer' id='innerContainer6'>
            <p>POST-PRODUCTION</p>
            <p>When it comes to Post-Production, you can count on us to continue working until it's exactly what you're looking for while staying within your timeline and budget. If you have questions, contact us today.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services