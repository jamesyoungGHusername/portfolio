import React from 'react';
import headshot from '../assets/headshot for portfolio site.jpeg'
import "./About.css";

const About = () => {

    return(
        <section id="about">
                  <div className="photo-and-content">
                    
                      <div className='photo'><img className='photo' src={headshot} alt="a headshot of James"/></div>
                      <div className="content">
                          <p>
                              Raised in Colorado, I attended the University of Groningen in the North of the Netherlands 
                              where I obtained a degree in Politics, Philosophy and Economics.
                              Supposedly it's a common name for a degree over there, 
                              but I think they could have gotten away with just calling it Political Econonomy. 
                          </p>
                          <p>
                              I have been coding for appromiately 7 years as a hobby, for academic reasons, and occasionally as a freelancer. I'm prfessionally functional (to use the spoken language term ) with Java, Swift, Javascript, and C# through Unity, and I also enjoy doing custom electronics (raspberry pi and arduino) and code (bash and micropython) for interactive art exhibits.
                          </p>
                          <p>
                              If you have an idea, hairbrained or not, I want to hear about it. My economics and small business background makes startups my preferred working environment. I want projects and work that I can make my own.
                          </p>
                          
                      </div>
                  
                  
                  </div>
        </section>
    );
}
export default About;