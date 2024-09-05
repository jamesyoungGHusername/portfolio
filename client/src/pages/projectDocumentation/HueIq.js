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
    <section className="description" style={{paddingBottom:"3em"}}>
        <p style={{textAlign:"center",fontWeight:"bold",paddingBottom:"2em"}}>
            Hue IQ is the ultimate companion for precise color analysis. Get detailed insights and dress confidently. Designed for fashion enthusiasts and savvy shoppers, Hue IQ helps you make informed clothing choices by providing comprehensive color data, including hex codes and detailed information about a color’s warmth, coolness, darkness, lightness, softness, and brightness.
        </p>
        <h2>
            Overview
        </h2>
        <p>
            Seasonal color analysis is a method for determining which clothing and cosmetic colors harmonize with a person's natural features, categorizing them into a "color season." Hue IQ uses a neural network trained to recognize which colors best suit each season, helping you coordinate your wardrobe effortlessly. Simply sample colors from a piece of clothing you want to analyze, discover which season(s) it complements, and save your analysis for future reference.
        </p>
        <div className="imageRow">
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/assets/ColorPickerScreen.png" alt="A screenshot from the app, showing the color picker screen"/>
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/assets/PaletteDetailViewPink.png" alt="A screenshot from the app, showing the saved palette screen with colors minimized"/>
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/assets/PletteDetailViewPinkExpanded.png" alt="A screenshot from the app, showing the saved palette screen with colors expanded"/>
        </div>
        <h2>
            Create
        </h2>
        <p>
            The "Create" tab lets you build a color palette from any photograph—whether it's a screenshot of clothes you're eyeing online, a photo of a lipstick you're considering, or any other image.
        </p>
        <p>
            Once you've selected your colors, you'll see the neural network's prediction of which color season each shade aligns with. If a color could work for multiple seasons, tapping on it will reveal all the potential matches.
        </p>
        <p>
            After finalizing your palette, you can name and save it for future reference.
        </p>
        <div className="imageRow">
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/LipstickColorSelector.png" alt="A screenshot from the app, showing the color picker screen for some lipstick. The color-selection cursor is visible."/>
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/SweaterColorSelector.png" alt="A screenshot from the app, showing the color picker screen for a sweater"/>
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/SweaterAnalysisScreen.png" alt="A screenshot from the app, showing the analysis screen for the colors selected from the sweater."/>
        </div>
        <h2>
            Wardrobe
        </h2>
        <p>
            The "Wardrobe" tab displays a list of all the palettes you've saved. Tapping on a palette opens a detailed view where you can revisit your analysis and make edits to any of the colors in the palette.
        </p>

        <div className="imageRow">
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/Wardrobe.png" alt="A screenshot from the app, showing the saved palette screen. Thumbnails for all saved palettes are arrayed in a grid."/>
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/PolishDetailView.png" alt="A screenshot from the app, showing the palette detail view for several bottles of nail polish."/>
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/EditColorView.png" alt="A screenshot from the app, showing the color editor screen for one of the colors picked from the nail polish"/>
        </div>

        <h2>
            Profile
        </h2>
        <p>
            The "Profile" tab shows the color season you’ve set for yourself. Here, you can change your selected season or take our color season quiz to explore which season you might belong to.
        </p>
        <p>
            The quiz, rather than using AI, prompts you to think about and rank your features on subjective scales. There are no wrong answers—the aim is for the results to reflect how you see yourself because we believe you know yourself better than any AI ever could.
        </p>
        <div className="imageRow">
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/ProfileScreen.png" alt="A screenshot from the app, showing the profile screen."/>
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/QuizScreen.png" alt="A screenshot from the app, showing one of the quiz screens. The quiz is asking about the user's hair color."/>
            <img src="https://s3.us-west-2.amazonaws.com/jamesyoung.aws.portfolio/QuizResults.png" alt="A screenshot from the app, showing the quiz results screen. The quiz thinks the user might be a true summer."/>
        </div>
    </section>

</section>
}