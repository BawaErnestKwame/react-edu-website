import React from 'react'
import './Home.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import HailIcon from '@mui/icons-material/Hail';
import header from '../../assets/header-book1.jpg'
import student from '../../assets/student-1.jpeg'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import book2 from '../../assets/book-2.jpg'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import html from '../../assets/html.jpeg'



const Home = () => {
  return (
    <div>

      <div className="header">
        <div className="text-container">
          <h1>GET STARTED ON YOUR LEARNING AND
          ENRICH YOUR DREAM</h1>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit quod, ipsa autem a nostrum molestias quas facere minus
          assumenda, officiis facilis quam sequi, est labore eum rem ratione! Impedit!</p>

          <button className='find-course'>Find Courses  <ArrowForwardIcon/></button>


          <div className="cards">
            <div className="card1">
           <EmojiPeopleIcon color='action'  sx={{ fontSize: 60 }}/>
              <h1>400+</h1>
              <h2>INSTRUCTORS</h2>
            </div>
            <div className="card1">
            <HailIcon color='action'  sx={{ fontSize: 60 }}/>
              <h1>2500+</h1>
              <h2>  STUDENTS</h2>
            </div>
            <div className="card1">
           <AirlineSeatReclineNormalIcon   color='action'  sx={{ fontSize: 60 }}/>
              <h1>150+</h1>
              <h2>DEPARTMENTS</h2>
            </div>
          </div>

        </div>
        <img src={header} alt="" />
      </div>
      

      <div className="description-activities">
        <div className="description1">
          <div className="icon">
          <HailIcon/>
          </div>

          <p>700+ <br /> Online Course</p>
        </div>
        <div className="description1">
          <div className="icon">
          <HailIcon/>
          </div>

          <p>700+ <br /> Online Course</p>
        </div>
        <div className="description1">
          <div className="icon">
          <HailIcon/>
          </div>

          <p>700+ <br /> Online Course</p>
        </div>
        <div className="description1">
          <div className="icon">
          <HailIcon/>
          </div>

          <p>700+ <br /> Online Course</p>
        </div>
        <div className="description1">
          <div className="icon">
          <HailIcon/>
          </div>

          <p>700+ <br /> Online Course</p>
        </div>
      </div>


      <div className="who-we-are-container">
          <img src={student} alt="" />

          <div className="student-enrolled">
            <h1>20.1k +</h1>
            <p>Student Enrolled</p>
          </div>

          <div className="text">
            <h1>WHO WE ARE!</h1>
            <h3>Primary Insruction, Higher Department Of Education</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
Rerum magni dolorem nulla ullam dolores exercitationem
 vel quibusdam quasi aliquid soluta! Perferendis odio nam
 consequatur voluptatum eum cumque ducimus enim
 facere.</p>

<div className="activities">
 <div className="online-courses">
  <div className="icon">
    <LibraryBooksIcon/>

  </div>
  <div className="texts">
    <h2>Online Courses</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      In, consectetur enim culpa
       quis accusamus doloremque sed earum aspernatur</p>
  </div>
 </div>
 <div className="online-courses">
  <div className="icon">
    <MenuBookIcon/>

  </div>
  <div className="texts">
    <h2>Exercise</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      In, consectetur enim culpa
       quis accusamus doloremque sed earum aspernatur</p>
  </div>
 </div>
 <div className="online-courses">
  <div className="icon">
    <AccessibilityNewIcon />

  </div>
  <div className="texts">
    <h2>Upgrade Your Personal Skill</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      In, consectetur enim culpa
       quis accusamus doloremque sed earum aspernatur</p>
  </div>
 </div>
 </div>


          </div>
      </div>


      {/* start your learning journey with us now */}

      <div className="start-your-learning-journey">
        <div className="text-button">
          <h2>Start Your Leraning Journey With Us Today! Enroll Now in Our Online Course.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias repudiandae similique
             eos voluptatum consequuntur, officia nam veritatis natus incidunt 
            eveniet maxime corrupti neque deleniti sunt harum earum sint ratione aliquam?</p>

            <button className='dicover-tbn'>Descover More  <ArrowForwardIcon/></button>
        </div>

        <img src={book2} alt="" />
      </div>



      <div className="our-popular-courses">
        <div className="title">
          <h3>COURSES</h3>
          <h1>OUR POPULAR COURSE</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quis veritatis recusand ea
             explicaboid maxime, officia et.ipsum dolor
              sit amet consectetur</p>
        </div>

        <div className="courses">
          <div className="course1">
            <img src={html} alt="" className='subject' />
            <h3>Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="stars">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
            </div>
            <div className="profile-name">
            <img src={student} alt="profile" className='profile' />
              <h4>BAWA ERNEST KWAME</h4>
            </div>
            <button>Get Started Now!</button>
          </div>
          <div className="course1">
            <img src={html} alt="" className='subject' />
            <h3>Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="stars">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
            </div>
            <div className="profile-name">
            <img src={student} alt="profile" className='profile' />
              <h4>BAWA ERNEST KWAME</h4>
            </div>
            <button>Get Started Now!</button>
          </div>
          <div className="course1">
            <img src={html} alt="" className='subject' />
            <h3>Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="stars">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
            </div>
            <div className="profile-name">
            <img src={student} alt="profile" className='profile' />
              <h4>BAWA ERNEST KWAME</h4>
            </div>
            <button className='get-started-btn'>Get Started Now!</button>
          </div>
          <div className="course1">
            <img src={html} alt="" className='subject' />
            <h3>Ultimate HTML- From Beginner To Advanced Training Course</h3>
            <p>Develop Your Skill</p>
            <div className="stars">
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarHalfIcon/>
            </div>
            <div className="profile-name">
            <img src={student} alt="profile" className='profile' />
              <h4>BAWA ERNEST KWAME</h4>
            </div>
            <button>Get Started Now!</button>
          </div>

          <button className='show-more-btn'> <ArrowForwardIcon/></button>
        </div>
      </div>





     

    </div>
  )
}

export default Home