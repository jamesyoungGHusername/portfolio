import React from 'react';
import Project from '../components/Project';
import flashcardsIcon from '../assets/FlashcardsApplcon.png';
import infiniMatchAppIcon from '../assets/InfiniMatchAppIcon.png';

const Projects = () => {
    return (
        <section id="projects">
                <h1>
                Projects
                </h1>
                <ul>
                    <Project image={infiniMatchAppIcon} link='https://apps.apple.com/us/app/madaba-match/id1598843708' name="Madaba Match" desc="A match game where the important thing isn't where you end up, it's how you got there."/>
                    <Project link='https://l1keafox.github.io/RealTimeCommodities/' name="Real Time Commodities" desc="Worked with a group to implement API calls and google charts."/>
                    <Project link='https://github.com/jmobrien1976/Five-Guys' name="Hypothetical Food-Ordering System" desc='Worked with a group to implement a website that allowed users to "order" food from a hypothetical restaurant. Used a mysql database, bcrypt, handlebars and Stripe.'/>
                    <Project image={flashcardsIcon} link='https://apps.apple.com/us/app/csv-flashcards/id1594741018' name="CSV Flashcards" desc="A productivity app that allows users to import decks of flashcards from CSV files."/>
                </ul>
                
                
            </section>
    );
}

export default Projects;