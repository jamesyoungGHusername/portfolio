import React from 'react';
import headshot from '../assets/headshot for portfolio site.jpeg'
import "./About.css";
//import {FaJava} from "react-icons/fa";
import {SiApachemaven, SiArduino, SiCplusplus, SiCsharp, SiCss3, SiHandlebarsdotjs, SiHtml5, SiIos, SiJava,SiJavascript,SiMicropython,SiMongodb,SiMysql,SiNodedotjs,SiNpm,SiPython,SiRaspberrypi,SiReact,SiSwift,SiUnity} from "react-icons/si";

const About = () => {

    return(
        <div>
        <section id="about">
                  <div className="photo-and-content">
                    
                      <div className='photo'><img className='photo' src={headshot} alt="a headshot of James"/></div>
                      <div className="content">
                          <p>
                              Raised in Colorado, I attended the University of Groningen in the North of the Netherlands 
                              where I obtained a degree in Politics, Philosophy and Economics.
                              I like riding bikes, cooking, and travel. 
                          </p>
                          <p>
                              I have been coding for approximately 7 years as a hobby, for academic reasons, and occasionally as a freelancer. I'm professionally functional (to use the spoken language term) with Java, Swift, Javascript, and C# through Unity, and I also enjoy doing custom electronics and code using raspberry pis and arduinos for interactive art exhibits.
                          </p>
                          <p>
                              If you have an idea, hairbrained or not, I want to hear about it. My economics and small business background makes startups my preferred working environment. I want projects and work that I can make my own.
                          </p>
                          
                      </div>
    
                  </div>
                  
        </section>
            <div className='languageIcons'><SiSwift className='icon' size={70} color={"white"}/><SiJava className='icon' size={70} color={"white"}/><SiJavascript className='icon' size={70} color={"white"}/><SiCsharp className='icon' size={70} color={"white"}/><SiMicropython className='icon' size={70} color={"white"}/></div>
            <div className='toolIcons'><SiUnity size={70} color={"white"}/><SiMongodb size={70} color={"white"}/><SiMysql size={70} color={"white"}/><SiReact size={70} color={"white"}/><SiApachemaven size={70} color={"white"}/><SiHandlebarsdotjs size={70} color={"white"}/><SiNpm size={70} color={"white"}/><SiNodedotjs size={70} color={"white"}/><SiHtml5 size={70} color={"white"}/><SiCss3 size={70} color={"white"}/><SiArduino size={70} color={"white"}/><SiRaspberrypi size={70} color={"white"}/></div>
        </div>
    );
}
export default About;