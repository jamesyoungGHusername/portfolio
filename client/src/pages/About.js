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
                              I like riding bikes and have strong opinions about infrastructure and city design. 
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
    );
}
export default About;