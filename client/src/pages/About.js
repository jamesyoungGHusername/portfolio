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
                              I like riding bikes, cooking, writing, and travel. I also really like coding - it was my hobby for years before it even occurred to me to do it professionally. Now it's even more fun than it was when it was just a hobby! 
                          </p>
                          <p>
                           The thing that makes coding fun for me is that there's always new problems to solve and new things to learn. If you have an idea and need help bringing it to life, I want to hear about it! Doesn't matter if it's a little (or a lot) outlandish, that's exactly what I'm looking for.
                          </p>
                          <p>
                          I thrive on small teams, and want projects that I can really make my own.
                          </p>
                          
                      </div>
    
                  </div>
                  
        </section>
            <div className='languageIcons'><SiSwift className='icon' size={70} color={"white"}title={"Swift"}/><SiJava className='icon' size={70} color={"white"}title={"Java"}/><SiJavascript className='icon' size={70} color={"white"}title={"Javascript"}/><SiCsharp className='icon' size={70} color={"white"}title={"C# with Unity"}/><SiMicropython className='icon' size={70} color={"white"} title={"Mincropython (for microcontrollers)"}/></div>
            <div className='toolIcons'><SiUnity size={70} color={"white"} title={"Unity"}/><SiMongodb size={70} color={"white"} title={"MongoDB"}/><SiMysql size={70} color={"white"} title={"SQL"}/><SiReact size={70} color={"white"} title={"React"}/><SiApachemaven size={70} color={"white"} title={"Apache and also Maven"}/><SiHandlebarsdotjs size={70} color={"white"} title={"handlebars.js"}/><SiNpm size={70} color={"white"} title={"npm"}/><SiNodedotjs size={70} color={"white"} title={"Node.js"}/><SiHtml5 size={70} color={"white"} title={"HTML5"}/><SiCss3 size={70} color={"white"}title={"CSS3"}/><SiArduino size={70} color={"white"} title={"Arduino"}/><SiRaspberrypi size={70} color={"white"}title={"RaspberryPi"}/></div>
        </div>
    );
}
export default About;