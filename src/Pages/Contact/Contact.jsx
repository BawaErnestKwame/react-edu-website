import React from 'react'
import './Contact.css'
import map from '../../assets/map.jpeg'
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9061a4ea-ad3d-4650-8693-de57abededa0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

}

  return (
    <div>
      <div className="container">
        <div className="text">
          <h1>CONTACT US/</h1>
        </div>
    </div>

    <div className="contact_us_getin_touch_right_left">
        <div className="left">
            <h2>Contact Us</h2>
            <div className="locations">
                <LocationOnIcon/>
                SUNYANI Bono Region

            </div>

            <div className="emails">
              <CallIcon/>
                bawaernest926@gmail.com

            </div>

            <div className="coallus">
               < AttachEmailIcon/>
                <p>+233599316218</p>
            </div>

            <div className="contactus2">
            <CallIcon/>
                +233599316218
            </div>
            
        </div>

        <div className="right">
            <div className="getintouch">
                <h2>Get In Touch With Us</h2>
                <h4>AND WE WILL GET BACK TO YOU LATER</h4>
            </div>

            <form className="form_container" onSubmit={onSubmit}>
                <div className="full_name">
                    <input type="text" placeholder="First Name" name='name'/>
                    <input type="text" placeholder="Last Name" name='last name'/>
                </div>

                <div className="input_filed">
                    <input type="email" placeholder="Email" required name='email'/>
                </div>
                <div className="input_filed">
                    <input type="text" placeholder="Subject" required name='subject'/>
                </div>

                <textarea name="text" id="message">Message</textarea>


                <button className='submit'>SUBMIT</button>

            <span>{result}</span>
             



            </form>

            

        </div>
    </div>

    <div className="mapps_toshow">
        <img src={map} alt=""/>
    </div>
    </div>
  )
}

export default Contact