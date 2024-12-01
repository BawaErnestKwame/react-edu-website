import React from 'react'
import './Cources.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import htmls from '../../assets/html.jpeg'
import { Link } from 'react-router-dom';


const Cources = () => {
  return (
    <div>
      <div class="our-coursepage">
        <h1>OUR COURSES PAGE🧑/</h1>
        <div class="home_course">
        <Link to='/HOME'><button >Home</button></Link>
           <p></p>
         <button>Our Course</button>
        </div>
    </div>

    <div class="courses-card">
        <div class="card1">
            <img src={htmls } alt="" />
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div class="rating-name">
                <div class="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div class="instructor">
               <img src={htmls } alt="" />
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button class="get-started-btn">Get Started now!</button>
        </div>
        <div class="card1">
        <img src={htmls } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div class="rating-name">
                <div class="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div class="instructor">
                <img src={htmls } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button class="get-started-btn">Get Started now!</button>
        </div>
        <div class="card1">
        <img src={htmls } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div class="rating-name">
                <div class="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div class="instructor">
                <img src={htmls } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button class="get-started-btn">Get Started now!</button>
        </div>
        <div class="card1">
        <img src={htmls } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div class="rating-name">
                <div class="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div class="instructor">
                <img src={htmls } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button class="get-started-btn"><a href="./course.html">Get Started now!</a></button>
        </div>
 
        <div class="card1">
        <img src={htmls } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div class="rating-name">
                <div class="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div class="instructor">
                <img src={htmls } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button class="get-started-btn">Get Started now!</button>
        </div>
        <div class="card1">
        <img src={htmls } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div class="rating-name">
                <div class="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div class="instructor">
                <img src={htmls} alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button class="get-started-btn">Get Started now!</button>
        </div>
        <div class="card1">
        <img src={htmls} alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div class="rating-name">
                <div class="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div class="instructor">
                <img src={htmls} alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button class="get-started-btn">Get Started now!</button>
        </div>
        <div class="card1">
        <img src={htmls} alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div class="rating-name">
                <div class="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div class="instructor">
                <img src={htmls } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button class="get-started-btn"><a href="./course.html">Get Started now!</a></button>
        </div>
 
     </div>
     
    </div>
  )
}

export default Cources