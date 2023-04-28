import React,{useEffect} from 'react'
import landingThree from "../../assets/LandingPageThree.jpg"
import './Mission.css'
import {FaPagelines} from "react-icons/fa"
import AOS from 'aos'
import 'aos/dist/aos.css'
const Mission = () => {
  useEffect(() =>{
    AOS.init({duration:3000})
  },[]);
  return (
    <div className='Landing_page3' id='mission'>
                 <div className='Landing_page3_content' data-aos="fade-right">
                        <div className='Landing_page3_content_header'>
                              <p>Our Mission <FaPagelines color='white'/></p>
                        </div>  
                        <div className='Landing_page3_content_text_box'>
                                  <div className='Landing_page3_content_text'>
                                    <p>At Remine India, our mission is to provide safe and sustainable solutions 
                                      for the disposal of electronic waste and Li-ion batteries. We believe that
                                      responsible e-waste recycling is not only essential for protecting our environment
                                      and communities but is also crucial for building a more sustainable future.
                                      Our core values guide everything we do, from our commitment to ethical and 
                                      sustainable business practices to our dedication to providing exceptional 
                                      customer service. 
                                    </p>
                                  </div> 
                        </div> 
                </div>
                <div className='Landing_page3_image' data-aos="fade-left">
                      <img src={landingThree} alt=''/>
                </div>
          </div>
  )
}

export default Mission
