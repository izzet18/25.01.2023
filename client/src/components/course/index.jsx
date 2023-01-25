import React, { useEffect } from 'react'
import "./index.scss"
import Carousel from 'better-react-carousel'
import slider from "../../assets/slider.jpg"
import { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import {Helmet} from "react-helmet";

const Course = () => {
      const [courses, setCourses] = useState([])
      const [input, setInput] = useState("")
      
      const getCourses = () => {
            const apiUrl = "http://localhost:8081/courses"
            axios.get(`${apiUrl}`).then((q) => setCourses(q.data))
      }
      useEffect(() => {
            getCourses()
      }, [])

      const handleDelete  = (id) => {
            axios.delete(`http://localhost:8081/courses/${id}`).then(() => getCourses())
      }
      const handleSort = () => {
            setCourses([...courses.sort((a,b) => a.price - b.price)])
      }
      const handleSort2 = () => {
            setCourses([...courses.sort((a,b) => b.price - a.price)])
      }
      
  return (
    <div id='course'>
      <Helmet>
            <title>
                  Courses
            </title>
      </Helmet>
            <section className="slider">
                  <Carousel cols={1} rows={1} gap={10} loop>
                        <Carousel.Item>
                        <img src={slider} />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img  src={slider} />
                        </Carousel.Item>
                        
                  </Carousel>
                  <h1>Get Your <span>Education</span>  Today</h1>
            </section>
            <section className="api">
                  <div className="title">
                        <div></div>
                        <p>Popular Courses</p>
                  </div>
                  <div className="input">
                        <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)}/>
                        <div className="btn">
                              <button onClick={handleSort}>Sort</button>
                              <button onClick={handleSort2}>Default</button>
                        </div>
                  </div>
                  <div className="data-api">
                        
                          {
                              courses
                              .filter((course) => {
                                    return input.toLowerCase() === ''
                                    ? course
                                    : course.title.toLowerCase().includes(input)
                              })
                              .map((course,i) => {
                                    return(
                                          <div className="main-data">
                                                <Link to={`${course._id}`}>
                                                      <div className="img">
                                                            <img src={course.imgUrl} alt="" />
                                                      </div>
                                                </Link>
                                                <div className="data">
                                                      <div className="title">
                                                            <h3>{course.title}</h3>
                                                            <p>{course.author}</p>
                                                      </div>
                                                      
                                                      <div className="name-price">
                                                            <div className="name">
                                                                  <img src={course.imgUrl2} alt="" />
                                                                  <p>{course.name},<span>Author</span></p>
                                                            </div>
                                                            <div className="price">
                                                                  <p>${course.price}</p>
                                                            </div>
                                                      </div>
                                                      <button className='delete' onClick={() => handleDelete(course._id)}>Delete</button>

                                                </div>
                                          </div>
                                    )
                              })
                        }
                  </div>
                
                 
            </section>
            <section className='texts'>
                        <div className="left">
                              <div className="left-text">
                                    <p className='p1'>Register now and get a discount <span>50%</span>  discount until 1 January</p>
                                    <p className='p2'>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum. Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
                                    <button>REGISTER NOW</button>
                              </div>
                        </div>
                        <div className="right">
                              <div className="right-text">
                                    <h1>Search for your course</h1>
                                    <form action="">
                                          <input type="text" name="" id="" placeholder='Course name'/>
                                          <input type="text" name="" id="" placeholder='Category'/>
                                          <input type="text" name="" id="" placeholder='Degree'/>
                                          <button>SEARCH COURSE</button>
                                    </form>
                              </div>
                              
                        </div>
            </section>
            <section className="cards2">

            </section>

    </div>
  )
}

export default Course