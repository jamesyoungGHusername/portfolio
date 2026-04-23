import "./About.css";

//import {FaJava} from "react-icons/fa";
import {SiApachemaven, SiArduino, SiCplusplus, SiCsharp, SiCss3, SiHandlebarsdotjs, SiHtml5, SiIos, SiTypescript, SiMicropython, SiMongodb, SiMysql, SiNodedotjs, SiNpm, SiPython, SiRaspberrypi, SiReact, SiSwift, SiUnity, SiPostgresql} from "react-icons/si";

import { FaJava, FaPython } from "react-icons/fa";

import React from 'react';

const About = () => {
    return(
        <section id="about">
            <div className='aboutContainer'>
                  <div className="photo-and-content">
                    
                    <div className='photoContainer'>

                        <div className="content">
                          <p>
                              I like running, cooking, writing, and travel. I also really like coding.
                          </p>
                          <p>
                         If you have an idea and need help bringing it to life, I want to hear about it. Doesn't matter if it's a little (or a lot) outlandish.
                          </p>
                          <p>
                          I thrive on small teams, and want projects that I can really make my own.
                          </p>
                      </div>
                      <div className='languageIcons' style={{paddingTop:"2em"}}>
                            <SiSwift className='icon' size={70} color={"white"}title={"Swift"}/><FaPython className='icon' size={70} color={"white"}title={"Java"}/><SiTypescript className='icon' size={70} color={"white"}title={"Javascript"}/>
                        </div>
                        <div className='toolIcons'>
                            <SiUnity className='icon' size={70} color={"white"} title={"Unity"}/><SiMongodb className='icon' size={70} color={"white"} title={"MongoDB"}/><SiPostgresql className='icon' size={70} color={"white"} title={"SQL"}/><SiReact className='icon' size={70} color={"white"} title={"React"}/><SiNpm className='icon' size={70} color={"white"} title={"npm"}/><SiNodedotjs className='icon' size={70} color={"white"} title={"Node.js"}/><SiArduino className='icon' size={70} color={"white"} title={"Arduino"}/><SiRaspberrypi className='icon' size={70} color={"white"}title={"RaspberryPi"}/>
                        </div>
                    </div>
                  </div>
                </div>
        
            
            
        
        </section>
    );
}
export default About;