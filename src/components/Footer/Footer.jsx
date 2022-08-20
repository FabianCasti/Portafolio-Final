import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Link from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>fcastillop@unicesar.edu.co</span>
        <div className="f-icons">  
           <a href=""><Gitub color="white" size={"3rem"} /></a>           
           <a href=""><Link color="white" size={"3rem"} /></a>    
        </div>
      </div>
    </div>
  );
};

export default Footer;
