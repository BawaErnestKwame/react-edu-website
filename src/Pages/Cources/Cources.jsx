import React from 'react'
import './Cources.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import htmls from '../../assets/html.jpeg'
import { Link } from 'react-router-dom';
import javascript from '../../assets/javascript.jpeg'
import css from '../../assets/css.jpeg'
import marketing from '../../assets/marketing.jpeg'
import adobe from '../../assets/adobe1.jpeg'
import instructor1 from '../../assets/instructor1.jpeg'
import instructor2 from '../../assets/instructor2.jpeg'
import instructor3 from '../../assets/instructor3.jpeg'
import instructor4 from '../../assets/instructor4.jpeg'


const Cources = () => {
  return (
    <div>
      <div className="our-coursepage">
        <h1>OUR COURSES PAGE🧑/</h1>
        <div className="home_course">
        <Link to='/'><button >Home</button></Link>
           <p></p>
         <button>Our Course</button>
        </div>
    </div>

    <div className="courses-card">
        <div className="card1">
            <img src={htmls } alt="" />
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="rating-name">
                <div className="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div className="instructor">
               <img src={instructor1 } alt="" />
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button className="get-started-btn">Get Started now!</button>
        </div>
        <div className="card1">
        <img src={css } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="rating-name">
                <div className="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div className="instructor">
                <img src={instructor2 } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button className="get-started-btn">Get Started now!</button>
        </div>
        <div className="card1">
        <img src={javascript } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="rating-name">
                <div className="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div className="instructor">
                <img src={instructor3 } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button className="get-started-btn">Get Started now!</button>
        </div>
        <div className="card1">
        <img src={adobe } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="rating-name">
                <div className="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div className="instructor">
                <img src={instructor4 } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button className="get-started-btn"><a href="./course.html">Get Started now!</a></button>
        </div>
 
        <div className="card1">
        <img src={marketing } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="rating-name">
                <div className="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div className="instructor">
                <img src={instructor1 } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button className="get-started-btn">Get Started now!</button>
        </div>
        <div className="card1">
        <img src={javascript } alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="rating-name">
                <div className="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div className="instructor">
                <img src={instructor4} alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button className="get-started-btn">Get Started now!</button>
        </div>
        <div className="card1">
        <img src={adobe} alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="rating-name">
                <div className="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div className="instructor">
                <img src={instructor1} alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button className="get-started-btn">Get Started now!</button>
        </div>
        <div className="card1">
        <img src={marketing} alt=""/>
            <h3> Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="rating-name">
                <div className="rating">
                <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
                </div>
                <div className="instructor">
                <img src={instructor3 } alt=""/>
                    <h4>Bawa Ernest Kwame</h4>
                </div>
            </div>

            <button className="get-started-btn"><a href="./course.html">Get Started now!</a></button>
        </div>
 
     </div>
     
    </div>
  )
}

export default Cources