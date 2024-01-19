import React from "react"
import "./courses.css"
import { online } from "../../dummydata"


const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>


          <div className=""> 
            <h2 className="cl-heading">COURSES</h2> 

            <h1 lassName="cl-heading">Browse Our Infinity Course</h1>
            </div>
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} alt=""/>
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
