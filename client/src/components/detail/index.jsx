import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import "./index.scss"
import {Helmet} from "react-helmet";

const Detail = () => {
      const [course, setCourse]= useState([])
      const { id } = useParams();

      const getCourse = () => {
            const apiUrl = `http://localhost:8081/courses/${id}`
            axios.get(`${apiUrl}`).then((q) => setCourse(q.data))
      }
      useEffect(() => {
            getCourse()
      }, [])

  return (
    <div id='detail'>
      <Helmet>
            <title>Detail</title>
      </Helmet>
            <div className="datas">
                  <div className="img">
                        <img src={course.imgUrl} alt="" />
                  </div>
                  <div className="top">
                        <div className="right">
                              <h1>{course.title}</h1>
                              <h2>{course.author}</h2>
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
                  </div>
                  
            </div>
    </div>
  )
}

export default Detail