import React,{useEffect} from 'react'
import landingTwo from "../../assets/LandingPageTwo.jpg"
import './About.css'
import {FaPagelines} from "react-icons/fa"
import AOS from 'aos'
import 'aos/dist/aos.css'
const About = () => {
      useEffect(() =>{
        AOS.init({duration:3000})
      },[]);
  return (
    <div className='Landing_page2' id='about'>
              
                  <div className='Landing_page2_image' data-aos="fade-right">
                      <img src={landingTwo} alt=''/>
                  </div>
              
             
                    <div className='Landing_page2_content' data-aos="fade-left">
                        <div className='Landing_page2_content_header'>
                          <p>About Us <FaPagelines color='white'/></p>
                        </div>   
                        <div className='Landing_page2_content_text_box'>
                              <div className='Landing_page2_content_text'>
                                <p>Welcome to Remine India, a company dedicated 
                                  to the responsible recycling of e-waste and Li-ion
                                  batteries. Our mission is to provide safe and 
                                  environmentally-friendly solutions for the disposal
                                  of electronic waste and to help reduce the impact of 
                                  e-waste on our planet.
                                  we believe that sustainability is more than just a buzzword
                                    - it's a way of life. 
                                </p>
                              </div> 
                        </div> 
                    </div>
                   
  </div>
  )
}

export default About
