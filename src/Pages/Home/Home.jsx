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
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AddIcon from '@mui/icons-material/Add';
import instructor1 from '../../assets/instructor1.jpeg'
import instructor2 from '../../assets/instructor2.jpeg'
import instructor3 from '../../assets/instructor3.jpeg'
import instructor4 from '../../assets/instructor4.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import Footer from '../../Components/Footer/Footer';






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

      <div class="sugested-questions">
        <h3>QUESTIONS</h3>
    <h1>SUGESTED QUESTION</h1>
    <did class="water">
        <i class="fa-solid fa-water"></i>
    </did>
    <div class="question_answers">
        <div class="question">
            <p><AddIcon/>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <ArrowDownwardIcon/>

        </div>
        <div class="answers open">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iste dolore laborum ut dolorem optio repudiandae reprehenderit 
                veritatis eos soluta saepe 
                iure neque itaque repellendus assumenda id vel dicta, quam sed?</p>
        </div>
    </div>
    <div class="question_answers">
        <div class="question">
            <p><AddIcon/>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <ArrowDownwardIcon/>

        </div>
        <div class="answers open">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iste dolore laborum ut dolorem optio repudiandae reprehenderit 
                veritatis eos soluta saepe 
                iure neque itaque repellendus assumenda id vel dicta, quam sed?</p>
        </div>
    </div>
    <div class="question_answers">
        <div class="question">
            <p><AddIcon/>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <ArrowDownwardIcon/>

        </div>
        <div class="answers open">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iste dolore laborum ut dolorem optio repudiandae reprehenderit 
                veritatis eos soluta saepe 
                iure neque itaque repellendus assumenda id vel dicta, quam sed?</p>
        </div>
    </div>
    <div class="question_answers">
        <div class="question">
            <p><AddIcon/>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <ArrowDownwardIcon/>

        </div>
        <div class="answers open">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iste dolore laborum ut dolorem optio repudiandae reprehenderit 
                veritatis eos soluta saepe 
                iure neque itaque repellendus assumenda id vel dicta, quam sed?</p>
        </div>
    </div>
    <div class="question_answers">
        <div class="question">
            <p><AddIcon/>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
           <ArrowDownwardIcon/>

        </div>
        <div class="answers open">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iste dolore laborum ut dolorem optio repudiandae reprehenderit 
                veritatis eos soluta saepe 
                iure neque itaque repellendus assumenda id vel dicta, quam sed?</p>
        </div>
    </div>

    
    
</div>

<div className='instructors'>
        <div className="headers">
            <h3>INSTRUCTORS</h3>
            <h1>OUR POPULAR INSTRUCTORS</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore unde natus sint aut
                 aliquam sunt facere aperiam nulla ut quibusdam 
                deserunt consequuntur cumque, commodi veniam. In officiis omnis iusto corporis?</p>
        </div>
        <div className="instructors-cards">
            <div className="card1">
                <img src={instructor1} alt="" />
                <h5> BAWA ERNEST KWAME</h5>
                <h4>GRAPHIC DESIGNER</h4>

            </div>
            <div className="card1">
                <img src={instructor2} alt="" />
                <h5> BAWA ERNEST KWAME</h5>
                <h4>GRAPHIC DESIGNER</h4>

            </div>
            <div className="card1">
                <img src={instructor3} alt="" />
                <h5> BAWA ERNEST KWAME</h5>
                <h4>GRAPHIC DESIGNER</h4>

            </div>
            <div className="card1">
                <img src={instructor4} alt="" />
                <h5> BAWA ERNEST KWAME</h5>
                <h4>GRAPHIC DESIGNER</h4>

            </div>

        </div>

        <button className="instructor-btn">Find More Instructors<ArrowForwardIcon/></button>

    </div>




    {/* testimonials sections */}

    <div class="testimonial_section">
    <h3>TESTIMONIAL</h3>
    <h1>What Our Student Say About Us</h1>

    <div class="slider">
    <div class="cardes">
        <div class="carde1">
      <img src={instructor4} alt="" /> 
      <h1><SportsKabaddiIcon/></h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. 
                Odio ab nesciunt ex fuga eius, distinctio,
                Odio ab nesciunt ex fuga eius, distinctio,
               
                 nisi .</p>

                 <h6><MoreHorizIcon/></h6>
        </div>
        <div class="carde1">
        <img src={instructor1} alt="" />
        <h1><SportsKabaddiIcon/></h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. 
                Odio ab nesciunt ex fuga eius, distinctio,
                Odio ab nesciunt ex fuga eius, distinctionisi.</p>

                 <h6><MoreHorizIcon/></h6>
        </div>
        <div class="carde1">
           <img src={instructor1} alt="" />
           <h1><SportsKabaddiIcon/></h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. 
                Odio ab nesciunt ex fuga eius, distinctio,
                Odio ab nesciunt ex fuga eius, distinctio,
               
                 nisi .</p>

                 <h6><MoreHorizIcon/></h6>
        </div>
        <div class="carde1">
          <img src={instructor3} alt="" />
          <h1><SportsKabaddiIcon/></h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. 
                Odio ab nesciunt ex fuga eius, distinctio,
                Odio ab nesciunt ex fuga eius, distinctio,
               
                 nisi .</p>

                 <h6><MoreHorizIcon/></h6>
        </div>
    </div>
    <div class="cardes">
        <div class="carde1">
            <img src={instructor1} alt="" />
            <h1><SportsKabaddiIcon/></h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. 
                Odio ab nesciunt ex fuga eius, distinctio,
                Odio ab nesciunt ex fuga eius, distinctio,
               
                 nisi .</p>

                 <h6><MoreHorizIcon/></h6>
        </div>
        <div class="carde1">
           <img src={instructor2} alt="" />
           <h1><SportsKabaddiIcon/></h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. 
                Odio ab nesciunt ex fuga eius, distinctio,
                Odio ab nesciunt ex fuga eius, distinctio,
               
                 nisi .</p>

                 <h6><MoreHorizIcon/></h6>
        </div>
        <div class="carde1">
        <img src={instructor3}alt="" />
        <h1><SportsKabaddiIcon/></h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. 
                Odio ab nesciunt ex fuga eius, distinctio,
                Odio ab nesciunt ex fuga eius, distinctio,
               
                 nisi .</p>

                 <h6><MoreHorizIcon/></h6>
        </div>
        <div class="carde1">
          <img src={instructor4}alt="" />
            <h1><SportsKabaddiIcon/></h1>
            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit. 
                Odio ab nesciunt ex fuga eius, distinctio,
                Odio ab nesciunt ex fuga eius, distinctio,
               
                 nisi .</p>

                 <h6><MoreHorizIcon/></h6>
        </div>
    </div>
</div>
</div>

    </div>
  )
}

export default Home;