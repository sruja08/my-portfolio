import React ,{Component} from "react";
import "./About.css"

class About extends Component{
    render(){
        return(
            <div className="about">
                <h2>About me</h2>
                <div className="border"></div>
                <p>Iam a developer. I love cycling and playing badmition</p> 
            </div>
        )
    }
}

export default About;