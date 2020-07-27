import React ,{Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Contact extends Component{
    render(){
        return(
            <div>
                <h2>Contact me</h2>
                 <p>ph no: 12345648</p> 
                 <p style ={{marginBottom:"2rem"}}>You can email me abc@gmail.com or the link below</p>
           
           <FontAwesomeIcon icon={["fab","twitter"]} size="2x" />
           <a
           href="https://twitter.com/home"
           style={{
               textShadow:"0 1px 0 rgba(0,0,0,0,1)",
               margin:"0rem 2rem 0rem 0.5rem",
               textDecoration:"none",
               color:"#ced4da"
           }}
           >Twitter</a>

        <FontAwesomeIcon icon={["fab","linkedin"]} size="2x" />
           <a
           href="https://www.linkedin.com/login"
           style={{
               textShadow:"0 1px 0 rgba(0,0,0,0,1)",
               margin:"0rem 2rem 0rem 0.5rem",
               textDecoration:"none",
               color:"#ced4da"
           }}
           >Linkedin</a>

<FontAwesomeIcon icon={["fab","github"]} size="2x" />
           <a
           href="https://github.com/"
           style={{
               textShadow:"0 1px 0 rgba(0,0,0,0,1)",
               margin:"0rem 2rem 0rem 0.5rem",
               textDecoration:"none",
               color:"#ced4da"
           }}
           >Github</a>

{/* <FontAwesomeIcon icon={["fab","facebook"]} size="2x" />
           <a
           href="https://www.facebook.com/"
           style={{
               textShadow:"0 1px 0 rgba(0,0,0,0,1)",
               margin:"0rem 2rem 0rem 0.5rem",
               textDecoration:"none",
               color:"#ced4da"
           }}
           >Facebook</a> */}
            </div>
        )
    }
}

export default Contact;