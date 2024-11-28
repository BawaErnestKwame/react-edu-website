import React from 'react'
import './Home.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import HailIcon from '@mui/icons-material/Hail';
import header from '../../assets/header-book1.jpg'


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
              <EmojiPeopleIcon/>
              <h1>400+</h1>
              <h2>INSTRUCTORS</h2>
            </div>
          </div>

        </div>
        <img src={header} alt="" />
      </div>
      

     

    </div>
  )
}

export default Home