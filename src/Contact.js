import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
import "./Contact.css"
import icon1 from "./Images/youtubeicon.png"
import icon2 from "./Images/whatsappicon.png"
import icon3 from "./Images/facebookicon.png"
import icon4 from "./Images/instagramicon.png"
import icon5 from "./Images/linkedinicon.png"
import icon6 from "./Images/locationicon.png"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8pat0om', 'template_ui3wpc9', form.current, 'ZiJUUW6UQfngNLJ73')
      .then((result) => {
          console.log(result.text);
          window.alert("Message sent successfully");
      }, (error) => {
          console.log(error.text);
          window.alert("Error");
      });
      e.target.reset();
  };
  return (
    <>
      <div className='contactpageContainer' id='contact'>
        <div className='contactpageHeading'><p>CONTACT US</p></div>
        <div className='contactpageForm'>
          <form ref={form} onSubmit={sendEmail} className='formContainer'>
              <input type="text" name="user_name" placeholder='Enter your name' required />
              <input type="email" name="user_email" placeholder='Enter a valid email address' required />
              <textarea type="text" name="message" placeholder='Enter your message' required />
              <button type="submit" value="Send">Submit</button>
          </form>
        </div>  
        <div className='contactpageFooter'>
          <div className='footerDiv1'>
            <div className='footerDiv1Line1'>
              <img src={icon6} alt={icon6} />
              <p>Our Location :</p>
            </div>
            <p>House no. 1 (2nd floor), Asomi Path Railway colony road, Hatigarh Chariali Hatigarh, Guwahati, Assam</p>
          </div>
          <div className='footerDiv2'>
            <p>Email us / Call us : ekodaproductions@gmail.com / +917002401695</p>
            <div className='footericonImages'>
              <a href='https://www.youtube.com/channel/UCnWLao6UvXoNSupz5jiDMiA' target='_blank' rel="noreferrer"><img src={icon1} alt={icon1} /></a>
              <a href='https://wa.me/+917002401695/' target='_blank' rel="noreferrer"><img src={icon2} alt={icon2} /></a>
              <a href='https://www.facebook.com/ekodaproductions' target='_blank' rel="noreferrer"><img src={icon3} alt={icon3} /></a>
              <a href='https://www.instagram.com/ekodaproductions?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer"><img src={icon4} alt={icon4} /></a>
              <a href='https://www.linkedin.com/in/ekoda-productions-249488218/' target='_blank' rel="noreferrer"><img src={icon5} alt={icon5} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact