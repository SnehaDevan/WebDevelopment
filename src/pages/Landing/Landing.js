import React,{useEffect} from 'react'
import "./Landing.css"
import {FaQuoteLeft} from "react-icons/fa"
import {FaQuoteRight} from "react-icons/fa"
import {FaRecycle} from "react-icons/fa"
import AOS from 'aos'
import 'aos/dist/aos.css'
const Landing = () => {
  useEffect(() =>{
    AOS.init({duration:3000})
  },[]);
  return (
    <div className='Landing_container' id='/'>
          <div className='Landing_page1'>
                  <div className='Landing1_quote'>
                      <div className='Landing1_quote_text'>
                            <h1><FaQuoteLeft/>There is no such thing as 'away'. When we throw anything away it must go somewhere.<FaQuoteRight/></h1>
                            <h2>– Annie Leonard, Proponent of Sustainability</h2>
                      </div>
                  </div>
                  <div className='Landing_comapany_name' data-aos="fade-up-left">
                      <div className='Landing_company_name_text'>
                          <FaRecycle size={100} color='white'/>
                          <h1>REMINE INDIA PRIVATE LIMITED</h1>
                      </div>   
                  </div>
          </div>
    </div>
  )
}

export default Landing
