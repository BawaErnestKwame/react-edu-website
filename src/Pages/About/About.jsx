import React from 'react'
import './About.css'
import htmls from '../../assets/Adobeicons.jpeg'
import book from '../../assets/download.jpeg'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import instructor1 from '../../assets/instructor1.jpeg'
import instructor2 from '../../assets/instructor2.jpeg'
import instructor3 from '../../assets/instructor3.jpeg'
import instructor4 from '../../assets/instructor4.jpeg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const About = () => {
  return (
    <div>
      <div className="about_us_container">
      <div className="home_about_us">
        <Link to='/HOME'>  <h2>Home </h2></Link>
    
        <h2>/ About Us</h2>
      </div>
    </div> 

    {/* <!-- we are story  developers--> */}
    <div className="are_becode_team">
      <div className="text_user1">
        <div className="text_left1">
          <h1>WE ARE BECODE TEAM</h1>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. I
            nventore est ducimus ad obcaecati natus voluptas corrupti omnis quis neque! 
            </h4>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Consequatur illum, tempore doloremque, incidunt et ex ipsam eaque
               aliquam officiis, distinctio natus odio! 
              Porro, expedita. Dolores dignissimos cumque aperiam vero? Provident!
            </p>

            <h2>Lorem ipsum dolor sit equi delectus saepe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quod saepe, 
              hic nesciunt magni aliquam possimus soluta pariatur quaerat iure, 
              reiciendis iste ipsa ipsam mollitia quas atque tempora blanditiis molestias!
              Ratione optio molestiae veritatis quas atque modi reiciendis doloremque, placeat 
              beatae? Laboriosam velit qu
            </p>
        </div>

        <div className="image_right">
          <img src={book} alt=""/>
        </div>
      </div>
     </div>

     <div className="why_chose_use">
      <div className="why_choose_us_image">
        <img src={htmls} alt=""/>

      </div>

      <div className="why_choose_us_text">
        <h1>WHY CHOOSE US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Iure tempora molestiae corporis eligendi deserunt maxime 
          fugit exercitationem dicta veritatis distinctio iusto dolore repellat, illo odit. 
          A ab iusto magnam est.</p>
          <div className="infor">
            <div className="left">
              <div className="first_infor">
                <h2><AdsClickIcon/></h2>
                <div className="text2">
                  <h3>CREATIVE AND DESIGN</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div className="first_infor">
              <h2><AdsClickIcon/></h2>
                <div className="text2">
                  <h3>LEARNING AYTHING</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div className="first_infor">
              <h2><AdsClickIcon/></h2>
                <div className="text2">
                  <h3>LEAR WITH EXPERTS</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div className="first_infor">
              <h2><AdsClickIcon/></h2>
                <div className="text2">
                  <h3>FLEXIBLE LEARNING</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>

            </div>

            <div className="right">
              <div className="first_infor">
              <h2><AdsClickIcon/></h2>
                <div className="text2">
                  <h3>EASY TO CUSTOMIZE</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div className="first_infor">
              <h2><AdsClickIcon/></h2>
                <div className="text2">
                  <h3>CREATIVE AND DESIGN</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div className="first_infor">
              <h2><AdsClickIcon/></h2>
                <div className="text2">
                  <h3>GET MORE SKILLS</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div className="first_infor">
              <h2><AdsClickIcon/></h2>
                <div className="text2">
                  <h3>EASY TO UNDERSTAND</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>

            </div>
          </div>
      </div>
     </div>

     {/* <!-- OUR TEAMS --> */}

     <div className="popular-instructors">
      <h1>INTRUCTORS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus amet cum, ea hic nostrum totam ipsam expedita consequatur voluptatem maxime 
          cumque asperiores facere odit accusantium inventore exercitationem libero minima voluptates!</p>
          <div className="instructorsrr">
              <div className="instructorr1">
                <div className="images_socials">
                  <img src={instructor1} alt=""/>
                  <div className="socials">
                  <Link><FacebookIcon/></Link>
     
     <Link>   <InstagramIcon/></Link>
       <Link><XIcon/></Link>
     <Link> < WhatsAppIcon /></Link>
     <Link> < TelegramIcon /></Link>
                  </div>
                </div>
  
                <h3>BAWA ERNEST KWAME</h3>
                <h4>GRAPHIC DESIGNER</h4>
  
              </div>
              <div className="instructorr1">
                <div className="images_socials">
                  <img src={instructor2} alt=""/>
                  <div className="socials">
                  <Link><FacebookIcon/></Link>
     
     <Link>   <InstagramIcon/></Link>
       <Link><XIcon/></Link>
     <Link> < WhatsAppIcon /></Link>
     <Link> < TelegramIcon /></Link>
                  </div>
                </div>
  
                <h3>BAWA ERNEST KWAME</h3>
                <h4>GRAPHIC DESIGNER</h4>
  
              </div>
              <div className="instructorr1">
                <div className="images_socials">
                  <img src={instructor3} alt=""/>
                  <div className="socials">
                  <Link><FacebookIcon/></Link>
     
     <Link>   <InstagramIcon/></Link>
       <Link><XIcon/></Link>
     <Link> < WhatsAppIcon /></Link>
     <Link> < TelegramIcon /></Link>
                  </div>
                </div>
  
                <h3>BAWA ERNEST KWAME</h3>
                <h4>GRAPHIC DESIGNER</h4>
  
              </div>
              <div className="instructorr1">
                <div className="images_socials">
                  <img src={instructor4} alt=""/>
                  <div className="socials">
                  <Link><FacebookIcon/></Link>
     
     <Link>   <InstagramIcon/></Link>
       <Link><XIcon/></Link>
     <Link> < WhatsAppIcon /></Link>
     <Link> < TelegramIcon /></Link>
                  </div>
                </div>
  
                <h3>BAWA ERNEST KWAME</h3>
                <h4>GRAPHIC DESIGNER</h4>
  
              </div>
              <div className="instructorr1">
                <div className="images_socials">
                  <img src={instructor2} alt=""/>
                  <div className="socials">
                  <Link><FacebookIcon/></Link>
     
                  <Link>   <InstagramIcon/></Link>
                    <Link><XIcon/></Link>
                  <Link> < WhatsAppIcon /></Link>
                  <Link> < TelegramIcon /></Link>
                  </div>
                </div>
  
                <h3>BAWA ERNEST KWAME</h3>
                <h4>GRAPHIC DESIGNER</h4>
  
              </div>
              <div className="instructorr1">
                <div className="images_socials">
                  <img src={instructor1} alt=""/>
                  <div className="socials">
                  <Link><FacebookIcon/></Link>
     
                  <Link>   <InstagramIcon/></Link>
                    <Link><XIcon/></Link>
                  <Link> < WhatsAppIcon /></Link>
                  <Link> < TelegramIcon /></Link>
                  </div>
                </div>
  
                <h3>BAWA ERNEST KWAME</h3>
                <h4>GRAPHIC DESIGNER</h4>
  
              </div>
              <div className="instructorr1">
                <div className="images_socials">
                  <img src={instructor4} alt=""/>
                  <div className="socials">
                  <Link><FacebookIcon/></Link>
     
                  <Link>   <InstagramIcon/></Link>
                    <Link><XIcon/></Link>
                  <Link> < WhatsAppIcon /></Link>
                  <Link> < TelegramIcon /></Link>
                  </div>
                </div>
  
                <h3>BAWA ERNEST KWAME</h3>
                <h4>GRAPHIC DESIGNER</h4>
  
              </div>
              <div className="instructorr1">
                <div className="images_socials">
                  <img src={instructor3} alt=""/>
                  <div className="socials">
                  <Link><FacebookIcon/></Link>
     
     <Link>   <InstagramIcon/></Link>
       <Link><XIcon/></Link>
     <Link> < WhatsAppIcon /></Link>
     <Link> < TelegramIcon /></Link>
                  </div>
                </div>
  
                <h3>BAWA ERNEST KWAME</h3>
                <h4>GRAPHIC DESIGNER</h4>
  
              </div>
          </div>
       
  </div>
  

  <div className="ready_to_kick_start_your_career">
    <div className="items">
      <h3>Ready to Kick Start Your Career?</h3>
     <Link to='/Login'><button>Try For Free</button></Link>
    </div>
  </div>
    </div>
  )
}

export default About