import React from 'react'
import './About.css'
import htmls from '../../assets/html.jpeg'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import AdsClickIcon from '@mui/icons-material/AdsClick';

const About = () => {
  return (
    <div>
      <div class="about_us_container">
      <div class="home_about_us">
        <a href="index.html"> <h2>Home </h2></a>
        <h2>/ About Us</h2>
      </div>
    </div> 

    {/* <!-- we are story  developers--> */}
    <div class="are_becode_team">
      <div class="text_user1">
        <div class="text_left1">
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

        <div class="image_right">
          <img src={htmls} alt=""/>
        </div>
      </div>
     </div>

     <div class="why_chose_use">
      <div class="why_choose_us_image">
        <img src={htmls} alt=""/>

      </div>

      <div class="why_choose_us_text">
        <h1>WHY CHOOSE US</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Iure tempora molestiae corporis eligendi deserunt maxime 
          fugit exercitationem dicta veritatis distinctio iusto dolore repellat, illo odit. 
          A ab iusto magnam est.</p>
          <div class="infor">
            <div class="left">
              <div class="first_infor">
                <h2><AdsClickIcon/></h2>
                <div class="text2">
                  <h3>CREATIVE AND DESIGN</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div class="first_infor">
              <h2><AdsClickIcon/></h2>
                <div class="text2">
                  <h3>LEARNING AYTHING</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div class="first_infor">
              <h2><AdsClickIcon/></h2>
                <div class="text2">
                  <h3>LEAR WITH EXPERTS</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div class="first_infor">
              <h2><AdsClickIcon/></h2>
                <div class="text2">
                  <h3>FLEXIBLE LEARNING</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>

            </div>

            <div class="right">
              <div class="first_infor">
              <h2><AdsClickIcon/></h2>
                <div class="text2">
                  <h3>EASY TO CUSTOMIZE</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div class="first_infor">
              <h2><AdsClickIcon/></h2>
                <div class="text2">
                  <h3>CREATIVE AND DESIGN</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div class="first_infor">
              <h2><AdsClickIcon/></h2>
                <div class="text2">
                  <h3>GET MORE SKILLS</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>
              <div class="first_infor">
              <h2><AdsClickIcon/></h2>
                <div class="text2">
                  <h3>EASY TO UNDERSTAND</h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>

              </div>

            </div>
          </div>
      </div>
     </div>

     {/* <!-- OUR TEAMS --> */}

     <div class="popular-instructors">
      <h1>INTRUCTORS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Delectus amet cum, ea hic nostrum totam ipsam expedita consequatur voluptatem maxime 
          cumque asperiores facere odit accusantium inventore exercitationem libero minima voluptates!</p>
          <div class="instructors">
              <div class="instructor1">
                <div class="images_socials">
                  <img src={htmls} alt=""/>
                  <div class="socials">
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
              <div class="instructor1">
                <div class="images_socials">
                  <img src={htmls} alt=""/>
                  <div class="socials">
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
              <div class="instructor1">
                <div class="images_socials">
                  <img src={htmls} alt=""/>
                  <div class="socials">
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
              <div class="instructor1">
                <div class="images_socials">
                  <img src={htmls} alt=""/>
                  <div class="socials">
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
              <div class="instructor1">
                <div class="images_socials">
                  <img src={htmls} alt=""/>
                  <div class="socials">
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
              <div class="instructor1">
                <div class="images_socials">
                  <img src={htmls} alt=""/>
                  <div class="socials">
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
              <div class="instructor1">
                <div class="images_socials">
                  <img src={htmls} alt=""/>
                  <div class="socials">
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
              <div class="instructor1">
                <div class="images_socials">
                  <img src={htmls} alt=""/>
                  <div class="socials">
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
  

  <div class="ready_to_kick_start_your_career">
    <div class="items">
      <h3>Ready to Kick Start Your Career?</h3>
      <a href="./course.html"><button class="btn">Try For Free</button></a>
    </div>
  </div>
    </div>
  )
}

export default About