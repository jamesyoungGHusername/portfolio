import React from "react"
import "./HueIq.css"

export default function HueIq(){
    return <section className="content">
        <section className="hueIqTitleCard">
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}}>
                    <img style={{borderRadius:30}} className="largeImage" src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/assets/HueIQLogo.jpg" alt="Hue Iq Logo. A question mark with a circle of colors around the dot at the bottom."/>
                    <div style={{paddingLeft:"2em"}}>
                        <h2>
                            Hue IQ
                        </h2>
                        <h3>
                            Seasonal Color Analysis Assistant
                        </h3>
                    </div>
                </div>

            </div>

            <a style={{paddingTop:"3em"}} href="https://apps.apple.com/us/app/hue-iq-color-analysis/id6538728292" target="_blank" rel="noopener noreferrer">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the app store badge."/>
            </a>
        </section>
    <section className="description">
        <p>
            HueIQ is the ultimate companion for precise color analysis. Get detailed insights and dress confidently. Designed for fashion enthusiasts and savvy shoppers, HueIQ helps you make informed clothing choices by providing comprehensive color data. 
        </p>
        <h3>
            Overview
        </h3>
        <p>
            Seasonal color analysis is a method for determining what color clothes and cosmetics harmonize with a person's features by categorizing them into a Color Season. Hue Iq helps people make  of a neural network that's trained to recognize which colors will look good with which season.
        </p>
        <h3>
            Create
        </h3>
        <p>
            The Create tab allows you to build a color palette from a photograph. This could be a screenshot of some clothes you're thinking about buying online, a photo of some lipstick you're considering, or anything.
        </p>
        <p>
            Once you've selected your colors, you'll be able to see the neural network's prediction about which color season each color goes best with. If there's more than one season that might work, expanding the color by tapping it will display all the potential matches.
        </p>
        <p>
            After you're pleased with your palette you can name and save it for future reference.
        </p>
        <h3>
            Saved
        </h3>
        <p>
            The Saved tab shows a list of all the palette's you've saved before. Tapping on a palette will open a detail view where you can see it's analysis again.
        </p>
        <h3>
            Profile
        </h3>
        <p>
            The Profile tab shows which color season you've set for yourself. It's also where you can change your selected color season, and where you can take our color season  quiz to help get an idea of what season you might fall into.
        </p>
        <p>
            The quiz, instead of using AI, asks you to think about and rank your features on subjective scales. There's no wrong answers, and the idea is that your results should reflect how you view yourself.
        </p>
    </section>

</section>
}