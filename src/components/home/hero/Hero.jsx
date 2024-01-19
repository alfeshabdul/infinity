import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row ml-100'>
            <Heading subtitle='WELCOME TO INFINITY' title='Infinity The Language Institute' />
            <p>Your Gateway to English Excellence in Bhopal</p>
            <div className='button'>
              
              <button  id="/courses">
                VIEW COURSE <i className='fa fa-long-arrow-alt-right' id="/courses" ></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
