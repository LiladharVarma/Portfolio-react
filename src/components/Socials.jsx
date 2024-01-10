import React from "react";
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function Socials() {
    const iconStyles = {
        width: '5rem',
    height: '5rem',
        
      
      };
  return (
    <section class="social-container" id="social-container">
      <h1 class="heading centre">Socials</h1>
     <div className="socials-container">
     <a  className="icons"  href="https://github.com/LiladharVarma" target="blank"><GitHubIcon style={iconStyles}/></a>
      <a className="icons" href="https://www.linkedin.com/in/liladhar-varma-752615247/" target="blank"><LinkedInIcon style={iconStyles} /></a>
      <a className="icons"   href="https://www.instagram.com/bajirao1292/" target="blank"><InstagramIcon style={iconStyles} /></a>
      <a className="icons" href="mailto:liladharvarma29@gmail.com" target="blank"><MailOutlineIcon style={iconStyles}/></a>
     </div>

     <h2 class="heading centre" >Thank You</h2>
    
    </section>
  );
}

export default Socials;
