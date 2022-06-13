import React from "react";
import './styles/footer.scss';
import linkedin_dark from '../data/icon/linkedin_dark.png';
import github_dark from '../data/icon/github_dark.png';
import gmail from '../data/icon/gmail.png';

function Footer() {
    return (
      <div className='footer' id='footer'>
           <h2 className="creator-name">Created by Olha Suprun</h2> 
           <div className="contacts">
               <a href="https://www.linkedin.com/in/olha-suprun/"> <img className="icon-contact" src={linkedin_dark} alt="linkedin" ></img></a>
               <a href="mailto:olha.suprun.w@gmail.com"><img className="icon-contact" src={gmail} alt="gmail"></img></a>
               <a href="https://github.com/SoVa-web"><img className="icon-contact" src={github_dark} alt="github"></img></a>
           </div>
            <a href="https://weathersovaappp.herokuapp.com/">
              <h2 className="apidocumentation">
              API Documentation
              </h2>
            </a>
      </div>
        
    );
  }
  
  export default Footer;