import React from 'react'
import "./index.scss"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div id='header'>
            <div className="container">
                  <div className="left">
                        <Link to={"/"}>
                              <div className="logo">
                                    <img src={logo} alt="" />
                                    <h1>Course</h1>
                              </div>
                        </Link>
                        <nav>
                              <ul>
                                    <li>HOME</li>
                                    <li>ABOUT US</li>
                                    <li>COURSES</li>
                                    <li>ELEMENTS</li>
                                    <li>NEWS</li>
                                   <Link to={"/add-course"}><li>ADD COURSE</li></Link>
                              </ul>
                        </nav>
                  </div>
                  
                  <div className="number">
                        <i class="fa-solid fa-phone-volume"></i>
                        <p>+43 4566 7788 2457</p>
                  </div>
            </div>
    </div>
  )
}

export default Header