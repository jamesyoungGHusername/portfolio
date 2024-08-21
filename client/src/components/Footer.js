import resumee from "../assets/James-Young-Resume.pdf";
import NavContextProvider, {useNavContext} from "../utils/NavContext";
export default function Footer(){
    const {currentLocation,setCurrentLocation} = useNavContext();
    
    if(currentLocation === "hue-iq"){
        return <></>
    }


    return(
        <footer>
            <ul>
            <a href="https://github.com/jamesyoungGHusername">Github</a>
            <a href="https://www.linkedin.com/in/james-young-52479810a/">LinkedIn</a>
            <a href={resumee} download>R&#233;sum&#233;</a>
            </ul>
            
        </footer>
    );
}