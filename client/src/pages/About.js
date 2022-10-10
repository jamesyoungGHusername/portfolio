import React from 'react';
import headshot from '../assets/headshot for portfolio site.jpeg'

const About = () => {

    return(
        <section id="about">
                  <h1>
                  About
                  </h1>
                  <div className="photo-and-content">
                      <div><img src={headshot} alt="a headshot of James"/></div>
                      <div className="content">
                          <p>
                              James isn't very good at writing about himself, but he'll give it his best shot anyway.
                              Raised in Colorado, he attended the University of Groningen in the North of the Netherlands 
                              where he obtained a degree in Politics, Philosophy and Economics.
                              Supposedly it's a common name for a degree over there, 
                              but James thinks they could have gotten away with just calling it political Econonomy. 
                              He likes the subject, but he likes coding more.
                          </p>
                          
                      </div>
                  
                  
                  </div>
              </section>
    );
}
export default About;