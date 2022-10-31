import React from 'react';
import Project from '../components/Project';
import flashcardsIcon from '../assets/FlashcardsApplcon.png';
import infiniMatchAppIcon from '../assets/InfiniMatchAppIcon.png';
import phoneIcon from '../assets/IMG_1965.JPG';
import bubbleIcon from '../assets/bubbleArcade.png'
import commoditiesIcon from '../assets/Commodities.png';
import hamburgerIcon from '../assets/hamburger.png';
import "./Projects.css";
// CHANGE TO MORPH AND DISPLAY BLOG INFO INSTEAD OF LINKING SOMEWHERE ELSE.
const Projects = () => {
    return (
        <section id="projects">
                <ul className='projectList'>
                    {/* Put text in italics or something */}
                    <Project image={infiniMatchAppIcon} link='https://apps.apple.com/us/app/madaba-match/id1598843708' name="Madaba Match" desc="A match game where the important thing isn't where you end up, it's how you got there." text="This was written in Swift for iOS using sprite kit. It makes use of sound and tactile feedback to provide a realistic and satifying user experience when shifting tiles. Includes a color-blind mode as an accessibility option."/>
                    <Project image={flashcardsIcon} link='https://apps.apple.com/us/app/csv-flashcards/id1594741018' name="CSV Flashcards" desc="A productivity app that allows users to import decks of flashcards from CSV files." text="Written in Swift using UIKit, this app integrates with airdrop and sharing, allowing users to not just import and study decks of flashcards, but also send them to their contacts and share them on social media. Planned iterations of this app will add support for other file formats and allow manual user selection of categories when importing cards."/>
                    <Project image={phoneIcon} link='https://github.com/jamesyoungGHusername' name="Interactive Art Popup @ The Gaylord Hotel" desc="Conference attendees could leave a message at a payphone, and listen to others' messages from phone handsets suspended from the ceiling." text="One of my favorite jobs ever. I brought my clients' vision to life by gutting a novelty rotary phone and wiring up a raspberry pi to the handset, number pad, and switch used to hang up. When people picked up the handset they were prompted to record a message for other people at the convention. Once they finished recording and confirmed their submission using the number pad their message was added to an FTP server being run by the pi controlling the phone. Other raspberry pis would play random messages from the server on additional handsets suspended around the exhibit."/>
                    <Project image={bubbleIcon} link='https://bubbledungeonz.herokuapp.com' name="Bubble Arcade" desc="A game website that generates supporting infrastructure like chat and accessability/settings options for games hosted on it." text="This was written by a team of five people in about 4 days as the final project for The University of Denver's coding boot-camp. I was personally responsible for much of the back-end mongoDB infrastructure, as well as for building a live chat system. The system dynamically updates which chats each user is a participant in depending on context."/>
                    <Project image={commoditiesIcon} link='https://l1keafox.github.io/RealTimeCommodities/' name="Real Time Commodities" desc="Worked with a group to fetch and display information pertaining to various commodity trading prices." text="This was the first group project of the DU Full-Stack bootcamp. Most of the team was getting their feet wet with Git and html. My portion of the project consisted of writing code to make multiple calls to the pricing api concurrently, awaiting all required data, organizing it, then feeding it into google charts to be displayed on the page. I had to work around the limitations of the api. It would only return a single candlestick's worth of data for a date or set of dates at a time, and for some reason it didn't allow clients to make hundreds of calls in the space of a few miliseconds. (Can't imagine why.)"/>
                    <Project image={hamburgerIcon} link='https://arcane-mesa-45752.herokuapp.com/' name="Hypothetical Food-Ordering System" desc='Worked with a group to implement a website that allowed users to "order" food from a hypothetical restaurant. Used a mysql database, bcrypt, handlebars and Stripe.' text="The second project for the DU Full-Stack bootcamp. This was a food ordering system built for a hypothetical restaurant. The 'five guys' comes from the fact that there were five guys in the group, not from any affiliation with the burger chain. It uses a mySQL database to store the menu, the user's cart, and the user information. I was responsible for much of the database, and for implementing payment with stripe."/>
                    
                </ul>
                
                
            </section>
    );
}

export default Projects;