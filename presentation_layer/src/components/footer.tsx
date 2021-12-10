import React from "react";
import '../App.scss';
import linkedin_dark from '../data/icon/linkedin_dark.png';
import github_dark from '../data/icon/github_dark.png';
import gmail from '../data/icon/gmail.png';

function Footer() {
    return (
      <div className='footer' id='footer'>
           <h2 className="creator-name">Created by Olha Suprun</h2> 
           <div className="contacts">
                <img className="icon-contact" src={linkedin_dark} alt="linkedin" ></img>
                <img className="icon-contact" src={gmail} alt="gmail"></img>
                <img className="icon-contact" src={github_dark} alt="github"></img>
           </div>
      </div>
        
    );
  }
  
  export default Footer;